"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { DataTable } from "@/components/ui/table/data-table";
import { useGetInventory } from "../hooks/api/queries";
import { Inventory } from "@/types/Inventory.types";
import { InventoryForm } from "./InventoryForm";
import { AlertConfirm } from "@/components/shared/alert-confirm";
import { useDeleteInventory } from "../hooks/api/mutations";
import { toast } from "sonner";
import { formatDateTime } from "@/utils/functions/datetime";

export const InventoryTable = () => {
  const { data, isFetching, refetch } = useGetInventory();

  return (
    <DataTable
      refetch={() => refetch()}
      data={data || []}
      columns={columns}
      isLoading={isFetching}
    />
  );
};
const columns: ColumnDef<Inventory>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="capitalize">{row.original.id}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.original.name}</div>,
  },

  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize min-w-24">
        {formatDateTime(row.original.createdAt)}
      </div>
    ),
  },
  // company
  {
    accessorKey: "companyName",
    header: "Company",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.companyName}</div>
    ),
  },
  // stock type
  {
    accessorKey: "stockType",
    header: "Stock Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.stockType}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.category}</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.quantity}</div>
    ),
  },
  {
    accessorKey: "sellingPrice",
    header: "Selling Price",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.sellingPrice}</div>
    ),
  },
  {
    accessorKey: "buyingPrice",
    header: "Buying Price",
    cell: ({ row }) => (
      <div className="capitalize">{row.original.buyingPrice}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const inventory = row.original;
      const { mutateAsync: deleteInventory, isPending } = useDeleteInventory();

      const handleDelete = async () => {
        await deleteInventory(inventory.id);
        toast.success("Inventory deleted successfully");
      };
      return (
        <div className="flex items-center gap-1">
          <InventoryForm
            isUpdate
            inventory={inventory}
            button={
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4 text-green-400" />
              </Button>
            }
          />
          <AlertConfirm
            onConfirm={() => handleDelete()}
            button={
              <Button disabled={isPending} variant="ghost" size="icon">
                <X className="h-4 w-4 text-red-600" />
              </Button>
            }
          />
        </div>
      );
    },
  },
];
