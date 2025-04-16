import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { META_THEME_COLORS } from "@/config/site";
import Providers from "./providers";
import { getSession } from "@/modules/Auth/lib";
import { getServerSession } from "next-auth";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Next",
  description: "Home",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  console.log("layout----------------", session);
  return (
    <html
      lang="ar"
      dir="rtl"
      className="light"
      style={{ colorScheme: "light" }}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-svh bg-background font-cairo antialiased",
          "bg-white text-dark min-h-screen flex flex-col enhanced-dashboard",
          cairo.variable
          // geistSans.variable,
          // geistMono.variable
        )}
      >
        <Providers session={session}>
          <div vaul-drawer-wrapper="">
            <div className="relative flex min-h-svh flex-col bg-background">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
