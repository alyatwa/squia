import { AdminInterviewsPage } from "@/modules/Admin/interviews/home/views/AdminInterviewsPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Interviews | Admin",
    description: "Dashboard",
  };
}

export default async function interviews() {
  return <AdminInterviewsPage />;
}
