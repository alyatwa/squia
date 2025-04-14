import Head from "next/head";
import { Metadata } from "next";
import { SupportPage } from "@/modules/classic/Support";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Support | Dashboard",
    description: "Dashboard",
  };
}

export default async function Support() {
  return (
    <div>
      <SupportPage />
    </div>
  );
}
