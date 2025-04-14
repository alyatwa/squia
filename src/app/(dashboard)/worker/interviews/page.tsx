import Head from "next/head";
import { Metadata } from "next";
import { WorkerInterviewsPage } from "@/modules/Worker/interviews/views/WorkerInterviewsPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Interviews | Worker Dashboard",
    description: "Dashboard",
  };
}

export default async function interviews() {
  return <WorkerInterviewsPage />;
}
