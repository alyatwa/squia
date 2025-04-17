"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AdminOrderPayment } from "../components/order-payment";
import { AddOrderForm } from "../components/add-order-form";
import { useRouter, useSearchParams } from "next/navigation";
import { OrderFormHeader } from "../components/order-form-header";

const workerSchema = z.object({
  id: z.string(),
  name: z.string().min(2, { message: "يرجى إدخال اسم العامل" }),
  nationality: z.string().optional(),
  occupation: z.string().optional(),
  hourly_rate: z.number().nonnegative().optional(),
  specialty: z.string().optional(),
  activity: z.string().optional(),
  salary: z.string().optional(),
  quantity: z.number().min(1).default(1),
  price: z.number().nonnegative().optional(),
});

// Form schema validation
export const orderFormSchema = z.object({
  client_id: z.string().min(1, { message: "يرجى اختيار العميل" }),
  title: z
    .string()
    .min(3, { message: "يرجى إدخال عنوان للطلب (3 أحرف على الأقل)" }),
  description: z.string(),
  hours_duty: z.string().optional(),
  workers: z
    .array(workerSchema)
    .min(1, { message: "يجب إضافة عامل واحد على الأقل" }),
  amount: z.number().nonnegative({ message: "المبلغ يجب أن يكون إيجابياً" }),
  payment_percentage: z
    .number()
    .min(0)
    .max(100, { message: "النسبة يجب أن تكون بين 0 و 100" }),
  initial_payment: z
    .number()
    .nonnegative({ message: "المبلغ يجب أن يكون إيجابياً" }),
  final_payment: z
    .number()
    .nonnegative({ message: "المبلغ يجب أن يكون إيجابياً" }),
  status: z.string(),
  is_payment_authorized: z.boolean().default(false),
  is_contract_approved: z.boolean().default(false),
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;

export const AdminAddOrderPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <OrderFormHeader step={1} />
      <AddOrderForm />
    </div>
  );
};
