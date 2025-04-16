"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
// import { GlobalStoreProvider } from "@/providers/store-provider";
import { queryClient } from "@/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "./providers/theme-provider";
import { Session } from "next-auth";

export default function Providers({
  session,
  children,
}: {
  session?: Session | null;
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </QueryClientProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
