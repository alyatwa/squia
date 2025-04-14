import Head from "next/head";
import { Metadata } from "next";
import { ClientHomePage } from "@/modules/Client/home/views/ClientHomePage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Client Dashboard",
    description: "Dashboard",
  };
}

export default async function clientHome() {
  return <ClientHomePage />;
}
