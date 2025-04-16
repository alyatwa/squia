import axios from "axios";

interface ApolloProps {
  jwt: string;
  query: any;
}

export const useApollo = async (details: ApolloProps) => {
  try {
    const { data } = await axios.post(
      process.env.NEXT_PUBLIC_GRAPHQL_URL ?? "",
      {
        query: details.query,
      },
      {
        headers: {
          Authorization: `Bearer ${details.jwt}`,
          "Content-Type": "application/json",
        },
      }
    );
    return data.data;
  } catch (error) {
    console.error("Error executing Apollo query:", error);
    throw error;
  }
};
