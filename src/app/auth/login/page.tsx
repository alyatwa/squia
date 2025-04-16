import { LoginPage } from "@/modules/Auth/login/LoginPage";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Login | Dashboard",
  description: "Dashboard",
};

export default async function login() {
  return <LoginPage />;
}
