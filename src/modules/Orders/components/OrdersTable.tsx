"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  Pencil,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { DataTable } from "@/components/ui/table/data-table";
import { useGetOrders } from "../hooks/api/queries";
import { Order } from "@/types/Order.types";
import { OrderForm } from "./OrderForm";
import { AlertConfirm } from "@/components/shared/alert-confirm";

export const OrdersTable = () => {
  const { data, isFetching, refetch } = useGetOrders();

  return (
    <DataTable
      refetch={refetch}
      data={data || []}
      columns={columns}
      isLoading={isFetching}
    />
  );
};
const columns: ColumnDef<Order>[] = [
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
    cell: ({ row }) => <div className="capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "orderNo",
    header: "Order No",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("orderNo")}</div>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("customer")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("createdAt")}</div>
    ),
  },
  // company
  {
    accessorKey: "company",
    header: "Company",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("company")}</div>
    ),
  },
  // order type
  {
    accessorKey: "orderType",
    header: "Order Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("orderType")}</div>
    ),
  },
  {
    accessorKey: "serviceType",
    header: "Service Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("serviceType")}</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("amount")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;

      return (
        <div className="flex items-center space-x-2">
          <OrderForm
            isUpdate
            order={order}
            button={
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            }
          />
          <AlertConfirm
            onConfirm={() => {}}
            button={
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4 text-red-600" />
              </Button>
            }
          />
        </div>
      );
    },
  },
];
