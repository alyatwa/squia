import Head from "next/head";
import { Metadata } from "next";
import { ClientAddInterviewPage } from "@/modules/Client/interviews/add-interview/views/ClientAddInterviewPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Add Interview | Client Dashboard",
    description: "Dashboard",
  };
}

export default async function addInterview() {
  return <ClientAddInterviewPage />;
}
