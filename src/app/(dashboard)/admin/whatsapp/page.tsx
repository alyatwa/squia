import { AdminWhatsappPage } from "@/modules/Admin/whatsapp/views/AdminWhatsappPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin Whatapp | Dashboard",
    description: "Whatapp",
  };
}

export default async function settings() {
  return <AdminWhatsappPage />;
}
