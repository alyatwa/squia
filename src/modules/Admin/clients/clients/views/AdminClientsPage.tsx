"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminClientsPage = () => {
  const clients = [
    {
      name: "محمد",
      username: "mohamed123",
      email: "user@gmail.com",
      created_at: new Date("2023-01-01"),
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">إدارة العملاء</h1>
        <p className="text-gray-600">عرض وإدارة حسابات العملاء.</p>
      </div>

      {/* قائمة العملاء */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">قائمة العملاء</h2>
          <Link
            href="/admin/add-client"
            className="bg-teal text-white px-4 py-2 rounded-md hover:bg-teal-dark transition-colors flex items-center"
          >
            <Icon
              icon="heroicons:plus"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            إضافة عميل جديد
          </Link>
        </div>

        {clients.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    الاسم
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    اسم المستخدم
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    البريد الإلكتروني
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    تاريخ التسجيل
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    الإجراءات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clients.map((client, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {client.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {client.username}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {client.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {client.created_at.toISOString().split("T")[0]}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Link href="#" className="text-teal hover:underline ml-2">
                        عرض
                      </Link>
                      <Link
                        href="#"
                        className="text-yellow-600 hover:underline ml-2"
                      >
                        تعديل
                      </Link>
                      <button
                        type="button"
                        className="text-red-600 hover:underline bg-transparent border-none p-0 cursor-pointer ml-2"
                        onClick={() => {
                          if (
                            window.confirm("هل أنت متأكد من حذف هذا العميل؟")
                          ) {
                            // Handle delete action
                          }
                        }}
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-600 text-center py-4">لا يوجد عملاء مسجلين</p>
        )}
      </div>
    </div>
  );
};
