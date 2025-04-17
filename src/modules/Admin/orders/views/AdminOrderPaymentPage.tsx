"use client";
import React from "react";
import { AdminOrderPayment } from "../components/order-payment";
import { OrderFormHeader } from "../components/order-form-header";

export const AdminOrderPaymentPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <OrderFormHeader step={2} />
      <AdminOrderPayment />
    </div>
  );
};
