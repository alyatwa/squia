import Head from "next/head";
import { Metadata } from "next";
import { OrdersPage } from "@/modules/Orders";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/config/get-query-client";
import { fetchOrdersOptions } from "@/modules/Orders/hooks/api/queries";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Dashboard",
    description: "Dashboard",
  };
}

export default async function Orders() {
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(fetchOrdersOptions));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrdersPage />
    </HydrationBoundary>
  );
}
