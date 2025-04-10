"use client";
import { Body } from "@/components/layout/Body";
import { useGetProducts } from "./hooks/api/queries";
import { ProductsTable } from "./components/ProductsTable";
import { Button } from "@/components/ui";
import { Plus, RefreshCw } from "lucide-react";
import { ProductForm } from "./components/ProductForm";

export const ProductsPage = () => {
  const { refetch } = useGetProducts();

  return (
    <Body breadcrumbs={[{ url: "/products", title: "Products" }]}>
      {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
      <div className="py-1 flex justify-end gap-2">
        <Button
          variant="outline"
          className="rounded-3xl border-dashed"
          onClick={() => refetch()}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
        <ProductForm
          button={
            <Button className="rounded-3xl">
              <Plus className="mr-2 h-4 w-4" />
              Add product
            </Button>
          }
        />
      </div>
      <ProductsTable />
    </Body>
  );
};
