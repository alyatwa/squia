import { AdminOrderPaymentPage } from "@/modules/Admin/orders/views/AdminOrderPaymentPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admin orders | Dashboard",
    description: "Dashboard",
  };
}

export default async function AdminOrderpayment() {
  //   const { orderId } = await params;

  return <AdminOrderPaymentPage />;
}
