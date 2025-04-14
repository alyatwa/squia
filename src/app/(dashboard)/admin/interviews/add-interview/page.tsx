import { AdminAddInterviewPage } from "@/modules/Admin/interviews/add-interview/AddInterviewPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Add interview | Admin",
    description: "Dashboard",
  };
}

export default async function addInterview() {
  return <AdminAddInterviewPage />;
}
