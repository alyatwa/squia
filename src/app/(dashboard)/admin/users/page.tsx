import { AdminReportsPage } from "@/modules/Admin/reports/views/AdminReportsPage";
import { AdminUsersPage } from "@/modules/Admin/users/views/AdminUsersPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin users | Dashboard",
    description: "Dashboard",
  };
}

export default async function users() {
  return <AdminUsersPage />;
}
