import Head from "next/head";
import { Metadata } from "next";
import { AdminPage } from "@/modules/Admin";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin | Dashboard",
    description: "Dashboard",
  };
}

export default async function Admin() {
  return (
    <div>
      <AdminPage />
    </div>
  );
}
