import Head from "next/head";
import { Metadata } from "next";
import { CustomersPage } from "@/modules/Customers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/config/get-query-client";
import { fetchCustomersOptions } from "@/modules/Customers/hooks/api/queries";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Customers | Dashboard",
    description: "Dashboard",
  };
}

export default async function Customers() {
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(fetchCustomersOptions));
  return (
    <>customers</>
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <CustomersPage />
    // </HydrationBoundary>
  );
}
