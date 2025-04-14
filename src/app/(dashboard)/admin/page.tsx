import Head from "next/head";
import { Metadata } from "next";
import { AdminHomePage } from "@/modules/Admin/home/views/AdminHomePage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin | Dashboard",
    description: "Dashboard",
  };
}

export default async function Admin() {
  return <AdminHomePage />;
}
