import Head from "next/head";
import { Metadata } from "next";
import { OverviewPage } from "@/modules/Overview";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Dashboard",
    description: "Dashboard",
  };
}

export default async function Overview() {
  return (
    <div>
      <OverviewPage />
    </div>
  );
}
