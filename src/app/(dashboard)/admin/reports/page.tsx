import { AdminReportsPage } from "@/modules/Admin/reports/views/AdminReportsPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin pricing | Dashboard",
    description: "Dashboard",
  };
}

export default async function Orders() {
  return <AdminReportsPage />;
}
