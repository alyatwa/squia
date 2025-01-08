"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { DataTable } from "@/components/ui/table/data-table";
import { useGetProducts } from "../hooks/api/queries";
import { Product } from "@/types/Product.types";
import { ProductForm } from "./ProductForm";
import { AlertConfirm } from "@/components/shared/alert-confirm";
import { useDeleteProduct } from "../hooks/api/mutations";
import { toast } from "sonner";

export const ProductsTable = () => {
  const { data, isFetching, refetch } = useGetProducts();

  return (
    <DataTable
      refetch={() => refetch()}
      data={data || []}
      columns={columns}
      isLoading={isFetching}
    />
  );
};
const columns: ColumnDef<Product>[] = [
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
    cell: ({ row }) => (
      <div className="capitalize  w-20 truncate">{row.original.id}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize  w-24 truncate">{row.original.name}</div>
    ),
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => <div className="lowercase">{row.original.size}</div>,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div className="lowercase">{row.original.type}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => <div className="capitalize">{row.original.status}</div>,
  },
  {
    accessorKey: "unitsCount",
    header: "Units Count",
    cell: ({ row }) => (
      <div className="lowercase">{row.original.unitsCount}</div>
    ),
  },
  {
    accessorKey: "unitPrice",
    header: "Unit Price",
    cell: ({ row }) => (
      <div className="lowercase">{row.original.unitPrice}</div>
    ),
  },
  {
    accessorKey: "unitSize",
    header: "Unit Size",
    cell: ({ row }) => <div className="lowercase">{row.original.unitSize}</div>,
  },
  {
    accessorKey: "packagePrice",
    header: "Package Price",
    cell: ({ row }) => (
      <div className="lowercase">{row.original.packagePrice}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="capitalize truncate w-20">{row.original.description}</div>
    ),
  },
  {
    accessorKey: "companyName",
    header: "Company Name",
    cell: ({ row }) => (
      <div className="grid gap-1 text-xs">
        <div className="capitalize  w-20 truncate">
          {row.original.companyName}
        </div>
        <div className="lowercase">{row.original.companyEmail}</div>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;
      const { mutateAsync: deleteProduct, isPending } = useDeleteProduct();

      const handleDelete = async () => {
        await deleteProduct(product.id);
        toast.success("Product deleted successfully");
      };
      return (
        <div className="flex items-center gap-1">
          <ProductForm
            isUpdate
            product={product}
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
