"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  useForm,
  Controller,
  useFieldArray,
  FormProvider,
  useWatch,
} from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { WorkerForm } from "../components/worker-form";
import { useQuery } from "@apollo/client";
import { FindAllClientsDocument, PricingListDocument } from "@/gql/graphql";
import { useAddOrder } from "../hooks/useAddOrder";

const workerSchema = z.object({
  id: z.string(),
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
  clientId: z.string().min(1, { message: "يرجى اختيار العميل" }),
  title: z
    .string()
    .min(3, { message: "يرجى إدخال عنوان للطلب (3 أحرف على الأقل)" }),
  description: z.string(),
  hoursDuty: z.string().optional(),
  workers: z
    .array(workerSchema)
    .min(1, { message: "يجب إضافة عامل واحد على الأقل" }),
  amount: z.number().nonnegative({ message: "المبلغ يجب أن يكون إيجابياً" }),
  payment_percentage: z
    .number()
    .min(0)
    .max(100, { message: "النسبة يجب أن تكون بين 0 و 100" }),
  initialPayment: z
    .number()
    .nonnegative({ message: "المبلغ يجب أن يكون إيجابياً" }),
  finalPayment: z
    .number()
    .nonnegative({ message: "المبلغ يجب أن يكون إيجابياً" }),
  status: z.string(),
  isApproved: z.boolean().default(false),
  is_contract_approved: z.boolean().default(false),
});

export type OrderFormValues = z.infer<typeof orderFormSchema>;

