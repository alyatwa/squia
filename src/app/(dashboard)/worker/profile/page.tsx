import Head from "next/head";
import { Metadata } from "next";
import { ClientProfilePage } from "@/modules/Worker/profile/views/ClientProfilePage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Profile | Worker Dashboard",
    description: "Dashboard",
  };
}

export default async function profile() {
  return <ClientProfilePage />;
}
