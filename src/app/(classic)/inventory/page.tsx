import Head from "next/head";
import { Metadata } from "next";
import { OrdersPage } from "@/modules/Orders";
import { InventoryPage } from "@/modules/Inventory";
import { getQueryClient } from "@/config/get-query-client";
import { fetchInventoryOptions } from "@/modules/Inventory/hooks/api/queries";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Inventory | Dashboard",
    description: "Dashboard",
  };
}

export default async function Inventory() {
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(fetchInventoryOptions));

  return (
    <>Inventory</>
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <InventoryPage />
    // </HydrationBoundary>
  );
}
