import { Sidebar } from "@/components/layout/sidebar/sidebar-provider";
import { ReactNode } from "react";

export const dynamic = "force-static";

export default async function Layout({ children }: { children: ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}
