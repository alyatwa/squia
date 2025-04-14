"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const ClientAddInterviewPage = () => {
  // Sample form state (replace with your actual form handling)
  const form = {
    hidden_tag: () => null,
    worker_id: {
      id: "worker_id",
      label: { text: "العامل" },
      errors: [],
    },
    date_time: {
      label: { text: "التاريخ والوقت" },
      errors: [],
    },
    order_id: {
      id: "order_id",
      label: { text: "الطلب" },
      errors: [],
    },
    meeting_type: {
      id: "meeting_type",
      label: { text: "نوع المقابلة" },
      errors: [],
    },
    status: {
      id: "status",
      label: { text: "الحالة" },
      errors: [],
    },
  };

  return (
    <>
      {/* ترويسة الصفحة */}
      <div className="bg-white rounded-2xl flex justify-between items-center w-full shadow-md p-6 mb-8">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center ml-4">
            <Icon icon="fluent-emoji:calendar-plus" width="28" height="28" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-dark">إنشاء مقابلة جديدة</h1>
            <p className="text-gray-600">قم بإدخال بيانات المقابلة الجديدة</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/client/interviews"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <Icon
              icon="heroicons:arrow-uturn-right"
              className="ml-1"
              width="20"
              height="20"
            />
            العودة إلى قائمة المقابلات
          </Link>
        </div>
      </div>

      {/* بطاقة النموذج */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden form-card">
        <div className="bg-gradient-to-l from-teal-600 to-teal-500 p-4 text-white">
          <h2 className="text-xl font-bold flex items-center">
            <Icon
              icon="heroicons:document-plus"
              className="ml-2"
              width="24"
              height="24"
            />
            بيانات المقابلة
          </h2>
          <p className="text-teal-100 text-sm">جميع الحقول مطلوبة</p>
        </div>

        <form className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* حقل العامل */}
          <div className="space-y-2">
            <label
              htmlFor={form.worker_id.id}
              className="block text-dark font-medium flex items-center"
            >
              <Icon
                icon="fluent-emoji:construction-worker"
                className="ml-2"
                width="20"
                height="20"
              />
              {form.worker_id.label.text}
            </label>
            <div className="relative dropdown-wrapper">
              <select
                id={form.worker_id.id}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect"
              >
                <option value="">اختر العامل</option>
              </select>
            </div>
            {form.worker_id.errors.length > 0 && (
              <div className="text-red-600 text-sm mt-1 space-y-1">
                {form.worker_id.errors.map((error, index) => (
                  <p key={index} className="flex items-center">
                    <Icon
                      icon="heroicons:exclamation-circle"
                      className="ml-1"
                      width="16"
                      height="16"
                    />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* حقل التاريخ والوقت */}
          <div className="space-y-2">
            <label
              htmlFor="interview_datetime"
              className="block text-dark font-medium flex items-center"
            >
              <Icon
                icon="fluent-emoji:calendar"
                className="ml-2"
                width="20"
                height="20"
              />
              {form.date_time.label.text}
            </label>
            <div className="relative calendar-icon-wrapper">
              <input
                type="datetime-local"
                id="interview_datetime"
                name="date_time"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect"
                required
              />
            </div>

            {form.date_time.errors.length > 0 && (
              <div className="text-red-600 text-sm mt-1 space-y-1">
                {form.date_time.errors.map((error, index) => (
                  <p key={index} className="flex items-center">
                    <Icon
                      icon="heroicons:exclamation-circle"
                      className="ml-1"
                      width="16"
                      height="16"
                    />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* حقل الطلب */}
          <div className="space-y-2">
            <label
              htmlFor={form.order_id.id}
              className="block text-dark font-medium flex items-center"
            >
              <Icon
                icon="fluent-emoji:package"
                className="ml-2"
                width="20"
                height="20"
              />
              {form.order_id.label.text}
            </label>
            <div className="relative dropdown-wrapper">
              <select
                id={form.order_id.id}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect"
              >
                <option value="">اختر الطلب</option>
              </select>
            </div>
            {form.order_id.errors.length > 0 && (
              <div className="text-red-600 text-sm mt-1 space-y-1">
                {form.order_id.errors.map((error, index) => (
                  <p key={index} className="flex items-center">
                    <Icon
                      icon="heroicons:exclamation-circle"
                      className="ml-1"
                      width="16"
                      height="16"
                    />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* حقل نوع المقابلة */}
          <div className="space-y-2">
            <label
              htmlFor={form.meeting_type.id}
              className="block text-dark font-medium flex items-center"
            >
              <Icon
                icon="fluent-emoji:video-camera"
                className="ml-2"
                width="20"
                height="20"
              />
              {form.meeting_type.label.text}
            </label>
            <div className="relative dropdown-wrapper">
              <select
                id={form.meeting_type.id}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect"
              >
                <option value="">اختر نوع المقابلة</option>
              </select>
            </div>
            {form.meeting_type.errors.length > 0 && (
              <div className="text-red-600 text-sm mt-1 space-y-1">
                {form.meeting_type.errors.map((error, index) => (
                  <p key={index} className="flex items-center">
                    <Icon
                      icon="heroicons:exclamation-circle"
                      className="ml-1"
                      width="16"
                      height="16"
                    />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* حقل الحالة */}
          <div className="space-y-2">
            <label
              htmlFor={form.status.id}
              className="block text-dark font-medium flex items-center"
            >
              <Icon
                icon="fluent-emoji:check-mark-button"
                className="ml-2"
                width="20"
                height="20"
              />
              {form.status.label.text}
            </label>
            <div className="relative dropdown-wrapper">
              <select
                id={form.status.id}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect"
              >
                <option value="">اختر الحالة</option>
              </select>
            </div>
            {form.status.errors.length > 0 && (
              <div className="text-red-600 text-sm mt-1 space-y-1">
                {form.status.errors.map((error, index) => (
                  <p key={index} className="flex items-center">
                    <Icon
                      icon="heroicons:exclamation-circle"
                      className="ml-1"
                      width="16"
                      height="16"
                    />
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* زر الإرسال */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-l from-teal-600 to-teal-500 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-teal-400 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center pulse-button"
            >
              <Icon
                icon="heroicons:check"
                className="ml-2"
                width="20"
                height="20"
              />
              حفظ المقابلة
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
