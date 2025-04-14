import { AdminClientsPage } from "@/modules/Admin/clients/clients/views/AdminClientsPage";
import { AdminOrdersPage } from "@/modules/Admin/orders/views/AdminOrdersPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin clients | Dashboard",
    description: "Dashboard",
  };
}

export default async function clients() {
  return <AdminClientsPage />;
}
