"use client";
import { Body } from "@/components/layout/Body";
import { useGetInventory } from "./hooks/api/queries";
import { InventoryTable } from "./components/InventoryTable";
import { Button } from "@/components/ui";
import { Plus, RefreshCw } from "lucide-react";
import { InventoryForm } from "./components/InventoryForm";

export const InventoryPage = () => {
  const { refetch } = useGetInventory();

  return (
    <Body breadcrumbs={[{ url: "/inventory", title: "Inventory" }]}>
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
        <InventoryForm
          button={
            <Button className="rounded-3xl">
              <Plus className="mr-2 h-4 w-4" />
              Add stock
            </Button>
          }
        />
      </div>
      <InventoryTable />
    </Body>
  );
};
