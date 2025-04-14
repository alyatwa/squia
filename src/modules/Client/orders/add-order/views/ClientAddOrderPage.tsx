"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Worker = {
  position: string;
  nationality: string;
  quantity: number;
  salary: number;
  price: number;
};

export const ClientAddOrderPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    hours_duty: "",
    amount: 0,
    payment_percentage: 25,
    initial_payment: 0,
    final_payment: 0,
    payment_method: "online",
    status: "unapproved",
  });

  const [workers, setWorkers] = useState<Worker[]>([
    {
      position: "",
      nationality: "",
      quantity: 1,
      salary: 0,
      price: 0,
    },
  ]);

  // Calculate amount and payments whenever workers change
  useEffect(() => {
    const totalAmount = workers.reduce(
      (sum, worker) => sum + (worker.price * worker.quantity || 0),
      0
    );
    const initialPayment = totalAmount * (formData.payment_percentage / 100);
    const finalPayment = totalAmount - initialPayment;

    setFormData((prev) => ({
      ...prev,
      amount: totalAmount,
      initial_payment: initialPayment,
      final_payment: finalPayment,
    }));
  }, [workers, formData.payment_percentage]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWorkerChange = (
    index: number,
    field: keyof Worker,
    value: string | number
  ) => {
    const newWorkers = [...workers];
    newWorkers[index] = { ...newWorkers[index], [field]: value };
    setWorkers(newWorkers);
  };

  const addWorkerRow = () => {
    setWorkers([
      ...workers,
      { position: "", nationality: "", quantity: 1, salary: 0, price: 0 },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted", { ...formData, workers });
    // Add API call or other submission logic
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl shadow-md p-6 mb-8 text-white fade-in-up fade-in-up-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:construction-worker"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              <span className="mr-2">👷</span>
              طلب تأجير عمال
            </h1>
            <p className="text-white/80">
              يمكنك من هنا إرسال طلب تأجير عمال والحصول على عروض أسعار من شركات
              التوظيف.
            </p>
          </div>
          <Link
            href="/client"
            className="inline-flex items-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors"
          >
            <Icon
              icon="heroicons:arrow-right"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            <span className="mr-1">→</span>
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </div>

      {/* نموذج إضافة طلب */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-2">
        <div className="flex items-center mb-6">
          <Icon
            icon="fluent-emoji:memo"
            className="ml-2 text-accent-600"
            width="24"
            height="24"
          ></Icon>

          <h2 className="text-xl font-bold text-gray-800">معلومات الطلب</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {/* عنوان الطلب */}
            <div className="col-span-2">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                عنوان الطلب
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              />
            </div>

            {/* وصف الطلب */}
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                وصف الطلب
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              />
            </div>

            {/* ساعات العمل */}
            <div>
              <label
                htmlFor="hours_duty"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                ساعات العمل
              </label>
              <input
                type="text"
                id="hours_duty"
                name="hours_duty"
                value={formData.hours_duty}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              />
            </div>

            {/* جدول بيانات العمال */}
            <div className="col-span-2">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                بيانات العمال
              </label>
              <div className="bg-gray-50 rounded-lg p-4">
                <table className="w-full border-collapse" id="workers-table">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="px-4 py-3 text-right">المنصب</th>
                      <th className="px-4 py-3 text-right">الجنسية</th>
                      <th className="px-4 py-3 text-right">الكمية</th>
                      <th className="px-4 py-3 text-right">الراتب (ريال)</th>
                      <th className="px-4 py-3 text-right">السعر (ريال)</th>
                    </tr>
                  </thead>
                  <tbody id="workers-tbody">
                    {workers.map((worker, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-white transition-colors"
                      >
                        <td className="px-4 py-3">
                          <select
                            value={worker.position}
                            onChange={(e) =>
                              handleWorkerChange(
                                index,
                                "position",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                          >
                            <option value="">اختر المنصب</option>
                            <option value="ويتر">ويتر</option>
                            <option value="شيف">شيف</option>
                            <option value="سائق">سائق</option>
                            <option value="حارس أمن">حارس أمن</option>
                            <option value="عامل نظافة">عامل نظافة</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={worker.nationality}
                            onChange={(e) =>
                              handleWorkerChange(
                                index,
                                "nationality",
                                e.target.value
                              )
                            }
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                          >
                            <option value="">اختر الجنسية</option>
                            <option value="فلبيني">فلبيني</option>
                            <option value="هندي">هندي</option>
                            <option value="نيبالي">نيبالي</option>
                            <option value="باكستاني">باكستاني</option>
                            <option value="بنغلاديشي">بنغلاديشي</option>
                            <option value="سريلانكي">سريلانكي</option>
                            <option value="أوغندي">أوغندي</option>
                            <option value="كيني">كيني</option>
                            <option value="إثيوبي">إثيوبي</option>
                            <option value="سوداني">سوداني</option>
                            <option value="مصري">مصري</option>
                            <option value="يمني">يمني</option>
                            <option value="أردني">أردني</option>
                            <option value="سوري">سوري</option>
                            <option value="سعودي">سعودي</option>
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="1"
                            value={worker.quantity}
                            onChange={(e) =>
                              handleWorkerChange(
                                index,
                                "quantity",
                                parseInt(e.target.value)
                              )
                            }
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={worker.salary}
                            onChange={(e) =>
                              handleWorkerChange(
                                index,
                                "salary",
                                parseFloat(e.target.value)
                              )
                            }
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={worker.price}
                            onChange={(e) =>
                              handleWorkerChange(
                                index,
                                "price",
                                parseFloat(e.target.value)
                              )
                            }
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button
                  type="button"
                  onClick={addWorkerRow}
                  className="mt-4 px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
                >
                  <span className="mr-1">+</span>
                  إضافة صف جديد
                </button>
              </div>
            </div>

            {/* المبلغ الإجمالي */}
            <div>
              <label
                htmlFor="amount"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                المبلغ الإجمالي (ريال)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100"
              />
            </div>

            {/* نسبة الدفعة الأولى */}
            <div>
              <label
                htmlFor="payment_percentage"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                نسبة الدفعة الأولى (%)
              </label>
              <input
                type="number"
                id="payment_percentage"
                name="payment_percentage"
                value={formData.payment_percentage}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100"
              />
            </div>

            {/* الدفعة الأولى */}
            <div>
              <label
                htmlFor="initial_payment"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الدفعة الأولى (ريال)
              </label>
              <input
                type="number"
                id="initial_payment"
                name="initial_payment"
                value={formData.initial_payment}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100"
              />
            </div>

            {/* الدفعة النهائية */}
            <div>
              <label
                htmlFor="final_payment"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الدفعة النهائية (ريال)
              </label>
              <input
                type="number"
                id="final_payment"
                name="final_payment"
                value={formData.final_payment}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100"
              />
            </div>

            {/* طريقة الدفع */}
            <div className="col-span-2">
              <label
                htmlFor="payment_method"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                طريقة الدفع
              </label>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-300 rounded-lg p-4 hover:border-accent-500 transition-colors cursor-pointer">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="payment_method"
                      value="online"
                      checked={formData.payment_method === "online"}
                      onChange={handleChange}
                      className="ml-2 text-accent-600 focus:ring-accent-500"
                    />
                    <div>
                      <div className="flex items-center">
                        <Icon
                          icon="heroicons:credit-card"
                          className="ml-2 text-accent-600"
                          width="24"
                          height="24"
                        ></Icon>
                        <span className="ml-2 text-accent-600">💳</span>
                        <span className="font-medium">دفع إلكتروني</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">
                        الدفع باستخدام بطاقة الائتمان أو مدى
                      </p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* حالة الطلب */}
            <div className="col-span-2">
              <label
                htmlFor="status"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                حالة الطلب
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              >
                <option value="unapproved">غير معتمد</option>
                <option value="new">جديد</option>
                <option value="pending">معلق</option>
                <option value="completed">مكتمل</option>
                <option value="refund">استرجاع</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end space-x-2 space-x-reverse">
            <Link
              href="/client/dashboard"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              إلغاء
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
            >
              {/* Replace Icon */}
              <Icon
                icon="heroicons:check"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              إضافة الطلب
            </button>
          </div>
        </form>
      </div>

      {/* معلومات إضافية */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8 fade-in-up fade-in-up-3">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Icon
              icon="heroicons:information-circle"
              className="text-teal-500"
              width="24"
              height="24"
            ></Icon>
          </div>
          <div className="mr-3">
            <h3 className="text-lg font-medium text-teal-800 mb-2">
              معلومات هامة عن تأجير العمال
            </h3>
            <ul className="list-disc list-inside text-teal-700 space-y-2">
              <li>
                سيتم إرسال طلبك إلى شركات التوظيف المعتمدة لدينا للحصول على عروض
                أسعار.
              </li>
              <li>
                ستتلقى عروض الأسعار من الشركات خلال 24-48 ساعة من تقديم الطلب.
              </li>
              <li>
                يمكنك مراجعة عروض الأسعار واختيار العرض المناسب من لوحة التحكم
                الخاصة بك.
              </li>
              <li>
                بعد اختيار العرض المناسب، سيتم التواصل معك لإتمام إجراءات
                التعاقد والدفع.
              </li>
              <li>
                يمكنك التواصل مع خدمة العملاء في حال وجود أي استفسارات حول عملية
                التأجير.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
