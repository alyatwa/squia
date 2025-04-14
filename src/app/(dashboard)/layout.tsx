import { Sidebar } from "@/components/layout/sidebar/sidebar-provider";
import { Footer } from "@/modules/Home/components/Footer";
import { Nav } from "@/modules/Home/components/Nav";
import { ReactNode } from "react";

export const dynamic = "force-static";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="py-4">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
}
