"use client";
import { Body } from "@/components/layout/Body";
import { useGetOrders } from "./hooks/api/queries";
import { OrdersTable } from "./components/OrdersTable";
import { Button } from "@/components/ui";
import { RefreshCw } from "lucide-react";
import { OrderForm } from "./components/OrderForm";

export const OrdersPage = () => {
  const { refetch } = useGetOrders();

  return (
    <Body breadcrumbs={[{ url: "/orders", title: "Orders" }]}>
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
        <OrderForm />
      </div>
      <OrdersTable />
    </Body>
  );
};
