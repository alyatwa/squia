import Head from "next/head";
import { Metadata } from "next";
import { ClientOrdersPage } from "@/modules/Client/orders/home/views/ClientOrdersPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Orders | Client Dashboard",
    description: "Dashboard",
  };
}

export default async function orders() {
  return <ClientOrdersPage />;
}
