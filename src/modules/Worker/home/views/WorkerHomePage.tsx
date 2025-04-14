import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const WorkerHomePage = () => {
  // Mock data to replace template variables
  const worker = {
    id: 1,
    display_name: "محمد أحمد",
    nationality: "سعودي",
  };

  const upcoming_interviews = 2;
  const completed_interviews = 5;

  const recent_activities = [
    {
      icon: "heroicons:calendar",
      title: "مقابلة جديدة",
      description: "تمت جدولة مقابلة جديدة مع شركة الفيصل",
      time: "منذ ساعتين",
    },
    {
      icon: "heroicons:check-circle",
      title: "اكتملت المقابلة",
      description: "اكتملت المقابلة مع مؤسسة النور بنجاح",
      time: "منذ يومين",
    },
  ];

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-teal-700 mb-6">
          لوحة تحكم العامل
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="bg-teal-100 p-3 rounded-full ml-4">
                <Icon
                  icon="heroicons:calendar"
                  width="24"
                  height="24"
                  className="text-teal-600"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm">المقابلات القادمة</p>
                <p className="text-2xl font-bold text-teal-600">
                  {upcoming_interviews}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full ml-4">
                <Icon
                  icon="heroicons:check-circle"
                  width="24"
                  height="24"
                  className="text-blue-600"
                />
              </div>
              <div>
                <p className="text-gray-500 text-sm">المقابلات المكتملة</p>
                <p className="text-2xl font-bold text-blue-600">
                  {completed_interviews}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            إجراءات سريعة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/worker/interviews"
              className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center"
            >
              <div className="bg-teal-100 p-3 rounded-full ml-4">
                <Icon
                  icon="heroicons:calendar"
                  width="24"
                  height="24"
                  className="text-teal-600"
                />
              </div>
              <div>
                <p className="font-semibold">عرض المقابلات</p>
                <p className="text-sm text-gray-500">إدارة مواعيد المقابلات</p>
              </div>
            </Link>
            <Link
              href={`/worker/profile/${worker.id}`}
              className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center"
            >
              <div className="bg-blue-100 p-3 rounded-full ml-4">
                <Icon
                  icon="heroicons:user-circle"
                  width="24"
                  height="24"
                  className="text-blue-600"
                />
              </div>
              <div>
                <p className="font-semibold">تحديث الملف الشخصي</p>
                <p className="text-sm text-gray-500">
                  تعديل بيانات الملف الشخصي
                </p>
              </div>
            </Link>
            <Link
              href="/worker/assistant"
              className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center"
            >
              <div className="bg-purple-100 p-3 rounded-full ml-4">
                <Icon
                  icon="heroicons:chat-bubble-left-right"
                  width="24"
                  height="24"
                  className="text-purple-600"
                />
              </div>
              <div>
                <p className="font-semibold">المساعد الشخصي</p>
                <p className="text-sm text-gray-500">الحصول على مساعدة ذكية</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            النشاط الأخير
          </h2>
          {recent_activities.length > 0 ? (
            <div className="space-y-4">
              {recent_activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-4 rounded-lg"
                >
                  <div className="flex items-start">
                    <div className="bg-gray-100 p-2 rounded-full ml-3">
                      <Icon
                        icon={activity.icon}
                        width="20"
                        height="20"
                        className="text-gray-600"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-500">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
              <p>لا يوجد نشاط حديث</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
