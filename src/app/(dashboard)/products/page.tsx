import Head from "next/head";
import { Metadata } from "next";
import { OrdersPage } from "@/modules/Orders";
import { ProductsPage } from "@/modules/Products";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/config/get-query-client";
import { fetchProductsOptions } from "@/modules/Products/hooks/api/queries";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Products | Dashboard",
    description: "Dashboard",
  };
}

export default async function Products() {
  const queryClient = getQueryClient();
  void (await queryClient.prefetchQuery(fetchProductsOptions));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsPage />
    </HydrationBoundary>
  );
}
