import { AdminSettingsPage } from "@/modules/Admin/settings/views/AdminSettingsPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin Settings | Dashboard",
    description: "Dashboard",
  };
}

export default async function settings() {
  return <AdminSettingsPage />;
}