export const AddOrderForm = () => {
  const statusOptions = [
    { value: "unapproved", label: "الطلبات غير المعتمدة" },
    { value: "authorized", label: "تعميد الطلبات المدفوعة" },
    { value: "new", label: "الطلبات الجديدة" },
    { value: "pending", label: "الطلبات المعلقة" },
    { value: "completed", label: "الطلبات المكتملة" },
    { value: "refund", label: "طلبات الاسترجاع" },
  ];

  const { data, loading } = useQuery(PricingListDocument);

  // Extract unique nationalities, specialties, and activities from pricing data
  const nationalities = React.useMemo(() => {
    if (!data?.pricingList) return [];

    // Use a Set to ensure uniqueness based on id
    const uniqueNationalities = new Map();

    data.pricingList.forEach((item) => {
      if (item.nationality && !uniqueNationalities.has(item.nationality.id)) {
        uniqueNationalities.set(item.nationality.id, item.nationality);
      }
    });

    return Array.from(uniqueNationalities.values());
  }, [data?.pricingList]);

  const specialties = React.useMemo(() => {
    if (!data?.pricingList) return [];

    const uniqueSpecialties = new Map();

    data.pricingList.forEach((item) => {
      if (item.specialty && !uniqueSpecialties.has(item.specialty.id)) {
        uniqueSpecialties.set(item.specialty.id, item.specialty);
      }
    });

    return Array.from(uniqueSpecialties.values());
  }, [data?.pricingList]);

  const activities = React.useMemo(() => {
    if (!data?.pricingList) return [];

    const uniqueActivities = new Map();

    data.pricingList.forEach((item) => {
      if (item.activity && !uniqueActivities.has(item.activity.id)) {
        uniqueActivities.set(item.activity.id, item.activity);
      }
    });

    return Array.from(uniqueActivities.values());
  }, [data?.pricingList]);

  // Form setup with React Hook Form
  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      title: "",
      description: "",
      hoursDuty: "",
      workers: [
        {
          id: crypto.randomUUID(),
          nationality: "",
          occupation: "",
          hourly_rate: 0,
          specialty: "",
          activity: "",
          salary: "",
          quantity: 1,
          price: 0,
        },
      ],
      amount: 0,
      payment_percentage: 25,
      initialPayment: 0,
      finalPayment: 0,
      status: "unapproved",
      isApproved: false,
      is_contract_approved: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "workers",
  });

  const watchAmount = form.watch("amount");
  const watchPaymentPercentage = form.watch("payment_percentage");
  const isContractApproved = form.watch("is_contract_approved");
  const watchWorkers = form.watch("workers");
  const watchWorkersNested = useWatch({
    control: form.control,
    name: "workers",
  });
  const totalQuantity = useMemo(() => {
    return (
      watchWorkersNested?.reduce(
        (sum, worker) => sum + (worker.quantity || 0),
        0
      ) || 0
    );
  }, [watchWorkersNested]);

  // Calculate total amount based on workers
  useEffect(() => {
    console.log("Calculating total amount...", watchWorkers);

    if (!watchWorkers || watchWorkers.length === 0) return;

    // Calculate total amount based on worker prices and quantities
    const totalAmount = watchWorkers.reduce((sum, worker) => {
      const workerPrice = worker.price || 0;
      const quantity = worker.quantity || 1;
      return sum + workerPrice * quantity;
    }, 0);

    // Update the amount field
    form.setValue("amount", totalAmount);
  }, [watchWorkers, totalQuantity, form]);

  const updateBill = useCallback(() => {
    if (!watchWorkers || watchWorkers.length === 0) return;
    // Calculate total amount based on worker prices and quantities
    const totalAmount = watchWorkers.reduce((sum, worker) => {
      const workerPrice = worker.price || 0;
      const quantity = worker.quantity || 1;
      return sum + workerPrice * quantity;
    }, 0);
    // Update the amount field
    form.setValue("amount", totalAmount);
  }, [watchWorkers, form]);

  // Update initial and final payments when amount or percentage changes
  useEffect(() => {
    const initialPayment = (watchAmount * watchPaymentPercentage) / 100;
    const finalPayment = watchAmount - initialPayment;

    form.setValue("initialPayment", initialPayment);
    form.setValue("finalPayment", finalPayment);
  }, [watchAmount, watchPaymentPercentage, form]);

  const handleAddWorker = useCallback(() => {
    append({
      id: crypto.randomUUID(),
      nationality: "",
      occupation: "",
      hourly_rate: 0,
      specialty: "",
      activity: "",
      salary: "",
      quantity: 1,
      price: 0,
    });
  }, [append]);

  const handleRemoveWorker = useCallback(
    (index: number) => {
      remove(index);
    },
    [remove]
  );

  const previewContract = useCallback(() => {
    // Contract preview logic
    alert("سيتم عرض معاينة للعقد هنا");
    // After preview, enable the confirm button
    form.setValue("is_contract_approved", true);
  }, [form]);

  const confirmContract = useCallback(() => {
    alert("تم تأكيد العقد بنجاح");
  }, []);

  const { addOrder } = useAddOrder();
  const onSubmit = async (data: OrderFormValues) => {
    console.log("Form submitted:", data);
    await addOrder({
      amount: data.amount,
      title: data.title,
      description: data.description || undefined,
      hoursDuty: data.hoursDuty || undefined,
      initialPayment: data.initialPayment,
      finalPayment: data.finalPayment,
      paymentPercentage: data.payment_percentage,
      status: data.status,
      isApproved: data.isApproved,

      client: {
        connect: {
          id: data.clientId,
        },
      },
      workerRequirements: {
        createMany: {
          data: data.workers.map((worker) => ({
            quantity: worker.quantity,
            nationalityId: worker.nationality || undefined,
            occupationId: worker.occupation || undefined,
            hourlyRate: worker.hourly_rate || undefined,
            specialtyId: worker.specialty || undefined,
            activityId: worker.activity || undefined,
          })),
        },
      },
    });
  };

  // list clients
  const { data: clients, loading: loadingClients } = useQuery(
    FindAllClientsDocument
  );

  useEffect(() => {
    //log errors
    console.log("Form errors:", form.formState.errors);
  }, [form.formState.errors]);

  return (
    <>
      {/* Form card */}
      <Card className="bg-white rounded-2xl shadow-md mb-8 fade-in-up fade-in-up-2">
        <CardHeader className="pb-0">
          <div className="flex items-center">
            <Icon
              icon="fluent-emoji:memo"
              className="ml-2 text-accent-600"
              width="24"
              height="24"
            />
            <CardTitle className="text-xl font-bold text-gray-800">
              معلومات الطلب
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Client selection */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="clientId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 text-sm font-medium">
                          العميل
                        </FormLabel>
                        <Select
                          onValueChange={(e) => form.setValue("clientId", e)}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="اختر العميل" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {clients &&
                              clients?.findAllClients.map((client) => (
                                <SelectItem
                                  key={client.client!.id}
                                  value={client.client!.id}
                                >
                                  {client.name} ({client.email})
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Order title */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 text-sm font-medium">
                          عنوان الطلب
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="أدخل عنوان الطلب" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Order description */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 text-sm font-medium">
                          وصف الطلب
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            {...field}
                            placeholder="أدخل وصفاً للطلب"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Working hours */}
                <div>
                  <FormField
                    control={form.control}
                    name="hoursDuty"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 text-sm font-medium">
                          ساعات العمل
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="أدخل ساعات العمل" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Workers section */}
                <div className="md:col-span-2">
                  <Card className="border border-accent-200">
                    <CardHeader className="bg-accent-600 text-white rounded-t-lg p-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <Icon
                          icon="fluent-emoji:person-worker"
                          className="ml-2"
                          width="24"
                          height="24"
                        />
                        <h3 className="font-bold">بيانات العمال</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="bg-gray-50 p-4">
                      <div className="space-y-4">
                        {fields.map((field, index) => (
                          <WorkerForm
                            key={field.id}
                            index={index}
                            updateBill={updateBill}
                            specialties={specialties}
                            activities={activities}
                            nationalities={nationalities}
                            onRemove={() => handleRemoveWorker(index)}
                            isRemovable={fields.length > 1}
                            pricingData={data?.pricingList || []}
                          />
                        ))}
                      </div>

                      <Button
                        type="button"
                        onClick={handleAddWorker}
                        className="mt-4 bg-accent-600 hover:bg-accent-700"
                      >
                        <Icon
                          icon="heroicons:plus"
                          className="ml-1"
                          width="20"
                          height="20"
                        />
                        إضافة عامل جديد
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Contract preview section */}
                <div className="md:col-span-2 w-full">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex justify-between gap-2 items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800 flex items-center">
                          <Icon
                            icon="fluent-emoji:page-facing-up"
                            className="ml-2 text-primary-600"
                            width="28"
                            height="28"
                          />
                          معاينة العقد
                        </h3>
                        {form.watch("is_contract_approved") && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                            <Icon
                              icon="heroicons:check-circle"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            تمت الموافقة على العقد
                          </Badge>
                        )}
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-100 mb-4">
                        <p className="text-gray-700">
                          يمكنك معاينة العقد قبل إضافة الطلب. بعد المعاينة، يرجى
                          الموافقة على العقد للمتابعة.
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row justify-center">
                        <Button
                          type="button"
                          onClick={previewContract}
                          variant="default"
                          className="bg-primary-600 hover:bg-primary-700"
                        >
                          <Icon
                            icon="heroicons:document-text"
                            className="ml-2"
                            width="20"
                            height="20"
                          />
                          معاينة العقد
                        </Button>

                        <Button
                          type="button"
                          onClick={confirmContract}
                          variant="default"
                          className="bg-green-600 hover:bg-green-700"
                          disabled={!isContractApproved}
                        >
                          <Icon
                            icon="heroicons:check"
                            className="ml-2"
                            width="20"
                            height="20"
                          />
                          الموافقة على العقد
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Payment summary section */}
                <div className="md:col-span-2">
                  <Card className="bg-gray-50 border border-gray-200">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                        <Icon
                          icon="fluent-emoji:receipt"
                          className="ml-2"
                          width="24"
                          height="24"
                        />
                        ملخص الفاتورة
                      </h3>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-700">
                            المبلغ الإجمالي:
                          </span>
                          <div className="flex items-center">
                            <FormField
                              control={form.control}
                              name="amount"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      readOnly
                                      type="number"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(
                                          parseFloat(e.target.value)
                                        )
                                      }
                                      className="w-32 text-accent-600 text-right font-medium text-lg"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <span className="mr-1 text-gray-700">ريال</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <span className="text-gray-700">
                            نسبة الدفعة الأولى:
                          </span>
                          <div className="flex items-center">
                            <FormField
                              control={form.control}
                              name="payment_percentage"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      {...field}
                                      readOnly
                                      onChange={(e) =>
                                        field.onChange(
                                          parseFloat(e.target.value)
                                        )
                                      }
                                      className="w-20 text-right font-medium text-lg"
                                      min={0}
                                      max={100}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <span className="mr-1 text-gray-700">%</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                          <div>
                            <span className="text-gray-700 font-medium">
                              الدفعة الأولى (المطلوب دفعها الآن):
                            </span>
                            <p className="text-xs text-gray-500">
                              هذه هي الدفعة المطلوبة لبدء العمل على الطلب
                            </p>
                          </div>
                          <div className="flex items-center">
                            <FormField
                              control={form.control}
                              name="initialPayment"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(
                                          parseFloat(e.target.value)
                                        )
                                      }
                                      className="w-32 text-accent-600 text-right font-medium text-lg bg-gray-100"
                                      readOnly
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <span className="mr-1 text-gray-700">ريال</span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            الدفعة النهائية:
                          </span>
                          <div className="flex items-center">
                            <FormField
                              control={form.control}
                              name="finalPayment"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="number"
                                      {...field}
                                      onChange={(e) =>
                                        field.onChange(
                                          parseFloat(e.target.value)
                                        )
                                      }
                                      className="w-32 text-accent-600 text-right font-medium text-lg bg-gray-100"
                                      readOnly
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <span className="mr-1 text-gray-700">ريال</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Order status */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-gray-700 text-sm font-medium">
                          حالة الطلب
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="اختر حالة الطلب" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {statusOptions.map((status) => (
                              <SelectItem
                                key={status.value}
                                value={status.value}
                              >
                                {status.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Payment authorization */}
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="isApproved"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 rtl:space-x-reverse">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="mr-2 block text-gray-700 text-sm font-medium">
                            تعميد الطلب المدفوع
                          </FormLabel>
                          <p className="text-xs text-gray-500 mt-1">
                            عند تحديد هذا الخيار، سيتم اعتبار الطلب معمداً بعد
                            الدفع.
                          </p>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <Button variant="outline" asChild>
                  <Link href="/admin/orders">إلغاء</Link>
                </Button>
                <Button
                  type="submit"
                  className="bg-accent-600 hover:bg-accent-700"
                >
                  <Icon
                    icon="heroicons:check"
                    className="ml-1"
                    width="20"
                    height="20"
                  />
                  إضافة الطلب
                </Button>
              </div>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </>
  );
};
