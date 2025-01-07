import Head from "next/head";
import { Metadata } from "next";
import { SettingsPage } from "@/modules/Settings";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Settings | Dashboard",
    description: "Dashboard",
  };
}

export default async function Settings() {
  return (
    <div>
      <SettingsPage />
    </div>
  );
}
