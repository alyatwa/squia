import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminInterviewsPage = () => {
  const interviews = [
    {
      id: 1,
      client_name: "أحمد محمد",
      worker_name: "علي حسن",
      date: new Date("2023-10-01T10:00:00"),
      status: "pending",
    },
    {
      id: 2,
      client_name: "سارة علي",
      worker_name: "محمد سعيد",
      date: new Date("2023-10-02T14:30:00"),
      status: "confirmed",
    },
    {
      id: 3,
      client_name: "علي حسين",
      worker_name: "فاطمة زينب",
      date: new Date("2023-10-03T09:15:00"),
      status: "completed",
    },
    {
      id: 4,
      client_name: "مريم أحمد",
      worker_name: "يوسف علي",
      date: new Date("2023-10-04T11:45:00"),
      status: "cancelled",
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-dark mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:calendar"
                width="32"
                height="32"
                className="ml-2"
              />
              إدارة المقابلات
            </h1>
            <p className="text-gray-600">
              يمكنك من هنا إدارة المقابلات وعرض بياناتها وتعديلها وحذفها.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Link
              href="/admin/interviews/add-interview"
              className="inline-flex items-center px-5 py-3 bg-gradient-to-l from-teal-600 to-teal-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-teal-400 transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="absolute -inset-x-1 bottom-0 h-1 bg-teal-300 opacity-50 rounded-full"></span>
              <span className="relative flex items-center">
                <span className="flex items-center justify-center bg-opacity-20 rounded-full p-1.5 mr-2">
                  <Icon
                    icon="heroicons:plus"
                    className="text-white"
                    width="18"
                    height="18"
                  />
                </span>
                <span>إنشاء مقابلة جديدة</span>
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex items-center px-5 py-3 bg-gradient-to-l from-blue-600 to-blue-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-400 transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="absolute -inset-x-1 bottom-0 h-1 bg-blue-300 opacity-50 rounded-full"></span>
              <span className="relative flex items-center">
                <span className="flex items-center justify-center  bg-opacity-20 rounded-full p-1.5 mr-2">
                  <Icon
                    icon="heroicons:bell"
                    className="text-white"
                    width="18"
                    height="18"
                  />
                </span>
                <span>إرسال إشعارات المقابلات</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* أدوات البحث والتصفية */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="search"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              بحث
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="ابحث عن عميل أو عامل..."
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Icon
                  icon="heroicons:magnifying-glass"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <label
                htmlFor="status-filter"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الحالة
              </label>
              <select
                id="status-filter"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">جميع الحالات</option>
                <option value="pending">قيد الانتظار</option>
                <option value="confirmed">مؤكدة</option>
                <option value="completed">مكتملة</option>
                <option value="cancelled">ملغية</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date-filter"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                التاريخ
              </label>
              <select
                id="date-filter"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">جميع التواريخ</option>
                <option value="today">اليوم</option>
                <option value="week">هذا الأسبوع</option>
                <option value="month">هذا الشهر</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <>
        {interviews.length > 0 ? (
          <>
            {/* عرض البطاقات */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {interviews.map((interview) => (
                <div
                  key={interview.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden interview-card hover-lift"
                  data-interview-id={interview.id}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <Icon
                            icon="fluent-emoji:calendar"
                            className="text-primary-500"
                            width="24"
                            height="24"
                          />
                        </div>
                        <div className="mr-3">
                          <h3 className="text-lg font-bold text-dark">
                            مقابلة #{interview.id}
                          </h3>
                          <p className="text-gray-600">
                            {interview.date.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {interview.status === "pending" && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          قيد الانتظار
                        </span>
                      )}
                      {interview.status === "confirmed" && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          مؤكدة
                        </span>
                      )}
                      {interview.status === "completed" && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          مكتملة
                        </span>
                      )}
                      {interview.status === "cancelled" && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                          ملغية
                        </span>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center">
                        <Icon
                          icon="fluent-emoji:person"
                          className="ml-2 text-gray-400"
                          width="16"
                          height="16"
                        />
                        <span className="text-gray-500">العميل:</span>
                        <Link
                          href="#"
                          className="mr-2 text-primary-600 hover:text-primary-700 font-medium"
                        >
                          {interview.client_name}
                        </Link>
                      </div>

                      <div className="flex items-center">
                        <Icon
                          icon="fluent-emoji:construction-worker"
                          className="ml-2 text-gray-400"
                          width="16"
                          height="16"
                        />
                        <span className="text-gray-500">العامل:</span>
                        <Link
                          href="#"
                          className="mr-2 text-primary-600 hover:text-primary-700 font-medium"
                        >
                          {interview.worker_name}
                        </Link>
                      </div>

                      <div className="flex items-center">
                        <Icon
                          icon="heroicons:currency-dollar"
                          className="ml-2 text-gray-400"
                          width="16"
                          height="16"
                        />
                        <span className="text-gray-500">الدفع:</span>
                        <span className="mr-2">
                          <span className="text-gray-600">
                            معلومات الدفع غير متوفرة
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex justify-between">
                      <Link
                        href={`/admin/interviews/edit/${interview.id}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 edit-interview-btn"
                        title="تعديل"
                      >
                        <Icon
                          icon="heroicons:pencil-square"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        تعديل
                      </Link>
                      <button
                        type="button"
                        className="delete-interview-btn inline-flex items-center text-red-600 hover:text-red-700"
                      >
                        <Icon
                          icon="heroicons:trash"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        حذف
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* عرض الجدول */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-dark">جدول المقابلات</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-right">
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        الرقم
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        العميل
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        العامل
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        التاريخ
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        الحالة
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        الدفع
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {interviews.map((interview) => (
                      <tr key={interview.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 font-medium text-dark">
                          {interview.id}
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            href="#"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {interview.client_name}
                          </Link>
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            href="#"
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {interview.worker_name}
                          </Link>
                        </td>
                        <td className="px-4 py-4">
                          {interview.date.toLocaleString()}
                        </td>
                        <td className="px-4 py-4">
                          {interview.status === "pending" && (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              قيد الانتظار
                            </span>
                          )}
                          {interview.status === "confirmed" && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                              مؤكدة
                            </span>
                          )}
                          {interview.status === "completed" && (
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              مكتملة
                            </span>
                          )}
                          {interview.status === "cancelled" && (
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                              ملغية
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <span className="text-gray-600">غير متوفر</span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex space-x-2 space-x-reverse">
                            <Link
                              href={`/admin/interviews/edit/${interview.id}`}
                              className="text-primary-600 hover:text-primary-700 edit-interview-btn"
                              title="تعديل"
                            >
                              <Icon
                                icon="heroicons:pencil-square"
                                width="20"
                                height="20"
                              />
                            </Link>
                            <button
                              type="button"
                              className="delete-interview-btn text-red-600 hover:text-red-700"
                              title="حذف"
                            >
                              <Icon
                                icon="heroicons:trash"
                                width="20"
                                height="20"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-white rounded-2xl shadow-md p-8 text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Icon
                icon="heroicons:calendar"
                className="text-gray-400"
                width="40"
                height="40"
              />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">
              لا توجد مقابلات
            </h3>
            <p className="text-gray-500 mb-6">
              لم يتم إضافة أي مقابلات حتى الآن.
            </p>
            <Link
              href="/admin/interviews/add-interview"
              className="inline-flex items-center px-5 py-3 bg-gradient-to-l from-teal-600 to-teal-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-teal-400 transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="absolute -inset-x-1 bottom-0 h-1 bg-teal-300 opacity-50 rounded-full"></span>
              <span className="relative flex items-center">
                <span className="flex items-center justify-center bg-white bg-opacity-20 rounded-full p-1.5 mr-2">
                  <Icon
                    icon="heroicons:plus"
                    className="text-white"
                    width="18"
                    height="18"
                  />
                </span>
                <span>إنشاء مقابلة جديدة</span>
              </span>
            </Link>
          </div>
        )}
      </>
    </>
  );
};
