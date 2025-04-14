import Head from "next/head";
import { Metadata } from "next";
import { AdminAddOrderPage } from "@/modules/Admin/orders/views/AdminAddOrderPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin Add order | Dashboard",
    description: "Dashboard",
  };
}

export default async function addOrder() {
  return (
    <div>
      <AdminAddOrderPage />
    </div>
  );
}
