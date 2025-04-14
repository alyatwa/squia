import Head from "next/head";
import { Metadata } from "next";
import { WorkerAssistantPage } from "@/modules/Worker/assistant/views/WorkerAssistantPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Assistant | Worker Dashboard",
    description: "Dashboard",
  };
}

export default async function assistant() {
  return <WorkerAssistantPage />;
}
