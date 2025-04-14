import { Metadata } from "next";
import { ClientWorkersPage } from "@/modules/Client/workers/home/views/ClientWorkersPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Client Dashboard",
    description: "Dashboard",
  };
}

export default async function clientWorkers() {
  return <ClientWorkersPage />;
}
