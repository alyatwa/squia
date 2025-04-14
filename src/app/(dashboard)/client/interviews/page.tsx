import Head from "next/head";
import { Metadata } from "next";
import { ClientInterviewsPage } from "@/modules/Client/interviews/home/views/ClientInterviewsPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Interviews | Client Dashboard",
    description: "Dashboard",
  };
}

export default async function clientHome() {
  return <ClientInterviewsPage />;
}
