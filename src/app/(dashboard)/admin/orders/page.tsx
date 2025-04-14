import { AdminOrdersPage } from "@/modules/Admin/orders/views/AdminOrdersPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin orders | Dashboard",
    description: "Dashboard",
  };
}

export default async function Orders() {
  return <AdminOrdersPage />;
}
