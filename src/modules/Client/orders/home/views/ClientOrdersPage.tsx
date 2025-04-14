"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useState } from "react";

interface Order {
  id: number;
  title: string;
  position: string;
  quantity: number;
  amount: number;
  status: "unapproved" | "approved" | "completed" | "rejected" | string;
  created_at: Date;
}

export const ClientOrdersPage = () => {
  // Sample data - replace this with your actual data fetching logic
  const [orders] = useState<Order[]>([
    {
      id: 1,
      title: "طلب توظيف مبرمج",
      position: "مبرمج ويب",
      quantity: 3,
      amount: 1500,
      status: "unapproved",
      created_at: new Date("2023-10-01T12:00:00Z"),
    },
    {
      id: 2,
      title: "طلب توظيف مصمم",
      position: "مصمم جرافيك",
      quantity: 2,
      amount: 2000,
      status: "approved",
      created_at: new Date("2023-10-05T12:00:00Z"),
    },
    {
      id: 3,
      title: "طلب توظيف مسوق",
      position: "مسوق رقمي",
      quantity: 5,
      amount: 3000,
      status: "completed",
      created_at: new Date("2023-10-10T12:00:00Z"),
    },
    {
      id: 4,
      title: "طلب توظيف مدرب",
      position: "مدرب رياضي",
      quantity: 1,
      amount: 1000,
      status: "rejected",
      created_at: new Date("2023-10-15T12:00:00Z"),
    },
  ]);

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]; // Simple YYYY-MM-DD format
  };

  const getStatusUI = (status: string) => {
    switch (status) {
      case "unapproved":
        return (
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
            <Icon
              icon="heroicons:clock"
              className="ml-1"
              width={16}
              height={16}
            />
            في انتظار الموافقة
          </span>
        );
      case "approved":
        return (
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
            <Icon
              icon="heroicons:check-circle"
              className="ml-1"
              width={16}
              height={16}
            />
            تمت الموافقة
          </span>
        );
      case "completed":
        return (
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
            <Icon
              icon="heroicons:check-badge"
              className="ml-1"
              width={16}
              height={16}
            />
            مكتمل
          </span>
        );
      case "rejected":
        return (
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
            <Icon
              icon="heroicons:x-circle"
              className="ml-1"
              width={16}
              height={16}
            />
            مرفوض
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
            <Icon
              icon="heroicons:question-mark-circle"
              className="ml-1"
              width={16}
              height={16}
            />
            {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* ترحيب وملخص */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-md p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:package"
                width={36}
                height={36}
                className="ml-2"
              />
              طلباتي
            </h1>
            <p className="text-white/80">
              يمكنك من هنا عرض جميع طلبات التوظيف الخاصة بك ومتابعة حالتها.
            </p>
          </div>
          <Link
            href="/client/dashboard"
            className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors"
          >
            <Icon
              icon="heroicons:arrow-right"
              className="ml-1"
              width={20}
              height={20}
            />
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </div>

      {/* قسم الطلبات */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Icon
              icon="fluent-emoji:package"
              className="ml-2 text-accent-600"
              width={24}
              height={24}
            />
            <h2 className="text-xl font-bold text-gray-800">جميع الطلبات</h2>
          </div>
          <Link
            href="/client/orders/add-order"
            className="inline-flex items-center px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
          >
            <Icon
              icon="heroicons:plus"
              className="ml-1"
              width={20}
              height={20}
            />
            إنشاء طلب جديد
          </Link>
        </div>

        {orders.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-right">
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  رقم الطلب
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  العنوان
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  التخصصات
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  الكمية
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  المبلغ
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  الحالة
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  تاريخ الإنشاء
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-gray-800 font-medium">
                    #{order.id}
                  </td>
                  <td className="px-4 py-4 text-gray-800">{order.title}</td>
                  <td className="px-4 py-4 text-gray-800">{order.position}</td>
                  <td className="px-4 py-4 text-gray-800">{order.quantity}</td>
                  <td className="px-4 py-4 text-gray-800">
                    {order.amount} ريال
                  </td>
                  <td className="px-4 py-4">{getStatusUI(order.status)}</td>
                  <td className="px-4 py-4 text-gray-800">
                    {formatDate(order.created_at)}
                  </td>
                  <td className="px-4 py-4">
                    <Link
                      href="#"
                      className="bg-accent-500 text-white px-3 py-1.5 rounded-lg hover:bg-accent-600 transition-colors flex items-center text-xs shadow-sm"
                    >
                      <Icon
                        icon="heroicons:eye"
                        width={16}
                        height={16}
                        className="ml-1"
                      />
                      عرض التفاصيل
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <Icon
              icon="fluent-emoji:package"
              className="mx-auto mb-4"
              width={64}
              height={64}
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              لا توجد طلبات
            </h3>
            <p className="text-gray-500 mb-6">
              لم تقم بإنشاء أي طلبات حتى الآن.
            </p>
            <Link
              href="/client/orders/add-order"
              className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-xl hover:bg-accent-600 transition-colors shadow-md font-bold"
            >
              <Icon
                icon="heroicons:plus"
                className="ml-2"
                width={20}
                height={20}
              />
              إنشاء طلب جديد
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
