import nextAuth, { NextAuthConfig, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import client from "@/lib/apolloClient";
import { LoginDocument } from "@/gql/graphql";
import { Role } from "../hooks/types";
import { useApollo } from "../hooks/queries";

// Constants for environment variables
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET ?? "default-secret";

// Interface for user object
interface UserObject {
  username: string;
  email: string;
  userId: string;
  role: Role;
  avatar: string;
}

// Interface for token object
interface TokenObject {
  access_token: string;
  accessToken: string;
  jwt: string;
  user: UserObject;
  validity: {
    refresh_until: number;
    valid_until: number;
  };
}

// Verify JWT token
function verifyToken(token: string): UserObject | null {
  try {
    return jwt.verify(token, NEXTAUTH_SECRET) as UserObject;
  } catch (error: any) {
    console.error(
      "Invalid token: ",
      NEXTAUTH_SECRET,
      " - ",
      token,
      " - ",
      error.message
    );
    return null;
  }
}

// NextAuth configuration
const authOptions: NextAuthConfig = {
  secret: NEXTAUTH_SECRET,
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60 * 30, // 30 days
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        usernameOrEmail: {
          label: "Email",
          type: "text",
          placeholder: "user@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { usernameOrEmail, password } = credentials as {
          usernameOrEmail: string;
          password: string;
        };

        try {
          const { data, errors } = await client.mutate({
            mutation: LoginDocument,
            variables: { loginInput: { password, usernameOrEmail } },
          });

          const access_token = data?.login.accessToken;

          if (!access_token) {
            throw new Error("No access token received");
          }

          const decodedUser = verifyToken(access_token);
          // console.log(decodedUser);
          if (!decodedUser) {
            throw new Error("Unauthorized - Invalid token");
          }

          const user: UserObject = {
            avatar: "", //userProfile.myProfile.profileImage ??
            username: decodedUser.username,
            email: decodedUser.email,
            role: decodedUser.role,
            userId: decodedUser.userId,
          };

          const oneMonthInSeconds = 30 * 24 * 60 * 60;
          const validUntil = Math.floor(Date.now() / 1000) + oneMonthInSeconds;

          return {
            user,
            id: decodedUser.userId,
            tokens: {
              access: access_token,
              accessToken: access_token,
            } as any,
            validity: {
              refresh_until: validUntil,
              valid_until: validUntil,
            },
            jwt: access_token,
          };
        } catch (error: any) {
          // console.error("Authentication error:", error);

          // Extract more details from Apollo errors
          if (error.networkError) {
            console.error("Network error:", error.networkError);

            // Handle 401 errors specifically
            if (error.networkError.statusCode === 401) {
              console.error(
                "Unauthorized - Check credentials or token validity"
              );
            }
          }

          if (error.graphQLErrors) {
            console.error(
              "GraphQL errors:",
              error.graphQLErrors.map((e: any) => e.message).join(", ")
            );
          }

          throw new Error(
            `Authentication failed: ${error.message || "bad_credentials"}`
          );
        }
      },
    }),
  ],
  pages: {
    signIn: `/auth/login`,
  },
  callbacks: {
    async jwt({ token, user, session }) {
      // console.log("jwt----------------", { token, user });

      token.access_token = (user as any)?.jwt ?? (token as any).jwt;
      token.accessToken = (user as any)?.jwt ?? (token as any).jwt;
      token.jwt = (user as any)?.jwt ?? (token as any).jwt;
      token.user = (user as any)?.user ?? (token as any).user;
      token.validity = (user as any)?.validity ?? (token as any).validity;

      if (!user) {
        user = token as any;
      }

      if (!session) {
        session = token as any;
      }

      return token;
    },
    async session({ session, token, trigger, newSession }) {
      // @ts-ignore
      session.user = token.user as UserObject;
      // session.error = token.error;
      (session as any).access_token = token.jwt;
      (session as any).jwt = token.jwt;

      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

// Utility function to get server session
// const getSession = () => getServerSession(authOptions);
export const { auth, handlers, signIn, signOut } = nextAuth(authOptions);
export { authOptions };
