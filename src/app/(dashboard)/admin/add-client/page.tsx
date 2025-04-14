import Head from "next/head";
import { Metadata } from "next";
import { AdminAddClientPage } from "@/modules/Admin/clients/add-client/AdminAddClientPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin Add order | Dashboard",
    description: "Dashboard",
  };
}

export default async function addClient() {
  return (
    <div>
      <AdminAddClientPage />
    </div>
  );
}
