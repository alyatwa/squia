import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const WorkerHomePage = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-gray-100">
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="{{ url_for('static', filename='images/logo.png') }}"
            alt="Taeen Logo"
            className="h-10 ml-3"
          />
          <h1 className="text-xl font-bold text-teal-700">منصة تعيين</h1>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 ml-2">مرحباً،</span>
          <span className="font-semibold">{{ worker.display_name }}</span>
        </div>
      </div>
    </div>
  </header>

  <div className="flex flex-1">
    <!-- Sidebar -->
    <Linkside className="w-64 bg-white shadow-md hidden md:block">
      <div className="p-4">
        <div className="text-center mb-6">
          <div
            className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-2"
          >
            <Icon
              icon="heroicons:user"
              width="40"
              height="40"
              className="text-teal-600"
            ></Icon>
          </div>
          <h2 className="font-bold">{{ worker.display_name }}</h2>
          <p className="text-sm text-gray-500">{{ worker.nationality }}</p>
        </div>

        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                href="{{ url_for('worker_dashboard') }}"
                className="flex items-center p-2 rounded-lg bg-teal-50 text-teal-700"
              >
                <Icon
                  icon="heroicons:rectangle-group"
                  width="20"
                  height="20"
                  className="ml-2"
                ></Icon>
                لوحة التحكم
              </Link>
            </li>
            <li>
              <Link
                href="{{ url_for('worker_page', worker_id=worker.id) }}"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
              >
                <Icon
                  icon="heroicons:user-circle"
                  width="20"
                  height="20"
                  className="ml-2"
                ></Icon>
                الملف الشخصي
              </Link>
            </li>
            <li>
              <Link
                href="{{ url_for('worker_dashboard') }}"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
              >
                <Icon
                  icon="heroicons:calendar"
                  width="20"
                  height="20"
                  className="ml-2"
                ></Icon>
                المقابلات
              </Link>
            </li>
            <li>
              <Link
                href="{{ url_for('worker_dashboard') }}"
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
              >
                <Icon
                  icon="heroicons:chat-bubble-left-right"
                  width="20"
                  height="20"
                  className="ml-2"
                ></Icon>
                المساعد الشخصي
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <main className="flex-1 p-4">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-teal-700 mb-6">
            لوحة تحكم العامل
          </h1>

          <!-- Stats -->
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-center">
                <div className="bg-teal-100 p-3 rounded-full ml-4">
                  <Icon
                    icon="heroicons:calendar"
                    width="24"
                    height="24"
                    className="text-teal-600"
                  ></Icon>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">المقابلات القادمة</p>
                  <p className="text-2xl font-bold text-teal-600">
                    {{ upcoming_interviews|default(0) }}
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
                  ></Icon>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">المقابلات المكتملة</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {{ completed_interviews|default(0) }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              إجراءات سريعة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="{{ url_for('worker_dashboard') }}"
                className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center"
              >
                <div className="bg-teal-100 p-3 rounded-full ml-4">
                  <Icon
                    icon="heroicons:calendar"
                    width="24"
                    height="24"
                    className="text-teal-600"
                  ></Icon>
                </div>
                <div>
                  <p className="font-semibold">عرض المقابلات</p>
                  <p className="text-sm text-gray-500">إدارة مواعيد المقابلات</p>
                </div>
              </Link>
              <Link
                href="{{ url_for('worker_page', worker_id=worker.id) }}"
                className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center"
              >
                <div className="bg-blue-100 p-3 rounded-full ml-4">
                  <Icon
                    icon="heroicons:user-circle"
                    width="24"
                    height="24"
                    className="text-blue-600"
                  ></Icon>
                </div>
                <div>
                  <p className="font-semibold">تحديث الملف الشخصي</p>
                  <p className="text-sm text-gray-500">تعديل بيانات الملف الشخصي</p>
                </div>
              </Link>
              <Link
                href="{{ url_for('worker_dashboard') }}"
                className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow flex items-center"
              >
                <div className="bg-purple-100 p-3 rounded-full ml-4">
                  <Icon
                    icon="heroicons:chat-bubble-left-right"
                    width="24"
                    height="24"
                    className="text-purple-600"
                  ></Icon>
                </div>
                <div>
                  <p className="font-semibold">المساعد الشخصي</p>
                  <p className="text-sm text-gray-500">الحصول على مساعدة ذكية</p>
                </div>
              </Link>
            </div>
          </div>

          <!-- Recent Activity -->
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              النشاط الأخير
            </h2>
            {% if recent_activities %}
            <div className="space-y-4">
              {% for activity in recent_activities %}
              <div className="bg-white border border-gray-200 p-4 rounded-lg">
                <div className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full ml-3">
                    <Icon
                      icon="{{ activity.icon }}"
                      width="20"
                      height="20"
                      className="text-gray-600"
                    ></Icon>
                  </div>
                  <div>
                    <p className="font-medium">{{ activity.title }}</p>
                    <p className="text-sm text-gray-500">
                      {{ activity.description }}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {{ activity.time }}
                    </p>
                  </div>
                </div>
              </div>
              {% endfor %}
            </div>
            {% else %}
            <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
              <p>لا يوجد نشاط حديث</p>
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Mobile Navigation -->
  <div
    className="md:hidden bg-white shadow-t-md border-t border-gray-200 fixed bottom-0 left-0 right-0"
  >
    <nav className="dashboard-nav">
      <ul className="nav-list">
        <li>
          <Link href="{{ url_for('index') }}"
            ><Icon
              icon="heroicons:home"
              width="20"
              height="20"
            ></Icon>الرئيسية</Link>
        </li>
        <li>
          <Link href="{{ url_for('worker_dashboard') }}" className="active"
            ><Icon
              icon="heroicons:rectangle-group"
              width="20"
              height="20"
            ></Icon>لوحة التحكم</Link>
        </li>
        <li>
          <Link href="{{ url_for('worker_page', worker_id=worker.id) }}"
            ><Icon
              icon="heroicons:user-circle"
              width="20"
              height="20"
            ></Icon>الملف الشخصي</Link>
        </li>
        <li>
          <Link href="{{ url_for('worker_dashboard') }}"
            ><Icon
              icon="heroicons:calendar"
              width="20"
              height="20"
            ></Icon>المقابلات</Link>
        </li>
        <li>
          <Link href="{{ url_for('worker_dashboard') }}"
            ><Icon
              icon="heroicons:chat-bubble-left-right"
              width="20"
              height="20"
            ></Icon>المساعد الشخصي</Link>
        </li>
        <li>
          <Link href="{{ url_for('worker_logout') }}"
            ><Icon
              icon="heroicons:arrow-left-on-rectangle"
              width="20"
              height="20"
            ></Icon>تسجيل الخروج</Link>
        </li>
      </ul>
    </nav>

     
  </div>
</div>
    </>
  );
};
