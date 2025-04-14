import Head from "next/head";
import { Metadata } from "next";
import { InquiriesPage } from "@/modules/classic/Inquiries";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Inquiries | Dashboard",
    description: "Dashboard",
  };
}

export default async function Inquiries() {
  return (
    <div>
      <InquiriesPage />
    </div>
  );
}
