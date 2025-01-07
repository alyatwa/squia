import Head from "next/head";
import { Metadata } from "next";
import { OrdersPage } from "@/modules/Orders";
import { ProductsPage } from "@/modules/Products";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Products | Dashboard",
    description: "Dashboard",
  };
}

export default async function Products() {
  return (
    <div>
      <ProductsPage />
    </div>
  );
}
