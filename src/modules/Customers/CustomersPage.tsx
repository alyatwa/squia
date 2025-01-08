"use client";
import { Body } from "@/components/layout/Body";
import { useGetCustomers } from "./hooks/api/queries";
import { CustomersTable } from "./components/CustomersTable";
import { Button } from "@/components/ui";
import { Plus, RefreshCw } from "lucide-react";
import { CustomerForm } from "./components/CustomerForm";

export const CustomersPage = () => {
  const { refetch } = useGetCustomers();

  return (
    <Body breadcrumbs={[{ url: "/customers", title: "Customers" }]}>
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
        <CustomerForm
          button={
            <Button className="rounded-3xl">
              <Plus className="mr-2 h-4 w-4" />
              Add customer
            </Button>
          }
        />
      </div>
      <CustomersTable />
    </Body>
  );
};
