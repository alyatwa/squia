import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";



export const AdminHomePage = () => {
  // In a real app, you would fetch this data from an API
  const stats = {
    clients_count: 120,
    workers_count: 85,
    interviews_count: 42,
    total_payments: 250000,
    new_orders_count: 15,
    pending_orders_count: 8,
    completed_orders_count: 32,
    refund_orders_count: 3,
  };

  return (
    <>
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-lg p-6 mb-8 text-white fade-in-up fade-in-up-1 border border-primary-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:office-worker"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              لوحة تحكم المدير
            </h1>
            <p className="text-white/80">
              مرحباً بك في لوحة تحكم المدير. يمكنك من هنا إدارة العملاء والعمال
              والمقابلات والمدفوعات.
            </p>
          </div>
        </div>

        {/* تحسين تصميم المربعات البيضاء */}
        <div className="mt-6 grid grid-cols-6 gap-4">
          <Link
            href="/admin/reports"
            className="flex flex-col items-center bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-purple-500 transform hover:-translate-y-1 p-4"
          >
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-3 mb-2">
              <Icon
                icon="heroicons:chart-bar"
                className="text-white"
                width="24"
                height="24"
              ></Icon>
            </div>
            <span className="font-bold text-center">عرض التقارير</span>
          </Link>
          <Link
            href="/admin/orders"
            className="flex flex-col items-center bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-orange-500 transform hover:-translate-y-1 p-4"
          >
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-3 mb-2">
              <Icon
                icon="fluent-emoji:package"
                className="text-white"
                width="24"
                height="24"
              ></Icon>
            </div>
            <span className="font-bold text-center">الطلبات</span>
          </Link>
          <Link
            href="/admin/pricing"
            className="flex flex-col items-center bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-yellow-500 transform hover:-translate-y-1 p-4"
          >
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-3 mb-2">
              <Icon
                icon="fluent-emoji:money-with-wings"
                className="text-white"
                width="24"
                height="24"
              ></Icon>
            </div>
            <span className="font-bold text-center">إدارة التسعير</span>
          </Link>
          <Link
            href="/admin/settings"
            className="flex flex-col items-center bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-blue-500 transform hover:-translate-y-1 p-4"
          >
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-3 mb-2">
              <Icon
                icon="heroicons:cog-6-tooth"
                className="text-white"
                width="24"
                height="24"
              ></Icon>
            </div>
            <span className="font-bold text-center">الإعدادات</span>
          </Link>
          <Link
            href="/admin/whatsapp"
            className="flex flex-col items-center bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-green-500 transform hover:-translate-y-1 p-4"
          >
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-3 mb-2">
              <Icon
                icon="fluent-emoji:mobile-phone"
                className="text-white"
                width="24"
                height="24"
              ></Icon>
            </div>
            <span className="font-bold text-center">إدارة واتساب</span>
          </Link>
          <Link
            href="/admin/message_templates"
            className="flex flex-col items-center bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-primary-500 transform hover:-translate-y-1 p-4"
          >
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-full p-3 mb-2">
              <Icon
                icon="fluent-emoji:envelope"
                className="text-white"
                width="24"
                height="24"
              ></Icon>
            </div>
            <span className="font-bold text-center">قوالب الرسائل</span>
          </Link>
        </div>

        {/* قسم إضافة جديد */}
        <div className="mt-6 bg-primary-700/50 rounded-lg p-4 border border-primary-300">
          <div className="text-lg font-bold mb-3 text-white flex items-center">
            <Icon
              icon="heroicons:plus-circle"
              className="ml-2"
              width="24"
              height="24"
            ></Icon>
            إضافة جديد
          </div>
          <div className="grid grid-cols-4 gap-3">
            <Link
              href="/admin/workers"
              className="flex items-center justify-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Icon
                icon="fluent-emoji:construction-worker"
                className="ml-2"
                width="20"
                height="20"
              ></Icon>
              <span className="font-bold">إضافة عامل</span>
            </Link>
            <Link
              href="/admin/clients"
              className="flex items-center justify-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Icon
                icon="fluent-emoji:office-building"
                className="ml-2"
                width="20"
                height="20"
              ></Icon>
              <span className="font-bold">إضافة عميل</span>
            </Link>
            <Link
              href="/admin/add_order"
              className="flex items-center justify-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Icon
                icon="fluent-emoji:package"
                className="ml-2"
                width="20"
                height="20"
              ></Icon>
              <span className="font-bold">إضافة طلب</span>
            </Link>
            <Link
              href="/schedule_interview'?worker_id=1"
              className="flex items-center justify-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Icon
                icon="fluent-emoji:calendar"
                className="ml-2"
                width="20"
                height="20"
              ></Icon>
              <span className="font-bold">إضافة مقابلة</span>
            </Link>
          </div>
        </div>
      </div>

      {/* لوحة المعلومات السريعة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* إجمالي العملاء */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">إجمالي العملاء</p>
              <p className="text-3xl font-bold text-blue-800 pulse-number">
                {stats.clients_count}{" "}
              </p>
            </div>
            <div className="bg-blue-500/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:person"
                className="text-blue-600"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-blue-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/clients"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center"
            >
              عرض العملاء
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>

        {/* إجمالي العمال */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">إجمالي العمال</p>
              <p className="text-3xl font-bold text-orange-800 pulse-number">
                {stats.workers_count}{" "}
              </p>
            </div>
            <div className="bg-orange/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:construction-worker"
                className="text-orange"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-orange-200 rounded-full overflow-hidden">
            <div className="h-full bg-orange rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/workers"
              className="text-orange hover:text-orange/80 text-sm font-medium flex items-center"
            >
              عرض العمال
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>

        {/* إجمالي المقابلات */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-3">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">إجمالي المقابلات</p>
              <p className="text-3xl font-bold text-purple-800 pulse-number">
                {" "}
                {stats.interviews_count}{" "}
              </p>
            </div>
            <div className="bg-accent-500/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:spiral-calendar"
                className="text-accent-500"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-purple-200 rounded-full overflow-hidden">
            <div className="h-full bg-accent-500 rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/interviews"
              className="text-accent-600 hover:text-accent-700 text-sm font-medium flex items-center"
            >
              عرض المقابلات
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>

        {/* إجمالي المدفوعات */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">إجمالي المدفوعات</p>
              <p className="text-3xl font-bold text-green-800 pulse-number">
                {stats.total_payments} ريال
              </p>
            </div>
            <div className="bg-green-500/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:money-bag"
                className="text-green-600"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-green-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin/payments"
              className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
            >
              عرض المدفوعات
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>
      </div>

      {/* إحصائيات الطلبات */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* الطلبات الجديدة */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-1">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">الطلبات الجديدة</p>
              <p className="text-3xl font-bold text-red-800 pulse-number">
                {stats.new_orders_count}{" "}
              </p>
            </div>
            <div className="bg-red-500/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:package"
                className="text-red-600"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-red-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin_orders?status=new"
              className="text-red-600 hover:text-red-700 text-sm font-medium flex items-center"
            >
              عرض الطلبات الجديدة
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>

        {/* الطلبات المعلقة */}
        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">الطلبات المعلقة</p>
              <p className="text-3xl font-bold text-yellow-800 pulse-number">
                {" "}
                {stats.pending_orders_count}{" "}
              </p>
            </div>
            <div className="bg-yellow-500/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:hourglass-not-done"
                className="text-yellow-600"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-yellow-200 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500 rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin_orders?status=pending"
              className="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center"
            >
              عرض الطلبات المعلقة
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>

        {/* الطلبات المكتملة */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-3">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">الطلبات المكتملة</p>
              <p className="text-3xl font-bold text-green-800 pulse-number">
                {stats.completed_orders_count}{" "}
              </p>
            </div>
            <div className="bg-green-500/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:check-mark-button"
                className="text-green-600"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-green-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500 rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin_orders?status=completed"
              className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center"
            >
              عرض الطلبات المكتملة
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>

        {/* طلبات الاسترجاع */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm">طلبات الاسترجاع</p>
              <p className="text-3xl font-bold text-purple-800 pulse-number">
                {stats.refund_orders_count}
              </p>
            </div>
            <div className="bg-purple-500/20 w-14 h-14 rounded-full flex items-center justify-center">
              <Icon
                icon="fluent-emoji:counterclockwise-arrows-button"
                className="text-purple-600"
                width="28"
                height="28"
              ></Icon>
            </div>
          </div>
          <div className="mt-4 h-1 bg-purple-200 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full animate-progress w-full"></div>
          </div>
          <div className="mt-4">
            <Link
              href="/admin_orders?status=refund"
              className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center"
            >
              عرض طلبات الاسترجاع
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
            </Link>
          </div>
        </div>
        <div className="bg-cherry/20 w-14 h-14 rounded-full flex items-center justify-center">
          <Icon
            icon="fluent-emoji:money-bag"
            className="text-cherry"
            width="28"
            height="28"
          ></Icon>
        </div>
      </div>
      <div className="mt-4 h-1 bg-green-200 rounded-full overflow-hidden">
        <div className="h-full bg-cherry rounded-full animate-progress w-full"></div>
      </div>
      <div className="mt-4">
        <Link
          href="/admin/payments"
          className="text-cherry hover:text-cherry/80 text-sm font-medium flex items-center"
        >
          عرض المدفوعات
          <Icon
            icon="heroicons:arrow-left"
            className="mr-1"
            width="16"
            height="16"
          ></Icon>
        </Link>
      </div>
      {/* </div>
</div> */}

      {/* Sections hidden as requested */}

      {/* قسم 1: وكالات التوظيف */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl shadow-lg p-6 mb-8 text-white fade-in-up fade-in-up-1 border border-teal-300 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:globe-showing-asia-australia"
                width="32"
                height="32"
                className="ml-2"
              ></Icon>
              وكالات التوظيف
            </h2>
            <p className="text-white/80">
              إدارة حسابات وكالات التوظيف وعرض العمالة المتاحة للعملاء للاختيار
              والدفع والتفويض
            </p>
          </div>
        </div>
      </div>

      {/* إحصائيات وكالات التوظيف */}
      <div className="mt-6 grid grid-cols-5 gap-4 fade-in-up fade-in-up-2">
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-teal-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:building-office-2"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">إجمالي الوكالات</span>
          <span className="text-2xl font-bold">12</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-green-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:user-group"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">العمالة المعروضة</span>
          <span className="text-2xl font-bold">156</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-blue-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:shopping-cart"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">طلبات التوظيف</span>
          <span className="text-2xl font-bold">28</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-purple-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:credit-card"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">المدفوعات المكتملة</span>
          <span className="text-2xl font-bold">18</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-orange-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:document-check"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">التفويضات المكتملة</span>
          <span className="text-2xl font-bold">15</span>
        </div>
      </div>

      {/* أزرار إجراءات وكالات التوظيف */}
      <div className="mt-6 flex flex-wrap gap-3 fade-in-up fade-in-up-2">
        <Link
          href="#"
          className="flex items-center justify-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Icon
            icon="heroicons:building-office-2"
            className="ml-2"
            width="20"
            height="20"
          ></Icon>
          <span className="font-bold">إدارة حسابات الوكالات</span>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Icon
            icon="heroicons:user-group"
            className="ml-2"
            width="20"
            height="20"
          ></Icon>
          <span className="font-bold">عرض العمالة المتاحة</span>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Icon
            icon="heroicons:credit-card"
            className="ml-2"
            width="20"
            height="20"
          ></Icon>
          <span className="font-bold">مراجعة المدفوعات والتفويضات</span>
        </Link>
      </div>

      {/* جدول وكالات التوظيف */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 fade-in-up fade-in-up-3 mt-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <Icon
              icon="heroicons:building-office-2"
              className="ml-2 text-teal-600"
              width="24"
              height="24"
            ></Icon>
            وكالات التوظيف المسجلة
          </h3>
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:funnel"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              تصفية
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:arrows-up-down"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              ترتيب
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  اسم الوكالة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الدولة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  العمالة المعروضة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  طلبات التوظيف
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  المدفوعات
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الحالة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Agency 1 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة ABC للتوظيف
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  الفلبين
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    15 عامل
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                    8 طلبات
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    6 مدفوعات
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    نشط
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon
                        icon="heroicons:pencil-square"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">عرض 3 من 12 وكالة</div>
          <div className="flex gap-2">
            <button
              className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm disabled:opacity-50"
              disabled
            >
              السابق
            </button>
            <button className="bg-teal-600 text-white px-3 py-1 rounded-lg hover:bg-teal-700 text-sm">
              1
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              3
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              التالي
            </button>
          </div>
        </div>
      </div>
      {/* </div>
</div> */}
      {/* قسم 2: تأجير العمال */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl shadow-lg p-6 mb-8 text-white fade-in-up fade-in-up-1 border border-teal-300 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:construction-worker"
                width="32"
                height="32"
                className="ml-2"
              ></Icon>
              قسم تأجير العمال
            </h2>
            <p className="text-white/80">
              إدارة طلبات تأجير العمال المرسلة من العملاء وعروض الأسعار المقدمة
              من شركات التوظيف
            </p>
          </div>
        </div>
      </div>

      {/* إحصائيات تأجير العمال */}
      <div className="mt-6 grid grid-cols-5 gap-4 fade-in-up fade-in-up-2">
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-teal-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:document-text"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">
            طلبات التأجير من العملاء
          </span>
          <span className="text-2xl font-bold">15</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-green-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:currency-dollar"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">عروض الأسعار المقدمة</span>
          <span className="text-2xl font-bold">24</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-yellow-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:clock"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">الموافقات المعلقة</span>
          <span className="text-2xl font-bold">3</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-purple-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:check-badge"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">التأجير المكتمل</span>
          <span className="text-2xl font-bold">8</span>
        </div>
        <div className="flex flex-col items-center bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg border-b-4 border-orange-500 transform hover:-translate-y-1 p-4">
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full p-3 mb-2">
            <Icon
              icon="heroicons:building-office-2"
              className="text-white"
              width="24"
              height="24"
            ></Icon>
          </div>
          <span className="font-bold text-center">شركات التأجير</span>
          <span className="text-2xl font-bold">6</span>
        </div>
      </div>

      {/* أزرار إجراءات تأجير العمال */}
      <div className="mt-6 flex flex-wrap gap-3 fade-in-up fade-in-up-2">
        <Link
          href="#"
          className="flex items-center justify-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Icon
            icon="heroicons:document-magnifying-glass"
            className="ml-2"
            width="20"
            height="20"
          ></Icon>
          <span className="font-bold">عرض جميع طلبات العملاء</span>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Icon
            icon="heroicons:currency-dollar"
            className="ml-2"
            width="20"
            height="20"
          ></Icon>
          <span className="font-bold">عرض عروض الأسعار</span>
        </Link>
        <Link
          href="#"
          className="flex items-center justify-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-1"
        >
          <Icon
            icon="heroicons:user-group"
            className="ml-2"
            width="20"
            height="20"
          ></Icon>
          <span className="font-bold">إدارة شركات التوظيف</span>
        </Link>
      </div>

      {/* جدول طلبات التأجير */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 fade-in-up fade-in-up-3">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <Icon
              icon="heroicons:document-text"
              className="ml-2 text-teal-600"
              width="24"
              height="24"
            ></Icon>
            طلبات تأجير العمال
          </h3>
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:funnel"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              تصفية
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:arrows-up-down"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              ترتيب
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  رقم الطلب
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  اسم العميل
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  التخصصات
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  عدد العمال
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  المدة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  عروض الأسعار
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الحالة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #3101
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة أحمد
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  كهربائي، سباك
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    3
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  6 أشهر
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    4 عروض
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    نشط
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon
                        icon="heroicons:pencil-square"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #3100
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة XYZ
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  سباك
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    1
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  3 أشهر
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    1 عرض
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:clock"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    معلق
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon
                        icon="heroicons:pencil-square"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #3099
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة النخبة
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  دهان، نجار، كهربائي
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    5
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  سنة واحدة
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b text-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    6 عروض
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    نشط
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon
                        icon="heroicons:pencil-square"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">عرض 3 من 15 طلب</div>
          <div className="flex gap-2">
            <button
              className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm disabled:opacity-50"
              disabled
            >
              السابق
            </button>
            <button className="bg-teal-600 text-white px-3 py-1 rounded-lg hover:bg-teal-700 text-sm">
              1
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              3
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              التالي
            </button>
          </div>
        </div>
      </div>

      {/* قسم عروض الأسعار المقدمة */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 fade-in-up fade-in-up-3">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <Icon
              icon="heroicons:currency-dollar"
              className="ml-2 text-teal-600"
              width="24"
              height="24"
            ></Icon>
            عروض الأسعار المقدمة من شركات التوظيف
          </h3>
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:funnel"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              تصفية
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:arrows-up-down"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              ترتيب
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  رقم العرض
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  رقم الطلب
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  اسم الشركة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  السعر المقدم
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  تاريخ التقديم
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الحالة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #Q2045
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #3101
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة الخليج للتوظيف
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-800 border-b">
                  14,500 ريال
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  2025-03-25
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    مقبول
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Icon
                        icon="heroicons:pencil-square"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #Q2044
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #3101
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة المستقبل للعمالة
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-800 border-b">
                  15,200 ريال
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  2025-03-24
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:clock"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    قيد المراجعة
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      <Icon
                        icon="heroicons:pencil-square"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #Q2043
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #3099
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة الأمان للتوظيف
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-800 border-b">
                  44,000 ريال
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  2025-03-23
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    مقبول
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-teal-600 hover:text-teal-800">
                      <Icon
                        icon="heroicons:pencil-square"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">عرض 3 من 24 عرض</div>
          <div className="flex gap-2">
            <button
              className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm disabled:opacity-50"
              disabled
            >
              السابق
            </button>
            <button className="bg-teal-600 text-white px-3 py-1 rounded-lg hover:bg-teal-700 text-sm">
              1
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              3
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              التالي
            </button>
          </div>
        </div>
      </div>

      {/* قسم 3: العمالة المعروضة من الوكالات */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg p-6 mb-8 text-white fade-in-up fade-in-up-1 border border-blue-300 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:construction-worker"
                width="32"
                height="32"
                className="ml-2"
              ></Icon>
              العمالة المعروضة من الوكالات
            </h2>
            <p className="text-white/80">
              استعراض العمالة المتاحة من مختلف وكالات التوظيف للاختيار والتوظيف
            </p>
          </div>
        </div>
      </div>

      {/* بطاقات العمالة المعروضة */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 fade-in-up fade-in-up-2">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <Icon
              icon="fluent-emoji:construction-worker"
              className="ml-2 text-blue-600"
              width="24"
              height="24"
            ></Icon>
            قائمة العمالة المتاحة
          </h3>
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:funnel"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              تصفية
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:arrows-up-down"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              ترتيب
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Worker 1 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-4 text-white">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-3">
                    <Icon
                      icon="fluent-emoji:construction-worker"
                      width="32"
                      height="32"
                    ></Icon>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">أحمد محمد</h4>
                    <p className="text-teal-100">كهربائي محترف</p>
                  </div>
                </div>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  متاح
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الوكالة:</span>
                <span className="font-medium">شركة ABC للتوظيف</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الجنسية:</span>
                <span className="font-medium">مصري</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الخبرة:</span>
                <span className="font-medium">8 سنوات</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">السعر الشهري:</span>
                <span className="font-bold text-teal-600">2,500 ريال</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">التقييم:</span>
                <div className="flex text-yellow-400">
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg flex items-center justify-center">
                  <Icon
                    icon="heroicons:eye"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  عرض التفاصيل
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg flex items-center justify-center">
                  <Icon
                    icon="heroicons:pencil-square"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  تعديل
                </button>
              </div>
            </div>
          </div>

          {/* Worker 2 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-3">
                    <Icon
                      icon="fluent-emoji:construction-worker"
                      width="32"
                      height="32"
                    ></Icon>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">محمد علي</h4>
                    <p className="text-green-100">سباك خبير</p>
                  </div>
                </div>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  متاح
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الوكالة:</span>
                <span className="font-medium">شركة XYZ للتوظيف</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الجنسية:</span>
                <span className="font-medium">هندي</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الخبرة:</span>
                <span className="font-medium">5 سنوات</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">السعر الشهري:</span>
                <span className="font-bold text-green-600">2,200 ريال</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">التقييم:</span>
                <div className="flex text-yellow-400">
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon
                    icon="heroicons:star"
                    className="text-gray-300"
                    width="16"
                    height="16"
                  ></Icon>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg flex items-center justify-center">
                  <Icon
                    icon="heroicons:eye"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  عرض التفاصيل
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg flex items-center justify-center">
                  <Icon
                    icon="heroicons:pencil-square"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  تعديل
                </button>
              </div>
            </div>
          </div>

          {/* Worker 3 */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="bg-white rounded-full p-2 mr-3">
                    <Icon
                      icon="fluent-emoji:construction-worker"
                      width="32"
                      height="32"
                    ></Icon>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">خالد عبدالله</h4>
                    <p className="text-purple-100">دهان محترف</p>
                  </div>
                </div>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  متاح
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الوكالة:</span>
                <span className="font-medium">شركة QRS للتوظيف</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الجنسية:</span>
                <span className="font-medium">باكستاني</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">الخبرة:</span>
                <span className="font-medium">6 سنوات</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">السعر الشهري:</span>
                <span className="font-bold text-purple-600">2,300 ريال</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">التقييم:</span>
                <div className="flex text-yellow-400">
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon icon="heroicons:star" width="16" height="16"></Icon>
                  <Icon
                    icon="heroicons:star-half"
                    width="16"
                    height="16"
                  ></Icon>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg flex items-center justify-center">
                  <Icon
                    icon="heroicons:eye"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  عرض التفاصيل
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg flex items-center justify-center">
                  <Icon
                    icon="heroicons:pencil-square"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  تعديل
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            <Icon
              icon="heroicons:eye"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            عرض جميع العمالة المتاحة
          </Link>
        </div>
      </div>

      {/* قسم 4: مدفوعات وتفويضات العملاء */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl shadow-lg p-6 mb-8 text-white fade-in-up fade-in-up-1 border border-purple-300 mt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Icon
                icon="heroicons:credit-card"
                width="32"
                height="32"
                className="ml-2"
              ></Icon>
              مدفوعات وتفويضات العملاء
            </h2>
            <p className="text-white/80">
              متابعة مدفوعات العملاء وتفويضات الوكالات بعد اختيار العمالة
            </p>
          </div>
        </div>
      </div>

      {/* جدول المدفوعات والتفويضات */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 fade-in-up fade-in-up-2">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center">
            <Icon
              icon="heroicons:credit-card"
              className="ml-2 text-purple-600"
              width="24"
              height="24"
            ></Icon>
            سجل المدفوعات والتفويضات
          </h3>
          <div className="flex gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:funnel"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              تصفية
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg flex items-center text-sm">
              <Icon
                icon="heroicons:arrows-up-down"
                className="ml-1"
                width="16"
                height="16"
              ></Icon>
              ترتيب
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  رقم الطلب
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  اسم العميل
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الوكالة
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  العامل
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  المبلغ
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  حالة الدفع
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  حالة التفويض
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-500 border-b">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Payment 1 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #P1001
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  محمد أحمد
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة ABC للتوظيف
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  أحمد محمد (كهربائي)
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-800 border-b">
                  2,500 ريال
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    مكتمل
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    مكتمل
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-purple-600 hover:text-purple-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-purple-600 hover:text-purple-800">
                      <Icon
                        icon="heroicons:document-text"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Payment 2 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #P1002
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  خالد سعيد
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة XYZ للتوظيف
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  محمد علي (سباك)
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-800 border-b">
                  2,200 ريال
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    مكتمل
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:clock"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    معلق
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-purple-600 hover:text-purple-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-purple-600 hover:text-purple-800">
                      <Icon
                        icon="heroicons:document-text"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Payment 3 */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  #P1003
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  سعيد محمود
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  شركة QRS للتوظيف
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 border-b">
                  خالد عبدالله (دهان)
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-800 border-b">
                  2,300 ريال
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    مكتمل
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium flex items-center w-fit">
                    <Icon
                      icon="heroicons:check-circle"
                      className="ml-1"
                      width="14"
                      height="14"
                    ></Icon>
                    مكتمل
                  </span>
                </td>
                <td className="px-4 py-3 text-sm border-b">
                  <div className="flex gap-2">
                    <button className="text-purple-600 hover:text-purple-800">
                      <Icon icon="heroicons:eye" width="18" height="18"></Icon>
                    </button>
                    <button className="text-purple-600 hover:text-purple-800">
                      <Icon
                        icon="heroicons:document-text"
                        width="18"
                        height="18"
                      ></Icon>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">عرض 3 من 18 مدفوعات</div>
          <div className="flex gap-2">
            <button
              className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm disabled:opacity-50"
              disabled
            >
              السابق
            </button>
            <button className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 text-sm">
              1
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              2
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              3
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-50 text-sm">
              التالي
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
