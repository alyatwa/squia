import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const ClientInterviewsPage = () => {
  // Dummy interviews data for the client interviews table
  const interviews = [
    {
      id: "2451",
      worker: {
        id: 101,
        name: "محمد عبدالله",
        profile_picture: "/images/workers/worker1.jpg",
      },
      date_time: new Date("2025-04-20T14:30:00"),
      meeting_type: "in_person",
      status: "pending",
      result: "pending",
      client_confirmed: false,
      worker_confirmed: false,
      zoom_meeting: null,
    },
    {
      id: "2452",
      worker: {
        id: 102,
        name: "أحمد علي",
        profile_picture: null,
      },
      date_time: new Date("2025-04-18T10:00:00"),
      meeting_type: "zoom",
      status: "confirmed",
      result: "pending",
      client_confirmed: true,
      worker_confirmed: true,
      zoom_meeting: {
        id: "zoom123456",
        url: "https://zoom.us/j/123456789",
      },
    },
    {
      id: "2453",
      worker: {
        id: 103,
        name: "سارة محمد",
        profile_picture: "/images/workers/worker3.jpg",
      },
      date_time: new Date("2025-04-15T16:45:00"),
      meeting_type: "phone",
      status: "completed",
      result: "passed",
      client_confirmed: true,
      worker_confirmed: true,
      zoom_meeting: null,
    },
    {
      id: "2454",
      worker: {
        id: 104,
        name: "خالد عمر",
        profile_picture: null,
      },
      date_time: new Date("2025-04-12T09:15:00"),
      meeting_type: "in_person",
      status: "cancelled",
      result: "failed",
      client_confirmed: false,
      worker_confirmed: false,
      zoom_meeting: null,
    },
    {
      id: "2455",
      worker: {
        id: 105,
        name: "فاطمة يوسف",
        profile_picture: "/images/workers/worker5.jpg",
      },
      date_time: new Date("2025-04-22T11:30:00"),
      meeting_type: "zoom",
      status: "pending",
      result: null,
      client_confirmed: false,
      worker_confirmed: true,
      zoom_meeting: {
        id: "zoom789012",
        url: "https://zoom.us/j/789012345",
      },
    },
    {
      id: "2456",
      worker: {
        id: 106,
        name: "ياسر محمود",
        profile_picture: "/images/workers/worker6.jpg",
      },
      date_time: new Date("2025-04-25T13:00:00"),
      meeting_type: "rescheduled",
      status: "rescheduled",
      result: "pending",
      client_confirmed: true,
      worker_confirmed: false,
      zoom_meeting: null,
    },
  ];

  // Helper functions for formatting
  const formatDateTime = (date: Date): string => {
    return date.toISOString().substring(0, 16).replace("T", " ");
  };

  // For filtering upcoming interviews (used in dashboard stats)
  const upcoming_interviews = interviews.filter(
    (interview) =>
      interview.status !== "completed" &&
      interview.status !== "cancelled" &&
      new Date(interview.date_time) > new Date()
  );
  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* ترحيب وملخص */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-md p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:calendar"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              مقابلاتي
            </h1>
            <p className="text-white/80">
              يمكنك من هنا عرض جميع المقابلات الخاصة بك ومتابعة حالتها.
            </p>
          </div>
          <Link
            href="/client/"
            className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors"
          >
            <Icon
              icon="heroicons:arrow-right"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </div>

      {/* قسم المقابلات */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Icon
              icon="fluent-emoji:calendar"
              className="ml-2 text-accent-600"
              width="24"
              height="24"
            ></Icon>
            <h2 className="text-xl font-bold text-gray-800">جميع المقابلات</h2>
          </div>

          <Link
            href="/client/interviews/add-interview"
            className="inline-flex items-center px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
          >
            <Icon
              icon="heroicons:plus"
              className="ml-1"
              width={20}
              height={20}
            />
            إنشاء مقابلة
          </Link>
        </div>

        {interviews.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-right">
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  رقم المقابلة
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  العامل
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  التاريخ والوقت
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  نوع المقابلة
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  الحالة
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  النتيجة
                </th>
                <th className="px-4 py-3 text-gray-700 text-sm font-medium">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {interviews.map((interview) => (
                <tr
                  key={interview.id}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-gray-800 font-medium">
                    #{interview.id}
                  </td>
                  <td className="px-4 py-4 text-gray-800">
                    {interview.worker.name}
                  </td>
                  <td className="px-4 py-4 text-gray-800">
                    {formatDateTime(interview.date_time)}
                  </td>
                  <td className="px-4 py-4 text-gray-800">
                    {interview.meeting_type === "in_person" && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:user-group"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        حضوري
                      </span>
                    )}
                    {interview.meeting_type === "zoom" && (
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:video-camera"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        عبر زوم
                      </span>
                    )}
                    {interview.meeting_type === "phone" && (
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:phone"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        هاتفي
                      </span>
                    )}
                    {!["in_person", "zoom", "phone"].includes(
                      interview.meeting_type
                    ) && (
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:question-mark-circle"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        غير محدد
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {interview.status === "pending" && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
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
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
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
                    {interview.status === "rescheduled" && (
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:calendar"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        معاد جدولتها
                      </span>
                    )}
                    {![
                      "pending",
                      "confirmed",
                      "completed",
                      "cancelled",
                      "rescheduled",
                    ].includes(interview.status) && (
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:question-mark-circle"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        {interview.status}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {interview.result === "pending" && (
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:clock"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        معلقة
                      </span>
                    )}
                    {interview.result === "passed" && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:check-circle"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        ناجحة
                      </span>
                    )}
                    {interview.result === "failed" && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                        <Icon
                          icon="heroicons:x-circle"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        غير ناجحة
                      </span>
                    )}
                    {!interview.result ||
                      (!["pending", "passed", "failed"].includes(
                        interview.result
                      ) && (
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center w-fit shadow-sm">
                          <Icon
                            icon="heroicons:question-mark-circle"
                            className="ml-1"
                            width="16"
                            height="16"
                          />
                          غير محددة
                        </span>
                      ))}
                  </td>
                  <td className="px-4 py-4">
                    {interview.meeting_type === "zoom" &&
                    interview.zoom_meeting &&
                    ["confirmed", "pending"].includes(interview.status) ? (
                      <Link
                        href="#"
                        className="bg-indigo-500 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-600 transition-colors flex items-center text-xs shadow-sm"
                      >
                        <Icon
                          icon="heroicons:video-camera"
                          width="16"
                          height="16"
                          className="ml-1"
                        />
                        انضم للمقابلة
                      </Link>
                    ) : interview.status === "pending" &&
                      !interview.client_confirmed ? (
                      <Link
                        href="#"
                        className="bg-green-500 text-white px-3 py-1.5 rounded-lg hover:bg-green-600 transition-colors flex items-center text-xs shadow-sm"
                      >
                        <Icon
                          icon="heroicons:check"
                          width="16"
                          height="16"
                          className="ml-1"
                        />
                        تأكيد المقابلة
                      </Link>
                    ) : (
                      <Link
                        href="#"
                        className="bg-accent-500 text-white px-3 py-1.5 rounded-lg hover:bg-accent-600 transition-colors flex items-center text-xs shadow-sm"
                      >
                        <Icon
                          icon="heroicons:eye"
                          width="16"
                          height="16"
                          className="ml-1"
                        />
                        عرض التفاصيل
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <Icon
              icon="fluent-emoji:calendar"
              className="mx-auto mb-4"
              width="64"
              height="64"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              لا توجد مقابلات
            </h3>
            <p className="text-gray-500 mb-6">
              لم يتم جدولة أي مقابلات لك حتى الآن.
            </p>
            <p className="text-gray-500">
              يتم إنشاء المقابلات من قبل الإدارة. يرجى التواصل مع الإدارة لجدولة
              مقابلة جديدة.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
