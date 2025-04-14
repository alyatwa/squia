"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

// Dummy data types
interface Notification {
  id: number;
  message: string;
  time: string;
  is_read: boolean;
}

interface Client {
  name: string;
  username: string;
}

interface ZoomMeeting {
  join_url: string;
}

interface Payment {
  status: "paid" | "refunded" | "pending";
  amount: number;
}

interface Interview {
  id: number;
  client: Client;
  date_time: Date;
  status:
    | "pending"
    | "confirmed"
    | "completed"
    | "cancelled"
    | "pending_admin_approval"
    | "pending_worker_approval";
  meeting_type: "zoom" | "in_person";
  zoom_meeting?: ZoomMeeting;
  payment?: Payment;
  get_meeting_url_for_role: (role: string) => string;
}

export const WorkerInterviewsPage = () => {
  // Dummy data
  const unreadNotifications = 3;
  const notifications = [
    {
      id: 1,
      message: "لديك طلب مقابلة جديد",
      time: "منذ ساعتين",
      is_read: false,
    },
    {
      id: 2,
      message: "تم تأكيد المقابلة",
      time: "منذ 3 ساعات",
      is_read: false,
    },
    {
      id: 3,
      message: "تم تعديل موعد المقابلة",
      time: "منذ يوم",
      is_read: false,
    },
    { id: 4, message: "إشعار سابق", time: "منذ 3 أيام", is_read: true },
  ];

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const formatTime = (date: Date) => {
    return date.toTimeString().substring(0, 5);
  };

  const [upcomingInterviews] = useState<Interview[]>([
    {
      id: 1,
      client: { name: "أحمد محمد", username: "ahmed_m" },
      date_time: new Date(Date.now() + 86400000), // tomorrow
      status: "confirmed",
      meeting_type: "zoom",
      zoom_meeting: { join_url: "https://zoom.us/j/123456789" },
      payment: { status: "paid", amount: 200 },
      get_meeting_url_for_role: (role) => "https://zoom.us/j/123456789",
    },
    {
      id: 2,
      client: { name: "سارة علي", username: "sara_a" },
      date_time: new Date(Date.now() + 172800000), // day after tomorrow
      status: "pending",
      meeting_type: "in_person",
      get_meeting_url_for_role: (role) => "",
    },
    {
      id: 3,
      client: { name: "محمد خالد", username: "mohamed_k" },
      date_time: new Date(Date.now() + 259200000), // 3 days from now
      status: "pending_worker_approval",
      meeting_type: "in_person",
      get_meeting_url_for_role: (role) => "",
    },
  ]);

  const [interviews] = useState<Interview[]>([
    ...upcomingInterviews,
    {
      id: 4,
      client: { name: "ليلى أحمد", username: "layla_a" },
      date_time: new Date(Date.now() - 86400000), // yesterday
      status: "completed",
      meeting_type: "zoom",
      payment: { status: "paid", amount: 150 },
      get_meeting_url_for_role: (role) => "",
    },
    {
      id: 5,
      client: { name: "عمر حسن", username: "omar_h" },
      date_time: new Date(Date.now() - 172800000), // 2 days ago
      status: "cancelled",
      meeting_type: "in_person",
      get_meeting_url_for_role: (role) => "",
    },
  ]);

  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectingInterviewId, setRejectingInterviewId] = useState<
    number | null
  >(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([""]);

  const handleShowRejectModal = (interviewId: number) => {
    setRejectingInterviewId(interviewId);
    setShowRejectModal(true);
  };

  const handleAddTime = () => {
    setAvailableTimes([...availableTimes, ""]);
  };

  const handleTimeChange = (index: number, value: string) => {
    const newTimes = [...availableTimes];
    newTimes[index] = value;
    setAvailableTimes(newTimes);
  };

  const handleSubmitReject = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle rejection submission here
    console.log({
      interviewId: rejectingInterviewId,
      rejectionReason,
      availableTimes: availableTimes.filter((time) => time !== ""),
    });
    setShowRejectModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* قسم الإشعارات */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-teal-700 flex items-center">
            <Icon
              icon="heroicons:bell"
              className="ml-2"
              width="24"
              height="24"
            />
            الإشعارات
            {unreadNotifications > 0 && (
              <span className="mr-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {unreadNotifications}
              </span>
            )}
          </h2>
          <button className="bg-teal-100 hover:bg-teal-200 text-teal-800 px-3 py-1 rounded-lg flex items-center text-sm transition-colors">
            <Icon
              icon="heroicons:arrow-path"
              className="ml-1"
              width="16"
              height="16"
            />
            تحديث الإشعارات
          </button>
        </div>

        <div className="space-y-3">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-lg ${
                  notification.is_read
                    ? "bg-gray-50"
                    : "bg-teal-50 notification-pulse"
                } border-r-4 ${
                  notification.is_read ? "border-gray-300" : "border-teal-500"
                }`}
              >
                <div className="flex items-start">
                  <div className="ml-3 flex-shrink-0">
                    <Icon
                      icon="heroicons:calendar"
                      width="20"
                      height="20"
                      className="text-teal-600"
                    />
                  </div>
                  <div className="flex-grow">
                    <p
                      className={`text-sm font-medium ${
                        notification.is_read ? "text-gray-700" : "text-teal-800"
                      }`}
                    >
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                  {!notification.is_read && (
                    <button
                      className="mark-as-read px-2 py-1 bg-teal-100 hover:bg-teal-200 text-teal-800 rounded text-xs"
                      data-id={notification.id}
                    >
                      تم القراءة
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 bg-gray-50 rounded-lg">
              <Icon
                icon="heroicons:bell-slash"
                width="40"
                height="40"
                className="text-gray-400 mx-auto mb-2"
              />
              <p className="text-gray-500">ليس لديك إشعارات جديدة</p>
            </div>
          )}
        </div>
      </div>

      {/* المقابلات القادمة */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
          <Icon
            icon="heroicons:calendar"
            className="ml-2"
            width="24"
            height="24"
          />
          المقابلات القادمة
        </h2>

        {upcomingInterviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingInterviews.map((interview) => (
              <div
                key={interview.id}
                className="interview-card bg-white border border-gray-200 rounded-lg shadow-sm p-4 relative"
              >
                {interview.status === "confirmed" && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      مؤكدة
                    </span>
                  </div>
                )}
                {interview.status === "pending" && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      قيد الانتظار
                    </span>
                  </div>
                )}

                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center ml-3">
                    <Icon
                      icon="heroicons:user"
                      width="20"
                      height="20"
                      className="text-teal-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      {interview.client.name || interview.client.username}
                    </h3>
                    <p className="text-xs text-gray-500">العميل</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center">
                    <Icon
                      icon="heroicons:calendar"
                      width="18"
                      height="18"
                      className="text-gray-500 ml-2"
                    />
                    <span className="text-sm">
                      {formatDate(interview.date_time)}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      icon="heroicons:clock"
                      width="18"
                      height="18"
                      className="text-gray-500 ml-2"
                    />
                    <span className="text-sm">
                      {formatTime(interview.date_time)}
                    </span>
                  </div>
                  {interview.meeting_type === "zoom" &&
                  interview.zoom_meeting ? (
                    <div className="flex items-center">
                      <Icon
                        icon="heroicons:video-camera"
                        width="18"
                        height="18"
                        className="text-gray-500 ml-2"
                      />
                      <span className="text-sm">مقابلة عبر زوم</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Icon
                        icon="heroicons:map-pin"
                        width="18"
                        height="18"
                        className="text-gray-500 ml-2"
                      />
                      <span className="text-sm">مقابلة شخصية</span>
                    </div>
                  )}
                </div>

                <div className="flex space-x-2 space-x-reverse">
                  {interview.status === "pending" ||
                  interview.status === "pending_admin_approval" ||
                  interview.status === "pending_worker_approval" ? (
                    <>
                      <Link
                        href={`/worker/interviews/approve/${interview.id}`}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg text-sm transition-colors"
                      >
                        قبول
                      </Link>
                      <button
                        onClick={() => handleShowRejectModal(interview.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white text-center py-2 px-4 rounded-lg text-sm transition-colors"
                      >
                        رفض
                      </button>
                    </>
                  ) : (
                    interview.status === "confirmed" &&
                    interview.meeting_type === "zoom" &&
                    interview.zoom_meeting && (
                      <a
                        href={interview.get_meeting_url_for_role("worker")}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm transition-colors"
                      >
                        <Icon
                          icon="heroicons:video-camera"
                          className="ml-1"
                          width="16"
                          height="16"
                        />
                        انضمام للمقابلة
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg">
            <Icon
              icon="heroicons:calendar"
              width="48"
              height="48"
              className="text-gray-400 mx-auto mb-3"
            />
            <p className="text-gray-500">ليس لديك مقابلات قادمة</p>
          </div>
        )}
      </div>

      {/* سجل المقابلات */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
          <Icon
            icon="heroicons:document-text"
            className="ml-2"
            width="24"
            height="24"
          />
          سجل المقابلات
        </h2>

        {/* ملخص المقابلات */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">إجمالي المقابلات</p>
            <p className="text-2xl font-bold text-teal-600">
              {interviews.length}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">المقابلات المؤكدة</p>
            <p className="text-2xl font-bold text-green-600">
              {interviews.filter((i) => i.status === "confirmed").length}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">المقابلات المكتملة</p>
            <p className="text-2xl font-bold text-blue-600">
              {interviews.filter((i) => i.status === "completed").length}
            </p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-500 text-sm">المقابلات الملغية</p>
            <p className="text-2xl font-bold text-red-600">
              {interviews.filter((i) => i.status === "cancelled").length}
            </p>
          </div>
        </div>

        {/* جدول المقابلات */}
        {interviews.length > 0 ? (
          <div className="overflow-x-auto bg-gray-50 rounded-lg p-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-3 text-right rounded-tr-lg">العميل</th>
                  <th className="px-4 py-3 text-right">التاريخ</th>
                  <th className="px-4 py-3 text-right">الوقت</th>
                  <th className="px-4 py-3 text-right">الحالة</th>
                  <th className="px-4 py-3 text-right rounded-tl-lg">الدفع</th>
                </tr>
              </thead>
              <tbody>
                {interviews.map((interview) => (
                  <tr
                    key={interview.id}
                    className="border-b hover:bg-white transition-colors"
                  >
                    <td className="px-4 py-3">
                      {interview.client.name || interview.client.username}
                    </td>
                    <td className="px-4 py-3">
                      {formatDate(interview.date_time)}
                    </td>
                    <td className="px-4 py-3">
                      {formatTime(interview.date_time)}
                    </td>
                    <td className="px-4 py-3">
                      {interview.status === "pending" && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          قيد الانتظار
                        </span>
                      )}
                      {interview.status === "confirmed" && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          مؤكدة
                        </span>
                      )}
                      {interview.status === "completed" && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          مكتملة
                        </span>
                      )}
                      {interview.status === "cancelled" && (
                        <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                          ملغية
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {interview.payment ? (
                        interview.payment.status === "paid" ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            تم الدفع ({interview.payment.amount} ريال)
                          </span>
                        ) : interview.payment.status === "refunded" ? (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                            تم استرداد المبلغ
                          </span>
                        ) : null
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          لم يتم الدفع
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-600">
            <p>ليس لديك أي مقابلات مجدولة حاليًا.</p>
          </div>
        )}
      </div>

      {/* زر العودة */}
      <div className="text-center">
        <Link
          href="/worker/dashboard"
          className="inline-flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
        >
          <Icon
            icon="heroicons:arrow-left"
            className="ml-1"
            width="20"
            height="20"
          />
          العودة إلى لوحة التحكم
        </Link>
      </div>

      {/* نموذج رفض المقابلة */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              رفض المقابلة
            </h3>

            <form onSubmit={handleSubmitReject} className="space-y-4">
              <div>
                <label
                  htmlFor="rejection_reason"
                  className="block text-gray-700 mb-2"
                >
                  سبب الرفض
                </label>
                <textarea
                  id="rejection_reason"
                  value={rejectionReason}
                  onChange={(e) => setRejectionReason(e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  الأوقات المتاحة البديلة
                </label>
                <div className="space-y-2">
                  {availableTimes.map((time, index) => (
                    <div key={index} className="flex space-x-2 space-x-reverse">
                      <input
                        type="datetime-local"
                        value={time}
                        onChange={(e) =>
                          handleTimeChange(index, e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required={index === 0}
                      />
                      {index === availableTimes.length - 1 && (
                        <button
                          type="button"
                          onClick={handleAddTime}
                          className="bg-teal-100 hover:bg-teal-200 text-teal-800 px-3 py-2 rounded-lg"
                        >
                          <Icon icon="heroicons:plus" width="16" height="16" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-2 space-x-reverse mt-6">
                <button
                  type="button"
                  onClick={() => setShowRejectModal(false)}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  تأكيد الرفض
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
