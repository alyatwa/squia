import { Icon } from "@iconify/react/dist/iconify.js";

export const ClientStatics = () => {
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

  return (
    <div className="w-full mx-auto grid grid-cols-4 gap-6  stats-grid">
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
  );
};
