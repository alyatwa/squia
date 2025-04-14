import { AdminWorkersPage } from "@/modules/Admin/workers/home/views/AdminWorkersPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Workers | Admin",
    description: "Dashboard",
  };
}

export default async function addWorker() {
  return <AdminWorkersPage />;
}
