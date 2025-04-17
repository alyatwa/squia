"use client";
import { Button } from "@/components/ui";
import { OrderDocument } from "@/gql/graphql";
import { useQuery } from "@apollo/client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useParams } from "next/navigation";

export const AdminOrderPayment: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const { data, loading } = useQuery(OrderDocument, {
    variables: {
      orderId,
    },
    fetchPolicy: "network-only",
    skip: !orderId,
  });
  return (
    <>
      {/* تفاصيل الطلب والفاتورة */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* معلومات الطلب */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6 fade-in-up fade-in-up-2">
          <div className="flex items-center mb-6">
            <Icon
              icon="fluent-emoji:memo"
              className="ml-2 text-accent-600"
              width="24"
              height="24"
            ></Icon>
            <h2 className="text-xl font-bold text-gray-800">تفاصيل الطلب</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600">رقم الطلب:</span>
              <span className="font-medium text-dark">#{data?.order.id}</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600">العميل:</span>
              <span className="font-medium text-dark">
                {data?.order.client.user.name}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600">عنوان الطلب:</span>
              <span className="font-medium text-dark">{data?.order.title}</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600">تاريخ الطلب:</span>
              <span className="font-medium text-dark">
                {data?.order.createdAt
                  ? new Date(data?.order.createdAt).toLocaleDateString(
                      "ar-SA",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )
                  : "غير متوفر"}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600">حالة الطلب:</span>
              <span className="font-medium text-dark">
                {data?.order.status}
              </span>
            </div>
          </div>
        </div>

        {/* ملخص الفاتورة */}
        <div className="bg-white rounded-2xl shadow-md p-6 fade-in-up fade-in-up-2">
          <div className="flex items-center mb-6">
            <Icon
              icon="fluent-emoji:receipt"
              className="ml-2 text-accent-600"
              width="24"
              height="24"
            ></Icon>
            <h2 className="text-xl font-bold text-gray-800">ملخص الفاتورة</h2>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600">المبلغ الإجمالي:</span>
              <span className="font-medium text-dark">
                {data?.order.amount} ريال
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-3">
              <span className="text-gray-600">نسبة الدفعة الأولى:</span>
              <span className="font-medium text-dark">{25}%</span>
            </div>

            <div className="flex justify-between border-b border-gray-100 pb-4 bg-accent-50 rounded-lg p-3 shadow-sm">
              <span className="text-gray-700 font-bold">
                الدفعة الأولى (المطلوب دفعها الآن):
              </span>
              <span className="font-extrabold text-xl text-accent-600">
                {data?.order.initialPayment} ريال
              </span>
            </div>
            <div className="text-xs text-gray-500 text-center mt-1 mb-3">
              هذه هي الدفعة المطلوبة لبدء العمل على الطلب
            </div>

            <div className="flex justify-between pb-3">
              <span className="text-gray-600">الدفعة النهائية:</span>
              <span className="font-medium text-dark">
                {data?.order.finalPayment} ريال
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* طرق الدفع */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-4">
        <div className="flex items-center mb-6">
          <Icon
            icon="fluent-emoji:credit-card"
            className="ml-2 text-accent-600"
            width="24"
            height="24"
          ></Icon>
          <h2 className="text-xl font-bold text-gray-800">اختر طريقة الدفع</h2>
        </div>
        <div className="space-y-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              className="payment-method border rounded-lg p-4 cursor-pointer"
              data-method="credit_card"
            >
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  name="payment_method"
                  id="credit_card"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 ml-2"
                />
                <label htmlFor="credit_card" className="font-medium">
                  بطاقة ائتمانية
                </label>
              </div>
              <div className="flex items-center justify-center">
                <div className="mx-1 text-blue-600">
                  <Icon icon="logos:visa" width="40" height="40"></Icon>
                </div>
                <div className="mx-1">
                  <Icon icon="logos:mastercard" width="40" height="40"></Icon>
                </div>
              </div>
            </div>

            <div
              className="payment-method border rounded-lg p-4 cursor-pointer"
              data-method="mada"
            >
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  name="payment_method"
                  id="mada"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 ml-2"
                />
                <label htmlFor="mada" className="font-medium">
                  مدى
                </label>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-green-600 font-bold text-xl">
                  <Icon
                    icon="heroicons:credit-card"
                    width="32"
                    height="32"
                  ></Icon>
                  <span className="mr-1">مدى</span>
                </div>
              </div>
            </div>

            <div
              className="payment-method border rounded-lg p-4 cursor-pointer"
              data-method="bank_transfer"
            >
              <div className="flex items-center mb-3">
                <input
                  type="radio"
                  name="payment_method"
                  id="bank_transfer"
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 ml-2"
                />
                <label htmlFor="bank_transfer" className="font-medium">
                  تحويل بنكي
                </label>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-blue-700">
                  <Icon
                    icon="heroicons:building-office-2"
                    width="32"
                    height="32"
                  ></Icon>
                </div>
              </div>
            </div>
          </div> */}

          {/* تفاصيل البطاقة الائتمانية */}
          {/* <div id="creditCardForm" className="hidden bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="card_number" className="block text-gray-700 text-sm font-medium mb-2">رقم البطاقة</label>
                            <input type="text" id="card_number" name="card_number" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" placeholder="0000 0000 0000 0000"/>
                        </div>
                        <div>
                            <label htmlFor="card_name" className="block text-gray-700 text-sm font-medium mb-2">الاسم على البطاقة</label>
                            <input type="text" id="card_name" name="card_name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" placeholder="الاسم كما يظهر على البطاقة"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="expiry_date" className="block text-gray-700 text-sm font-medium mb-2">تاريخ الانتهاء</label>
                            <input type="text" id="expiry_date" name="expiry_date" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" placeholder="MM/YY"/>
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-2">رمز الأمان (CVV)</label>
                            <input type="text" id="cvv" name="cvv" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" placeholder="123"/>
                        </div>
                    </div>
                </div> */}

          {/* تفاصيل التحويل البنكي */}
          {/* <div id="bankTransferForm" className="hidden bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
                    <div className="bg-white p-4 rounded-md border border-gray-200">
                        <h3 className="font-bold text-lg mb-2">معلومات الحساب البنكي</h3>
                        <div className="space-y-2">
                            <p><span className="font-medium">اسم البنك:</span> البنك الأهلي السعودي</p>
                            <p><span className="font-medium">اسم الحساب:</span> شركة تعيين للخدمات العمالية</p>
                            <p><span className="font-medium">رقم الحساب:</span> 1234567890123456</p>
                            <p><span className="font-medium">رقم الآيبان:</span> SA1234567890123456789012</p>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="transfer_receipt" className="block text-gray-700 text-sm font-medium mb-2">إيصال التحويل (اختياري)</label>
                            <input type="file" id="transfer_receipt" name="transfer_receipt" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"/>
                        </div>
                    </div>
                </div> */}

          {/* زر الدفع */}
          <div className="flex justify-center mt-6">
            <Button
              type="button"
              className="inline-flex items-center px-8 py-6 border border-transparent text-lg font-bold rounded-lg shadow-lg text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-4 focus:ring-accent-300 transition-all duration-300 transform hover:scale-105"
            >
              <Icon
                icon="heroicons:credit-card"
                className="ml-3"
                width="24"
                height="24"
              ></Icon>
              إتمام الدفع الأولي - {data?.order.initialPayment} ريال
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
