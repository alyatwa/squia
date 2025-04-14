"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Worker } from "../components/worker-container";
import { useState } from "react";

export const AdminAddOrderPage = () => {
  const clients: any[] = ["a", "b", "c"];

  const [workers, setWorkers] = useState(["a"]);

  const handleNewWorker = () => {
    setWorkers([...workers, Math.random().toString(36).substring(7)]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-md p-4 mb-6 fade-in-up fade-in-up-1">
        <div className="flex items-center justify-between relative">
          <div className="absolute flex  top-1/2 px-10 w-full  h-1 -translate-y-1/2 z-0">
            <div className="px-10 w-full h-1 bg-gray-200"></div>
          </div>

          <div className="mt-[20px]  relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mb-2">
              <span>1</span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              تفاصيل الطلب
            </span>
          </div>

          <div className="mt-[20px] relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center mb-2">
              <span>2</span>
            </div>
            <span className="text-sm font-medium text-gray-700">الدفع</span>
          </div>

          <div className="mt-[20px] relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center mb-2">
              <span>3</span>
            </div>
            <span className="text-sm font-medium text-gray-700">المقابلات</span>
          </div>

          <div className="mt-[20px] relative z-10 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center mb-2">
              <span>4</span>
            </div>
            <span className="text-sm font-medium text-gray-700">
              اتمام الطلب
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-md p-6 mb-8 text-white fade-in-up fade-in-up-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:package"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              إضافة طلب جديد
            </h1>
            <p className="text-white/80">
              يمكنك من هنا إضافة طلب جديد إلى المنصة.
            </p>
          </div>
          <Link
            href="/admin/orders"
            className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors"
          >
            <Icon
              icon="heroicons:arrow-right"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            العودة إلى قائمة الطلبات
          </Link>
        </div>
      </div>

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

        <form
          method="POST"
          action="{{ url_for('admin_add_order') }}"
          className="space-y-6"
        >
          <input type="hidden" name="csrf_token" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label
                htmlFor="client_id"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                العميل
              </label>
              <div className="client-select-container relative">
                <div className="dropdown-wrapper relative">
                  <select
                    id="client_id"
                    name="client_id"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 enhanced-select"
                  >
                    <option value="" disabled selected>
                      اختر العميل
                    </option>
                    {clients.map((client) => (
                      <option
                        key={client.id}
                        value={client.id}
                        data-email={client.email || ""}
                      >
                        {client.name}
                      </option>
                    ))}
                  </select>

                  <div
                    id="custom_dropdown"
                    className="custom-dropdown hidden absolute left-0 right-0 top-full mt-1 bg-white rounded-lg border border-gray-300 shadow-lg z-50"
                  >
                    <div className="dropdown-search-container p-2 border-b border-gray-200">
                      <div className="relative">
                        <input
                          type="text"
                          id="dropdown_search"
                          placeholder="ابحث عن عميل..."
                          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                        />
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                          <Icon
                            icon="heroicons:magnifying-glass"
                            width="16"
                            height="16"
                            className="text-gray-400"
                          ></Icon>
                        </div>
                        <div
                          id="dropdown_loading"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 hidden"
                        >
                          <div className="w-4 h-4 border-2 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="dropdown_items"
                      className="dropdown-items max-h-60 overflow-y-auto py-1"
                    ></div>
                  </div>
                </div>

                <div
                  id="selected_client"
                  className="mt-2 px-3 py-2 bg-blue-50 rounded-lg border border-blue-200 hidden"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span
                        id="selected_client_name"
                        className="font-medium text-gray-800"
                      ></span>
                      <span className="mx-2 text-gray-400">|</span>
                      <span
                        id="selected_client_email"
                        className="text-sm text-gray-600"
                      ></span>
                    </div>
                    <button
                      type="button"
                      id="clear_client"
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Icon
                        icon="heroicons:x-mark"
                        width="16"
                        height="16"
                      ></Icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
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
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 important-field"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                وصف الطلب
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              ></textarea>
            </div>

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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              />
            </div>

            <div className="md:col-span-2">
              <div className="bg-accent-600 text-white rounded-t-lg p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Icon
                    icon="fluent-emoji:person-worker"
                    className="ml-2"
                    width="24"
                    height="24"
                  ></Icon>
                  <h3 className="font-bold">بيانات العمال</h3>
                </div>
              </div>

              <div className="bg-gray-50 rounded-b-lg p-4">
                <div id="workers-container">
                  {workers.map((w) => (
                    <Worker
                      id={w}
                      onRemove={(id: string) => {
                        setWorkers(workers.filter((w) => w !== id));
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleNewWorker()}
                  id="add-worker-row"
                  className="mt-2 flex px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
                >
                  <Icon
                    icon="heroicons:plus"
                    className="ml-1"
                    width="20"
                    height="20"
                  ></Icon>
                  إضافة عامل جديد
                </button>
              </div>
            </div>
            <input
              type="hidden"
              id="amount"
              name="amount"
              min="0"
              step="0.01"
              required
              className="amount-field"
            />

            <div className="md:col-span-2 w-full bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200 mb-4 shadow-sm">
              <div className="flex justify-between gap-2 items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800 flex items-center">
                  <Icon
                    icon="fluent-emoji:page-facing-up"
                    className="ml-2 text-primary-600"
                    width="28"
                    height="28"
                  ></Icon>
                  معاينة العقد
                </h3>
                <div id="contract-status" className="hidden">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="16"
                      height="16"
                    ></Icon>
                    تمت الموافقة على العقد
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-blue-100 mb-4">
                <p className="text-gray-700">
                  يمكنك معاينة العقد قبل إضافة الطلب. بعد المعاينة، يرجى
                  الموافقة على العقد للمتابعة.
                </p>
              </div>

              <div className="flex flex-col gap-2  sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4  ">
                <button
                  type="button"
                  id="preview-contract-btn"
                  className="px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  <Icon
                    icon="heroicons:document-text"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  معاينة العقد
                </button>

                <button
                  type="button"
                  id="confirm-contract-btn"
                  className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center shadow-md hover:shadow-lg opacity-50 cursor-not-allowed"
                  disabled
                >
                  <Icon
                    icon="heroicons:check"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  الموافقة على العقد
                </button>
              </div>
            </div>

            <div className="md:col-span-2 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <Icon
                  icon="fluent-emoji:receipt"
                  className="ml-2"
                  width="24"
                  height="24"
                ></Icon>
                ملخص الفاتورة
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">المبلغ الإجمالي:</span>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="summary_amount"
                      name="amount"
                      min="0"
                      step="0.01"
                      required
                      className="w-32 px-3 py-2  rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100 amount-field font-medium text-lg text-accent-600 text-right"
                    />
                    <span className="mr-1 text-gray-700">ريال</span>
                  </div>
                </div>

                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="text-gray-700">نسبة الدفعة الأولى:</span>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="payment_percentage"
                      name="payment_percentage"
                      min="0"
                      max="100"
                      step="0.01"
                      value="25"
                      className="w-20 px-3 py-2   rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 font-medium text-lg text-right"
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
                    <input
                      type="number"
                      id="initial_payment"
                      name="initial_payment"
                      min="0"
                      step="0.01"
                      className="w-32 px-3 py-2  rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100 amount-field font-medium text-lg text-accent-600 text-right"
                    />
                    <span className="mr-1 text-gray-700">ريال</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">الدفعة النهائية:</span>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="final_payment"
                      name="final_payment"
                      min="0"
                      step="0.01"
                      className="w-32 px-3 py-2   rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100 amount-field font-medium text-lg text-accent-600 text-right"
                    />
                    <span className="mr-1 text-gray-700">ريال</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="status"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                حالة الطلب
              </label>
              <select
                id="status"
                name="status"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              >
                <option value="unapproved" selected>
                  الطلبات غير المعتمدة
                </option>
                <option value="authorized">تعميد الطلبات المدفوعة</option>
                <option value="new">الطلبات الجديدة</option>
                <option value="pending">الطلبات المعلقة</option>
                <option value="completed">الطلبات المكتملة</option>
                <option value="refund">طلبات الاسترجاع</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_payment_authorized"
                  name="is_payment_authorized"
                  className="w-4 h-4 text-accent-600 border-gray-300 rounded focus:ring-accent-500"
                />
                <label
                  htmlFor="is_payment_authorized"
                  className="mr-2 block text-gray-700 text-sm font-medium"
                >
                  تعميد الطلب المدفوع
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                عند تحديد هذا الخيار، سيتم اعتبار الطلب معمداً بعد الدفع.
              </p>
            </div>
          </div>

          <div className="flex justify-end space-x-2  ">
            <Link
              href="/admin/orders"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              إلغاء
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-accent-600 text-white flex rounded-lg hover:bg-accent-700 transition-colors action-button"
            >
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
    </div>
  );
};
