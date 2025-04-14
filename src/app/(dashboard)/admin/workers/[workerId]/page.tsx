import { AdminAddWorkerPage } from "@/modules/Admin/workers/add-worker/views/AdminAddWorkerPage";
import { AdminWorkerPage } from "@/modules/Admin/workers/worker/views/AdminWorkerPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Worker details | Admin",
    description: "Dashboard",
  };
}

export default async function worker() {
  return <AdminWorkerPage />;
}
