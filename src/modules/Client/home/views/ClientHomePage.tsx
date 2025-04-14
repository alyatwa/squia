import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const ClientHomePage = () => {
  const client = {
    name: "أحمد",
  };

  const total_payments = 0;
  const upcoming_interviews: any[] = [];

  // Dummy data for client orders table
  const orders = [
    {
      id: "1283",
      positions: "سباكة، كهرباء",
      quantity: 3,
      duration: 6,
      offers: [
        { id: 1, price: 5000 },
        { id: 2, price: 4800 },
      ],
      status: "new",
    },
    {
      id: "1284",
      positions: "نجارة، دهان",
      quantity: 2,
      duration: 3,
      offers: [{ id: 3, price: 3500 }],
      status: "pending",
    },
    {
      id: "1285",
      positions: "تنظيف، حراسة",
      quantity: 5,
      duration: 12,
      offers: [
        { id: 4, price: 8000 },
        { id: 5, price: 7500 },
        { id: 6, price: 8200 },
      ],
      status: "completed",
    },
  ];
  // Dummy data for client interviews table
  const interviews = [
    {
      id: "2451",
      worker: {
        name: "محمد عبدالله",
        profile_picture: "worker1.jpg", // Set to null if you want to test the fallback icon
      },
      date_time: new Date("2025-04-20T14:30:00"),
      status: "pending_admin_approval",
      worker_confirmed: false,
    },
    {
      id: "2452",
      worker: {
        name: "أحمد علي",
        profile_picture: null,
      },
      date_time: new Date("2025-04-18T10:00:00"),
      status: "confirmed",
      worker_confirmed: true,
    },
    {
      id: "2453",
      worker: {
        name: "سارة محمد",
        profile_picture: "worker3.jpg",
      },
      date_time: new Date("2025-04-15T16:45:00"),
      status: "completed",
      worker_confirmed: true,
    },
    {
      id: "2454",
      worker: {
        name: "خالد عمر",
        profile_picture: null,
      },
      date_time: new Date("2025-04-12T09:15:00"),
      status: "cancelled",
      worker_confirmed: false,
    },
    {
      id: "2455",
      worker: {
        name: "فاطمة يوسف",
        profile_picture: "worker5.jpg",
      },
      date_time: new Date("2025-04-22T11:30:00"),
      status: "pending",
      worker_confirmed: false,
    },
  ];

  // Helper function to format dates
  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0]; // YYYY-MM-DD format
  };

  // Helper function to format time
  const formatTime = (date: Date) => {
    return date.toTimeString().substring(0, 5); // HH:MM format
  };
  return (
    <>
      <div className="hide-existing-sections client-dashboard">
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl shadow-lg p-8 mb-8 relative overflow-hidden border-0 welcome-section max-w-5xl mx-auto">
          {/* Decorative elements (removed green line) */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-teal-100/30 to-emerald-100/30 rounded-full -mr-20 -mt-20 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100/30 to-emerald-100/30 rounded-full -ml-16 -mb-16 animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-teal-100/20 to-emerald-100/20 rounded-full -mr-8 -mb-8 animate-pulse-slow"></div>

          <div className="flex items-center relative z-10">
            <div>
              <h1 className="text-3xl font-bold text-teal-800 mb-4 flex items-center welcome-title">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mr-4 shadow-lg border-4 border-white p-3 animate-bounce-gentle">
                  <Icon
                    icon="fluent-emoji:waving-hand"
                    width="32"
                    height="32"
                    className="text-white"
                  ></Icon>
                </div>
                مرحباً، {client.name}
              </h1>
              <p className="text-teal-700 text-lg welcome-message leading-relaxed">
                مرحباً بك في لوحة تحكم العميل الخاصة بك. يمكنك من هنا إدارة
                طلبات التوظيف والتأجير بكل سهولة.
              </p>
            </div>
          </div>
        </div>

        {/* الأقسام الرئيسية */}
        <div className="grid grid-cols-3 gap-6 mb-10 dashboard-cards">
          {/* قسم التوظيف المحلي */}
          <div className="bg-teal-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border-0 dashboard-card">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/20 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-100/20 rounded-full -ml-8 -mb-8"></div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col items-center text-center mb-5">
                <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center mb-5 shadow-lg border-4 border-white card-icon">
                  <Icon
                    icon="fluent-emoji:office-building"
                    width="44"
                    height="44"
                    className="text-white"
                  ></Icon>
                </div>
                <h3 className="text-2xl font-bold text-teal-800 mb-3 card-title">
                  التوظيف المحلي
                </h3>
                <p className="text-teal-700 text-base mb-5 card-description leading-relaxed">
                  قدّم طلبك الآن، واحصل على ترشيحات سريعة وفورية لأفضل العمالة
                  المتاحة؛ نضمن لك أسرع خدمة توفير عمالة على منصتنا
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/client/orders"
                  className=" w-full inline-flex text-center px-5 py-3 bg-teal-700 text-white rounded-xl hover:bg-teal-800 transition-all duration-300 font-bold shadow-md hover:shadow-lg card-link text-lg"
                >
                  <Icon
                    icon="heroicons:document-text"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  عرض الطلبات
                </Link>
                <Link
                  href="/client/interviews"
                  className="inline-flex w-full text-center px-5 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300 font-bold shadow-md hover:shadow-lg card-link text-lg"
                >
                  <Icon
                    icon="heroicons:calendar"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  عرض المقابلات
                </Link>
                <Link
                  href="/client/orders/add-order"
                  className="flex w-full text-center px-5 py-3 bg-white text-teal-700 rounded-xl hover:bg-teal-50 transition-all duration-300 font-bold border border-teal-200 shadow-sm hover:shadow-md card-link"
                >
                  <Icon
                    icon="heroicons:document-plus"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  إنشاء طلب توظيف
                </Link>
              </div>
            </div>
          </div>

          {/* قسم الوكالات الخارجية */}
          <div className="bg-teal-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border-0 dashboard-card">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/20 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-100/20 rounded-full -ml-8 -mb-8"></div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col items-center text-center mb-5">
                <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center mb-5 shadow-lg border-4 border-white card-icon">
                  <Icon
                    icon="fluent-emoji:globe-showing-asia-australia"
                    width="44"
                    height="44"
                    className="text-white"
                  ></Icon>
                </div>
                <h3 className="text-2xl font-bold text-teal-800 mb-3 card-title">
                  الوكالات الخارجية
                </h3>
                <p className="text-teal-700 text-base mb-5 card-description leading-relaxed">
                  تصفّح الآن العمالة المتوفرة لدى أفضل الوكالات الخارجية، واختر
                  الكفاءات التي تناسب احتياجاتك مباشرة وبكل سهولة. نوفر لك
                  وصولًا آمنًا وتواصلًا مباشرًا مع الوكالات لضمان أفضل اختيار
                  وأسرع إنجاز
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/client/interviews"
                  className="inline-flex w-full text-center px-5 py-3 bg-teal-700 text-white rounded-xl hover:bg-teal-800 transition-all duration-300 font-bold shadow-md hover:shadow-lg card-link text-lg"
                >
                  <Icon
                    icon="heroicons:calendar"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  عرض المقابلات
                </Link>
                <Link
                  href="/client"
                  className="inline-flex w-full text-center px-5 py-3 bg-white text-teal-700 rounded-xl hover:bg-teal-50 transition-all duration-300 font-bold border border-teal-200 shadow-sm hover:shadow-md card-link"
                >
                  <Icon
                    icon="heroicons:users"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  استعراض العمالة الخارجية
                </Link>
              </div>
            </div>
          </div>

          {/* قسم تأجير العمال */}
          <div className="bg-teal-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border-0 dashboard-card">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/20 rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-100/20 rounded-full -ml-8 -mb-8"></div>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col items-center text-center mb-5">
                <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center mb-5 shadow-lg border-4 border-white card-icon">
                  <Icon
                    icon="fluent-emoji:construction-worker"
                    width="44"
                    height="44"
                    className="text-white"
                  ></Icon>
                </div>
                <h3 className="text-2xl font-bold text-teal-800 mb-3 card-title">
                  تأجير العمال
                </h3>
                <p className="text-teal-700 text-base mb-5 card-description leading-relaxed">
                  قدّم طلب تأجير العمال الآن، واحصل على أفضل عروض الأسعار من
                  كبرى شركات التأجير بسهولة وسرعة
                </p>
              </div>
              <Link
                href="/client/new_order"
                className="inline-flex w-full text-center px-5 py-3 bg-teal-700 text-white rounded-xl hover:bg-teal-800 transition-all duration-300 font-bold shadow-md hover:shadow-lg card-link text-lg"
              >
                <Icon
                  icon="heroicons:plus"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                طلب تأجير عمال
              </Link>
            </div>
          </div>
        </div>

        {/* البطاقات الإحصائية */}
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6 mb-12 stats-grid">
          {/* إجمالي المقابلات */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 relative overflow-hidden border-0 stat-card">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/20 rounded-full -mr-10 -mt-10"></div>

            <div className="flex items-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                <Icon
                  icon="heroicons:calendar"
                  className="text-white"
                  width="28"
                  height="28"
                ></Icon>
              </div>
              <div className="mr-4">
                <p className="text-teal-700 text-sm font-medium stat-label">
                  إجمالي المقابلات
                </p>
                <p className="text-3xl font-bold text-teal-800 stat-value">
                  {interviews.length}
                </p>
              </div>
            </div>
          </div>

          {/* المقابلات القادمة */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 relative overflow-hidden border-0 stat-card">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/20 rounded-full -mr-10 -mt-10"></div>

            <div className="flex items-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                <Icon
                  icon="heroicons:clock"
                  className="text-white"
                  width="28"
                  height="28"
                ></Icon>
              </div>
              <div className="mr-4">
                <p className="text-teal-700 text-sm font-medium stat-label">
                  المقابلات القادمة
                </p>
                <p className="text-3xl font-bold text-teal-800 stat-value">
                  {upcoming_interviews.length}
                </p>
              </div>
            </div>
          </div>

          {/* إجمالي المدفوعات */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 relative overflow-hidden border-0 stat-card">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/20 rounded-full -mr-10 -mt-10"></div>

            <div className="flex items-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                <Icon
                  icon="heroicons:banknotes"
                  className="text-white"
                  width="28"
                  height="28"
                ></Icon>
              </div>
              <div className="mr-4">
                <p className="text-teal-700 text-sm font-medium stat-label">
                  إجمالي المدفوعات
                </p>
                <p className="text-3xl font-bold text-teal-800 stat-value">
                  {total_payments} <span className="text-xl">ريال</span>
                </p>
              </div>
            </div>
          </div>

          {/* إجمالي الطلبات */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 relative overflow-hidden border-0 stat-card">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100/20 rounded-full -mr-10 -mt-10"></div>

            <div className="flex items-center">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center shadow-md border-4 border-white">
                <Icon
                  icon="fluent-emoji:package"
                  className="text-white"
                  width="28"
                  height="28"
                ></Icon>
              </div>
              <div className="mr-4">
                <p className="text-teal-700 text-sm font-medium stat-label">
                  إجمالي الطلبات
                </p>
                <p className="text-3xl font-bold text-teal-800 stat-value">
                  {orders.length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* قسم الطلبات */}
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg p-8 mb-12 relative overflow-hidden border-0">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-teal-100/20 to-emerald-100/20 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100/20 to-emerald-100/20 rounded-full -ml-16 -mb-16"></div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center mr-4 shadow-lg border-4 border-white">
                <Icon
                  icon="fluent-emoji:package"
                  className="text-white"
                  width="32"
                  height="32"
                ></Icon>
              </div>
              <h2 className="text-2xl font-bold text-teal-800">طلباتي</h2>
            </div>
            <Link
              href="/client/orders"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg font-bold transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 shadow-inner">
                <Icon
                  icon="heroicons:eye"
                  className="ml-1"
                  width="22"
                  height="22"
                ></Icon>
              </div>
              عرض جميع الطلبات
            </Link>
          </div>

          {orders.length > 0 ? (
            <table className="w-full rounded-lg shadow-sm border border-teal-200">
              <thead>
                <tr className="bg-gradient-to-r from-teal-500 to-teal-600 text-right">
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    رقم الطلب
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    التخصصات
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    عدد العمال
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    مدة التأجير
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    عروض الأسعار
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    الحالة
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    الإجراء
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.slice(0, 3).map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 font-medium text-dark">
                      #{order.id}
                    </td>
                    <td className="px-4 py-4">{order.positions}</td>
                    <td className="px-4 py-4">{order.quantity}</td>
                    <td className="px-4 py-4">{order.duration} أشهر</td>
                    <td className="px-4 py-4">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        {order.offers.length} عروض
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      {order.status === "new" && (
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                          <Icon
                            icon="heroicons:document-text"
                            className="ml-1"
                            width="16"
                            height="16"
                          />
                          جديد
                        </span>
                      )}
                      {order.status === "pending" && (
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                          <Icon
                            icon="heroicons:clock"
                            className="ml-1"
                            width="16"
                            height="16"
                          />
                          معلق
                        </span>
                      )}
                      {order.status === "completed" && (
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                          <Icon
                            icon="heroicons:check-circle"
                            className="ml-1"
                            width="16"
                            height="16"
                          />
                          مكتمل
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <Link
                        href={`/client/order/${order.id}`}
                        className="bg-teal-600 inline-flex text-white px-3 py-1.5 rounded-lg hover:bg-teal-700 transition-colors   items-center text-xs shadow-sm"
                      >
                        <Icon
                          icon="heroicons:eye"
                          width="16"
                          height="16"
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
                width="64"
                height="64"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد طلبات
              </h3>
              <p className="text-gray-500 mb-6">
                لم تقم بإنشاء أي طلبات حتى الآن.
              </p>
              <Link
                href="/client/orders/add-order"
                className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-colors shadow-md font-bold"
              >
                <Icon
                  icon="heroicons:plus"
                  className="ml-2"
                  width="20"
                  height="20"
                />
                إنشاء طلب جديد
              </Link>
            </div>
          )}
        </div>

        {/* قسم المقابلات */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg p-8 mb-12 relative overflow-hidden border-0">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-purple-100/20 to-purple-100/20 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/20 to-purple-100/20 rounded-full -ml-16 -mb-16"></div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-accent-500 flex items-center justify-center mr-4 shadow-lg border-4 border-white">
                <Icon
                  icon="fluent-emoji:spiral-calendar"
                  className="text-white"
                  width="32"
                  height="32"
                ></Icon>
              </div>
              <h2 className="text-2xl font-bold text-purple-800">مقابلاتي</h2>
            </div>
            <Link
              href="/client/interviews"
              className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-xl hover:bg-accent-600 transition-all duration-300 shadow-md hover:shadow-lg font-bold transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3 shadow-inner">
                <Icon
                  icon="heroicons:eye"
                  className="ml-1"
                  width="22"
                  height="22"
                ></Icon>
              </div>
              عرض جميع المقابلات
            </Link>
          </div>

          {interviews.length > 0 ? (
            <table className="w-full rounded-lg shadow-sm border border-purple-200">
              <thead>
                <tr className="bg-gradient-to-r from-accent-500 to-accent-600 text-right">
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    رقم المقابلة
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    العامل
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    التاريخ
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    الوقت
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    الحالة
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    تأكيد العامل
                  </th>
                  <th className="px-4 py-3 text-white text-sm font-medium">
                    الإجراء
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {interviews
                  .slice(0, 3)
                  .sort((a, b) => b.date_time.getTime() - a.date_time.getTime())
                  .map((interview) => (
                    <tr key={interview.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-medium text-dark">
                        #{interview.id}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          {interview.worker.profile_picture ? (
                            <img
                              src={`/static/uploads/${interview.worker.profile_picture}`}
                              alt={interview.worker.name}
                              className="w-8 h-8 rounded-full object-cover border border-gray-200 ml-2"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 ml-2">
                              <Icon
                                icon="heroicons:user"
                                width="16"
                                height="16"
                              />
                            </div>
                          )}
                          {interview.worker.name}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        {formatDate(interview.date_time)}
                      </td>
                      <td className="px-4 py-4">
                        {formatTime(interview.date_time)}
                      </td>
                      <td className="px-4 py-4">
                        {interview.status === "pending_admin_approval" && (
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                            <Icon
                              icon="heroicons:clock"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            في انتظار موافقة الإدارة
                          </span>
                        )}
                        {interview.status === "pending" && (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                            <Icon
                              icon="heroicons:clock"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            في انتظار التأكيد
                          </span>
                        )}
                        {interview.status === "confirmed" && (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                            <Icon
                              icon="heroicons:check-circle"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            مؤكدة
                          </span>
                        )}
                        {interview.status === "completed" && (
                          <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                            <Icon
                              icon="heroicons:check-badge"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            مكتملة
                          </span>
                        )}
                        {interview.status === "cancelled" && (
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                            <Icon
                              icon="heroicons:x-circle"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            ملغية
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        {interview.worker_confirmed ? (
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                            <Icon
                              icon="heroicons:check-circle"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            تم التأكيد
                          </span>
                        ) : (
                          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                            <Icon
                              icon="heroicons:clock"
                              className="ml-1"
                              width="16"
                              height="16"
                            />
                            في انتظار التأكيد
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-4">
                        <Link
                          href={`/interview/client/details/${interview.id}`}
                          className="bg-accent-500 text-white px-3 py-1.5 rounded-lg hover:bg-accent-600 transition-colors   items-center text-xs shadow-sm inline-flex"
                        >
                          <Icon
                            icon="heroicons:eye"
                            width="16"
                            height="16"
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
                icon="fluent-emoji:spiral-calendar"
                className="mx-auto mb-4"
                width="64"
                height="64"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد مقابلات
              </h3>
              <p className="text-gray-500 mb-6">
                لم تقم بجدولة أي مقابلات حتى الآن.
              </p>
              <Link
                href="/client/dashboard"
                className="inline-flex items-center px-6 py-3 bg-accent-500 text-white rounded-xl hover:bg-accent-600 transition-colors shadow-md font-bold"
              >
                <Icon
                  icon="heroicons:eye"
                  className="ml-2"
                  width="20"
                  height="20"
                />
                استعراض العمالة
              </Link>
            </div>
          )}
        </div>

        {/* External Workers and Recruitment Sections */}
        <div className="stats-section">
          {/* Available External Workers Section */}
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl shadow-lg p-8 mb-12 relative overflow-hidden border-0">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-teal-100/20 to-emerald-100/20 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-teal-100/20 to-emerald-100/20 rounded-full -ml-16 -mb-16"></div>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center mr-4 shadow-lg border-4 border-white">
                  <Icon
                    icon="fluent-emoji:globe-showing-asia-australia"
                    className="text-white"
                    width="32"
                    height="32"
                  ></Icon>
                </div>
                <h2 className="text-2xl font-bold text-teal-800">
                  العمالة الخارجية المتاحة
                </h2>
              </div>
              <Link
                href="/client"
                className="px-5 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300 font-bold shadow-md inline-flex hover:shadow-lg items-center"
              >
                <Icon
                  icon="heroicons:users"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                استعراض العمالة الخارجية
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 client-dashboard-worker-grid">
              {/* Worker 1 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 relative overflow-hidden border-0 worker-card">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-100/20 to-teal-100/20 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-100/20 to-teal-100/20 rounded-full -ml-8 -mb-8"></div>

                {/* Worker header */}
                <div className="flex items-center mb-5 relative">
                  <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center shadow-md border-4 border-white">
                    <Icon
                      icon="fluent-emoji:construction-worker"
                      className="text-white"
                      width="36"
                      height="36"
                    ></Icon>
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-teal-800 text-xl">محمد أحمد</p>
                    <p className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block mt-1">
                      مصري
                    </p>
                  </div>
                </div>

                {/* Worker details */}
                <div className="mb-6 bg-teal-50 p-5 rounded-xl border border-teal-100 shadow-inner">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-teal-700">
                      التخصص:
                    </span>
                    <span className="text-sm font-bold bg-white text-teal-800 px-3 py-1 rounded-full shadow-sm border border-teal-100">
                      صيانة
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-teal-700">
                      الخبرة:
                    </span>
                    <span className="text-sm font-bold bg-white text-teal-800 px-3 py-1 rounded-full shadow-sm border border-teal-100">
                      5 سنوات
                    </span>
                  </div>
                </div>

                {/* Action button */}
                <Link
                  href="/client"
                  className="w-full px-5 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg font-bold"
                >
                  <Icon
                    icon="heroicons:eye"
                    className="ml-2"
                    width="22"
                    height="22"
                  ></Icon>
                  عرض التفاصيل
                </Link>
              </div>

              {/* Worker 2 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 relative overflow-hidden border-0 worker-card">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-100/20 to-teal-100/20 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-100/20 to-teal-100/20 rounded-full -ml-8 -mb-8"></div>

                {/* Worker header */}
                <div className="flex items-center mb-5 relative">
                  <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center shadow-md border-4 border-white">
                    <Icon
                      icon="fluent-emoji:construction-worker"
                      className="text-white"
                      width="36"
                      height="36"
                    ></Icon>
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-teal-800 text-xl">
                      راجيش كومار
                    </p>
                    <p className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block mt-1">
                      هندي
                    </p>
                  </div>
                </div>

                {/* Worker details */}
                <div className="mb-6 bg-teal-50 p-5 rounded-xl border border-teal-100 shadow-inner">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-teal-700">
                      التخصص:
                    </span>
                    <span className="text-sm font-bold bg-white text-teal-800 px-3 py-1 rounded-full shadow-sm border border-teal-100">
                      تنظيف
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-teal-700">
                      الخبرة:
                    </span>
                    <span className="text-sm font-bold bg-white text-teal-800 px-3 py-1 rounded-full shadow-sm border border-teal-100">
                      3 سنوات
                    </span>
                  </div>
                </div>
                {/* Action button */}
                <Link
                  href="/client"
                  className="w-full px-5 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg font-bold"
                >
                  <Icon
                    icon="heroicons:eye"
                    className="ml-2"
                    width="22"
                    height="22"
                  ></Icon>
                  عرض التفاصيل
                </Link>
              </div>

              {/* Worker 3 */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 relative overflow-hidden border-0 worker-card">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-100/20 to-teal-100/20 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-100/20 to-teal-100/20 rounded-full -ml-8 -mb-8"></div>

                {/* Worker header */}
                <div className="flex items-center mb-5 relative">
                  <div className="w-20 h-20 rounded-full bg-teal-600 flex items-center justify-center shadow-md border-4 border-white">
                    <Icon
                      icon="fluent-emoji:construction-worker"
                      className="text-white"
                      width="36"
                      height="36"
                    ></Icon>
                  </div>
                  <div className="mr-4">
                    <p className="font-bold text-teal-800 text-xl">جون سميث</p>
                    <p className="text-sm font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block mt-1">
                      فلبيني
                    </p>
                  </div>
                </div>

                {/* Worker details */}
                <div className="mb-6 bg-teal-50 p-5 rounded-xl border border-teal-100 shadow-inner">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-teal-700">
                      التخصص:
                    </span>
                    <span className="text-sm font-bold bg-white text-teal-800 px-3 py-1 rounded-full shadow-sm border border-teal-100">
                      تشغيل
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-teal-700">
                      الخبرة:
                    </span>
                    <span className="text-sm font-bold bg-white text-teal-800 px-3 py-1 rounded-full shadow-sm border border-teal-100">
                      7 سنوات
                    </span>
                  </div>
                </div>
                {/* Action button */}
                <Link
                  href="/client/list_workers"
                  className="w-full inline-flex px-5 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition-all duration-300   items-center justify-center shadow-md hover:shadow-lg font-bold"
                >
                  <Icon
                    icon="heroicons:eye"
                    className="ml-2"
                    width="22"
                    height="22"
                  ></Icon>
                  عرض التفاصيل
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
