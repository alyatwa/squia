"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useSearchParams } from "next/navigation";

interface OrderFormHeaderProps {
  step: number;
}

export const OrderFormHeader: React.FC<OrderFormHeaderProps> = ({ step }) => {
  //   const searchParams = useSearchParams();
  //   const stepId = searchParams.get("step");

  const [activeStep, setActiveStep] = React.useState(step);

  const orderSteps = [
    { num: 1, label: "تفاصيل الطلب", active: true },
    { num: 2, label: "الدفع", active: false },
    { num: 3, label: "المقابلات", active: false },
    { num: 4, label: "اتمام الطلب", active: false },
  ];

  return (
    <>
      {/* Header section */}
      <Card className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-md mb-8 text-white fade-in-up fade-in-up-1">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center">
                <Icon
                  icon="fluent-emoji:package"
                  width="36"
                  height="36"
                  className="ml-2"
                />
                إضافة طلب جديد
              </h1>
              <p className="text-white/80">
                يمكنك من هنا إضافة طلب جديد إلى المنصة.
              </p>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/admin/orders">
                <Icon
                  icon="heroicons:arrow-right"
                  className="ml-1"
                  width="20"
                  height="20"
                />
                العودة إلى قائمة الطلبات
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Progress steps */}
      <Card className="bg-white rounded-2xl shadow-md mb-6 fade-in-up fade-in-up-1">
        <CardContent className="p-4">
          <div className="flex items-center justify-between relative">
            <div className="absolute flex top-1/2 px-10 w-full h-1 -translate-y-1/2 z-0">
              <div className="px-10 w-full h-1 bg-gray-200"></div>
            </div>

            {/* Step indicators */}
            {orderSteps.map((step, index) => (
              <div
                key={index}
                className="mt-[20px] relative z-10 flex flex-col items-center"
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    step.num == activeStep
                      ? "bg-primary-600 text-white"
                      : "bg-gray-300 text-gray-700"
                  } flex items-center justify-center mb-2`}
                >
                  <span>{step.num}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};
