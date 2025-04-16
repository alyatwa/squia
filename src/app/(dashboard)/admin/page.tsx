import Head from "next/head";
import { Metadata } from "next";
import { AdminHomePage } from "@/modules/Admin/home/views/AdminHomePage";
import { getServerSession } from "next-auth";
import { getSession } from "@/modules/Auth/lib";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin | Dashboard",
    description: "Dashboard",
  };
}

export default async function Admin() {
  const session = await getSession();

  console.log(session);
  return <AdminHomePage />;
}
