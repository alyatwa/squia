import { AdminAddWorkerPage } from "@/modules/Admin/workers/add-worker/views/AdminAddWorkerPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Add worker | Admin",
    description: "Dashboard",
  };
}

export default async function addWorker() {
  return <AdminAddWorkerPage />;
}
