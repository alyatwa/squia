import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminSettingsPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-md p-6 mb-8 text-white fade-in-up fade-in-up-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="heroicons:cog-6-tooth"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              إعدادات النظام
            </h1>
            <p className="text-white/80">
              يمكنك من هنا إدارة إعدادات النظام المختلفة مثل المستخدمين
              والصلاحيات والأقسام.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Icon
                icon="heroicons:arrow-uturn-right"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              العودة للوحة التحكم
            </Link>
          </div>
        </div>
      </div>

      {/* بطاقات الإعدادات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* إدارة المستخدمين */}
        <Link
          href="/admin/users"
          className="settings-card bg-white rounded-2xl shadow-md p-6 hover:shadow-lg fade-in-up fade-in-up-1"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <Icon
                icon="heroicons:users"
                className="text-blue-600"
                width="40"
                height="40"
              ></Icon>
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-3 text-gray-800">
            إدارة المستخدمين
          </h2>
          <p className="text-gray-600 text-center">
            إضافة وتعديل وحذف المستخدمين في النظام
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg">
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
              الدخول للإدارة
            </span>
          </div>
        </Link>

        {/* نظام المجموعات والصلاحيات */}
        <Link
          href="/admin/pricing"
          className="settings-card bg-white rounded-2xl shadow-md p-6 hover:shadow-lg fade-in-up fade-in-up-2"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Icon
                icon="heroicons:shield-check"
                className="text-purple-600"
                width="40"
                height="40"
              ></Icon>
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-3 text-gray-800">
            المجموعات والصلاحيات
          </h2>
          <p className="text-gray-600 text-center">
            إدارة مجموعات المستخدمين وتحديد الصلاحيات
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg">
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
              الدخول للإدارة
            </span>
          </div>
        </Link>

        {/* نظام الصلاحيات التفصيلية */}
        <Link
          href="/admin/pricing"
          className="settings-card bg-white rounded-2xl shadow-md p-6 hover:shadow-lg fade-in-up fade-in-up-2"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
              <Icon
                icon="heroicons:lock-closed"
                className="text-indigo-600"
                width="40"
                height="40"
              ></Icon>
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-3 text-gray-800">
            الصلاحيات التفصيلية
          </h2>
          <p className="text-gray-600 text-center">
            إدارة صلاحيات الحقول التفصيلية لكل قسم
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg">
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
              الدخول للإدارة
            </span>
          </div>
        </Link>

        {/* إدارة الأقسام */}
        <Link
          href="/admin"
          className="settings-card bg-white rounded-2xl shadow-md p-6 hover:shadow-lg fade-in-up fade-in-up-3"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <Icon
                icon="heroicons:squares-2x2"
                className="text-green-600"
                width="40"
                height="40"
              ></Icon>
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-3 text-gray-800">
            إدارة الأقسام
          </h2>
          <p className="text-gray-600 text-center">
            إضافة وتعديل وحذف أقسام الموقع
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg">
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
              الدخول للإدارة
            </span>
          </div>
        </Link>

        {/* إعدادات الربط (API Integration) */}
        <Link
          href="/admin_api_integrations"
          className="settings-card bg-white rounded-2xl shadow-md p-6 hover:shadow-lg fade-in-up fade-in-up-4"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center">
              <Icon
                icon="heroicons:link"
                className="text-amber-600"
                width="40"
                height="40"
              ></Icon>
            </div>
          </div>
          <h2 className="text-xl font-bold text-center mb-3 text-gray-800">
            🔗 إعدادات الربط
          </h2>
          <p className="text-gray-600 text-center">
            إعدادات ربط الخدمات الخارجية (OpenAI, WhatsApp, Zoom)
          </p>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-700 rounded-lg">
              <Icon
                icon="heroicons:arrow-left"
                className="mr-1"
                width="16"
                height="16"
              ></Icon>
              الدخول للإعدادات
            </span>
          </div>
        </Link>
      </div>

      {/* معلومات النظام */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-4">
        <h2 className="text-xl font-bold mb-4 flex items-center text-gray-800">
          <Icon
            icon="heroicons:information-circle"
            className="ml-2 text-primary-600"
            width="24"
            height="24"
          ></Icon>
          معلومات النظام
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              إصدار النظام
            </h3>
            <p className="text-gray-600">1.0.0</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              آخر تحديث
            </h3>
            <p className="text-gray-600">23 مارس 2025</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-gray-700">
              حالة النظام
            </h3>
            <p className="flex items-center text-green-600">
              <Icon
                icon="heroicons:check-circle"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              يعمل بشكل طبيعي
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
