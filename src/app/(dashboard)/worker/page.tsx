import Head from "next/head";
import { Metadata } from "next";
import { WorkerHomePage } from "@/modules/Worker/home/views/WorkerHomePage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Worker Dashboard",
    description: "Dashboard",
  };
}

export default async function clientHome() {
  return <WorkerHomePage />;
}
