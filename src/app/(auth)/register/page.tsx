import RegisterPage from "@/modules/Auth/register/RegisterPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Register | Dashboard",
  description: "Dashboard",
};

export default async function register() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <RegisterPage />;
}
