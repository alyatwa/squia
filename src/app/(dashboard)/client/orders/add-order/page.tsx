import Head from "next/head";
import { Metadata } from "next";
import { ClientAddOrderPage } from "@/modules/Client/orders/add-order/views/ClientAddOrderPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Add order | Client Dashboard",
    description: "Dashboard",
  };
}

export default async function addOrder() {
  return <ClientAddOrderPage />;
}
