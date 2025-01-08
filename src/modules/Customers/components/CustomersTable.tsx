"use client";

import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { DataTable } from "@/components/ui/table/data-table";
import { useGetCustomers } from "../hooks/api/queries";
import { Customer, CustomerStatus } from "@/types/Customer.types";
import { CustomerForm } from "./CustomerForm";
import { AlertConfirm } from "@/components/shared/alert-confirm";
import { useDeleteCustomer } from "../hooks/api/mutations";
import { toast } from "sonner";
import { Badge } from "@/components/ui";

export const CustomersTable = () => {
  const { data, isFetching, refetch } = useGetCustomers();

  return (
    <DataTable
      refetch={() => refetch()}
      data={data || []}
      columns={columns}
      isLoading={isFetching}
    />
  );
};
const columns: ColumnDef<Customer>[] = [
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
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="lowercase   truncate">{row.original.email}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => (
      <div className="capitalize   truncate">{row.original.phone}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize  w-24 truncate">
        <Badge
          variant={
            row.original.status == CustomerStatus.ACTIVE
              ? "active"
              : "destructive"
          }
        >
          {row.original.status}
        </Badge>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const customer = row.original;
      const { mutateAsync: deleteCustomer, isPending } = useDeleteCustomer();

      const handleDelete = async () => {
        await deleteCustomer(customer.id);
        toast.success("Customer deleted successfully");
      };
      return (
        <div className="flex items-center gap-1">
          <CustomerForm
            isUpdate
            customer={customer}
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
