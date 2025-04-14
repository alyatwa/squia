import { AdminPricingPage } from "@/modules/Admin/pricing/views/AdminPricingPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin pricing | Dashboard",
    description: "Dashboard",
  };
}

export default async function Orders() {
  return <AdminPricingPage />;
}
