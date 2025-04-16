import { LoginPage } from "@/modules/Auth/login/LoginPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Login | Dashboard",
  description: "Dashboard",
};

export default async function login() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <LoginPage />;
}
