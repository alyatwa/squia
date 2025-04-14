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
