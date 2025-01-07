import Head from "next/head";
import { Metadata } from "next";
import { OrdersPage } from "@/modules/Orders";
import { InventoryPage } from "@/modules/Inventory";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Inventory | Dashboard",
    description: "Dashboard",
  };
}

export default async function Inventory() {
  return (
    <div>
      <InventoryPage />
    </div>
  );
}
