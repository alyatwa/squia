import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminReportsPage = () => {
  const stats = {
    clients_count: 1200,
    workers_count: 300,
    interviews_count: 500,
    payments_count: 1000,
    total_payments: 200000,
    refunded_payments: 5000,
    pending_interviews: 50,
    confirmed_interviews: 300,
    completed_interviews: 100,
    cancelled_interviews: 50,
    monthly_interviews: [
      { month: "يناير", count: 50 },
      { month: "فبراير", count: 70 },
      { month: "مارس", count: 80 },
      { month: "أبريل", count: 60 },
      { month: "مايو", count: 90 },
      { month: "يونيو", count: 100 },
      { month: "يوليو", count: 110 },
      { month: "أغسطس", count: 120 },
      { month: "سبتمبر", count: 130 },
      { month: "أكتوبر", count: 140 },
      { month: "نوفمبر", count: 150 },
      { month: "ديسمبر", count: 160 },
    ],
    monthly_payments: [
      { month: "يناير", amount: 10000 },
      { month: "فبراير", amount: 20000 },
      { month: "مارس", amount: 30000 },
      { month: "أبريل", amount: 40000 },
      { month: "مايو", amount: 50000 },
      { month: "يونيو", amount: 60000 },
      { month: "يوليو", amount: 70000 },
      { month: "أغسطس", amount: 80000 },
      { month: "سبتمبر", amount: 90000 },
      { month: "أكتوبر", amount: 100000 },
      { month: "نوفمبر", amount: 110000 },
      { month: "ديسمبر", amount: 120000 },
    ],
  };

  const monthly_interviews = stats.monthly_interviews.map((item) => {
    return {
      month: item.month,
      count: item.count,
    };
  });

  const monthly_payments = stats.monthly_payments.map((item) => {
    return {
      month: item.month,
      amount: item.amount,
    };
  });
  return (
    <>
      <div className="bg-white flex justify-between  items-center rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-1">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center ml-4">
            <Icon
              icon="fluent-emoji:chart-increasing"
              width="28"
              height="28"
            ></Icon>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-dark">التقارير</h1>
            <p className="text-gray-600">عرض إحصائيات وتقارير النظام</p>
          </div>
        </div>
        {/* زر العودة */}
        <div className="mt-6 text-center">
          <Link
            href="/admin"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <Icon
              icon="heroicons:arrow-uturn-right"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </div>

      {/* ملخص النظام */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 fade-in-up fade-in-up-2">
        <div className="bg-gradient-to-l from-primary-600 to-primary-500 p-4 text-white">
          <h2 className="text-xl font-bold flex items-center">
            <Icon
              icon="heroicons:chart-bar"
              className="ml-2"
              width="24"
              height="24"
            ></Icon>
            ملخص النظام
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* العملاء */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-blue-800">العملاء</h3>
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Icon
                    icon="fluent-emoji:person"
                    className="text-blue-600"
                    width="20"
                    height="20"
                  ></Icon>
                </div>
              </div>

              <div className="flex items-end">
                <span className="text-3xl font-bold text-blue-800 pulse-number">
                  {stats.clients_count}
                </span>
                <span className="text-xl font-medium text-blue-700 mr-1">
                  عميل
                </span>
              </div>

              <div className="mt-4 h-1 bg-blue-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-progress"></div>
              </div>
            </div>

            {/* العمال */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-orange-800">العمال</h3>
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <Icon
                    icon="fluent-emoji:construction-worker"
                    className="text-orange-600"
                    width="20"
                    height="20"
                  ></Icon>
                </div>
              </div>

              <div className="flex items-end">
                <span className="text-3xl font-bold text-orange-800 pulse-number">
                  {stats.workers_count}
                </span>
                <span className="text-xl font-medium text-orange-700 mr-1">
                  عامل
                </span>
              </div>

              <div className="mt-4 h-1 bg-orange-200 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 rounded-full animate-progress w-full"></div>
              </div>
            </div>

            {/* المقابلات */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-purple-800">المقابلات</h3>
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Icon
                    icon="fluent-emoji:spiral-calendar"
                    className="text-purple-600"
                    width="20"
                    height="20"
                  ></Icon>
                </div>
              </div>

              <div className="flex items-end">
                <span className="text-3xl font-bold text-purple-800 pulse-number">
                  {stats.interviews_count}
                </span>
                <span className="text-xl font-medium text-purple-700 mr-1">
                  مقابلة
                </span>
              </div>

              <div className="mt-4 h-1 bg-purple-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full animate-progress  w-full"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* المدفوعات */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-green-800">المدفوعات</h3>
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Icon
                    icon="fluent-emoji:money-bag"
                    className="text-green-600"
                    width="20"
                    height="20"
                  ></Icon>
                </div>
              </div>

              <div className="flex items-end">
                <span className="text-3xl font-bold text-green-800 pulse-number">
                  {stats.payments_count}
                </span>
                <span className="text-xl font-medium text-green-700 mr-1">
                  عملية
                </span>
              </div>

              <div className="mt-4 h-1 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full animate-progress  w-full"></div>
              </div>
            </div>

            {/* إجمالي المدفوعات */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-teal-800">
                  إجمالي المدفوعات
                </h3>
                <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <Icon
                    icon="heroicons:banknotes"
                    className="text-teal-600"
                    width="20"
                    height="20"
                  ></Icon>
                </div>
              </div>

              <div className="flex items-end">
                <span className="text-3xl font-bold text-teal-800 pulse-number">
                  {stats.total_payments}
                </span>
                <span className="text-xl font-medium text-teal-700 mr-1">
                  ريال
                </span>
              </div>

              <div className="mt-4 h-1 bg-teal-200 rounded-full overflow-hidden">
                <div className="h-full bg-teal-500 rounded-full animate-progress  w-full"></div>
              </div>
            </div>

            {/* المبالغ المستردة */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-md p-6 hover-lift fade-in-up fade-in-up-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-red-800">
                  المبالغ المستردة
                </h3>
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <Icon
                    icon="heroicons:arrow-path"
                    className="text-red-600"
                    width="20"
                    height="20"
                  ></Icon>
                </div>
              </div>

              <div className="flex items-end">
                <span className="text-3xl font-bold text-red-800 pulse-number">
                  {stats.refunded_payments}
                </span>
                <span className="text-xl font-medium text-red-700 mr-1">
                  ريال
                </span>
              </div>

              <div className="mt-4 h-1 bg-red-200 rounded-full overflow-hidden">
                <div className="h-full bg-red-500 rounded-full animate-progress  w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* تقرير المقابلات */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 fade-in-up fade-in-up-3">
        <div className="bg-gradient-to-l from-purple-600 to-purple-500 p-4 text-white">
          <h2 className="text-xl font-bold flex items-center">
            <Icon
              icon="heroicons:calendar"
              className="ml-2"
              width="24"
              height="24"
            ></Icon>
            تقرير المقابلات
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* قيد الانتظار */}
            <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-yellow-800">
                  قيد الانتظار
                </h3>
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Icon
                    icon="heroicons:clock"
                    className="text-yellow-600"
                    width="16"
                    height="16"
                  ></Icon>
                </div>
              </div>
              <div className="text-2xl font-bold text-yellow-800">
                {stats.pending_interviews}
              </div>
              <div className="mt-2 h-1 bg-yellow-100 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full animate-progress  w-full"></div>
              </div>
            </div>

            {/* مؤكدة */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-blue-800">مؤكدة</h3>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Icon
                    icon="heroicons:check"
                    className="text-blue-600"
                    width="16"
                    height="16"
                  ></Icon>
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-800">
                {stats.confirmed_interviews}
              </div>
              <div className="mt-2 h-1 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 rounded-full animate-progress  w-full"></div>
              </div>
            </div>

            {/* مكتملة */}
            <div className="bg-green-50 rounded-xl p-4 border border-green-200 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-green-800">مكتملة</h3>
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-green-600"
                    width="16"
                    height="16"
                  ></Icon>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-800">
                {stats.completed_interviews}
              </div>
              <div className="mt-2 h-1 bg-green-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 rounded-full animate-progress  w-full"></div>
              </div>
            </div>

            {/* ملغية */}
            <div className="bg-red-50 rounded-xl p-4 border border-red-200 hover-lift">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-red-800">ملغية</h3>
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Icon
                    icon="heroicons:x-mark"
                    className="text-red-600"
                    width="16"
                    height="16"
                  ></Icon>
                </div>
              </div>
              <div className="text-2xl font-bold text-red-800">
                {stats.cancelled_interviews}
              </div>
              <div className="mt-2 h-1 bg-red-100 rounded-full overflow-hidden">
                <div className="h-full bg-red-400 rounded-full animate-progress  w-full"></div>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
            <Icon
              icon="heroicons:chart-bar"
              className="ml-2"
              width="20"
              height="20"
            ></Icon>
            المقابلات الشهرية
          </h3>

          {monthly_interviews.length > 0 ? (
            <>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="chart-bar">
                  {monthly_interviews.map((month_data) => {
                    const maxCount =
                      Math.max(
                        ...monthly_interviews.map((data) => data.count)
                      ) || 1;
                    const height = (month_data.count / maxCount) * 100;
                    return (
                      <div
                        key={month_data.month}
                        className="chart-column chart-column-animate"
                        style={
                          {
                            "--height": `${height}%`,
                            background:
                              "linear-gradient(to top, #6b46c1, #9f7aea)",
                          } as React.CSSProperties
                        }
                      >
                        <span className="chart-value">{month_data.count}</span>
                        <span className="chart-label">{month_data.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-right">
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        الشهر
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        عدد المقابلات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {monthly_interviews.map((month_data) => (
                      <tr
                        key={month_data.month}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <Icon
                              icon="heroicons:calendar"
                              className="ml-2 text-gray-400"
                              width="16"
                              height="16"
                            />
                            {month_data.month}
                          </div>
                        </td>
                        <td className="px-4 py-4 font-medium">
                          {month_data.count}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon
                  icon="heroicons:calendar"
                  className="text-gray-400"
                  width="32"
                  height="32"
                />
              </div>
              <p className="text-gray-500">لا توجد بيانات شهرية للمقابلات</p>
            </div>
          )}
        </div>
      </div>

      {/* تقرير المدفوعات */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 fade-in-up fade-in-up-4">
        <div className="bg-gradient-to-l from-green-600 to-green-500 p-4 text-white">
          <h2 className="text-xl font-bold flex items-center">
            <Icon
              icon="heroicons:banknotes"
              className="ml-2"
              width="24"
              height="24"
            ></Icon>
            تقرير المدفوعات
          </h2>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-dark mb-4 flex items-center">
            <Icon
              icon="heroicons:chart-bar"
              className="ml-2"
              width="20"
              height="20"
            ></Icon>
            المدفوعات الشهرية
          </h3>

          {monthly_payments.length > 0 ? (
            <>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="chart-bar">
                  {monthly_payments.map((month_data) => {
                    const maxAmount =
                      Math.max(
                        ...monthly_payments.map((data) => data.amount)
                      ) || 1;
                    const height = (month_data.amount / maxAmount) * 100;
                    return (
                      <div
                        key={month_data.month}
                        className="chart-column chart-column-animate"
                        style={
                          {
                            "--height": `${height}%`,
                            background:
                              "linear-gradient(to top, #059669, #10b981)",
                          } as React.CSSProperties
                        }
                      >
                        <span className="chart-value">{month_data.amount}</span>
                        <span className="chart-label">{month_data.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 text-right">
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        الشهر
                      </th>
                      <th className="px-4 py-3 text-gray-600 text-sm font-medium">
                        إجمالي المدفوعات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {monthly_payments.map((month_data) => (
                      <tr
                        key={month_data.month}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center">
                            <Icon
                              icon="heroicons:calendar"
                              className="ml-2 text-gray-400"
                              width="16"
                              height="16"
                            />
                            {month_data.month}
                          </div>
                        </td>
                        <td className="px-4 py-4 font-medium">
                          <div className="flex items-center">
                            <Icon
                              icon="heroicons:currency-dollar"
                              className="ml-2 text-gray-400"
                              width="16"
                              height="16"
                            />
                            {month_data.amount} ريال
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <Icon
                  icon="heroicons:banknotes"
                  className="text-gray-400"
                  width="32"
                  height="32"
                />
              </div>
              <p className="text-gray-500">لا توجد بيانات شهرية للمدفوعات</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
