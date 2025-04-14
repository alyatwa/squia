import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function WorkersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const worker = {
    display_name: "محمد أحمد",
    nationality: "سعودي",
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md hidden md:block">
          <div className="p-4">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-2">
                <Icon
                  icon="heroicons:user"
                  width="40"
                  height="40"
                  className="text-teal-600"
                />
              </div>
              <h2 className="font-bold">{worker.display_name}</h2>
              <p className="text-sm text-gray-500">{worker.nationality}</p>
            </div>

            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/worker"
                    className="flex items-center p-2 rounded-lg bg-teal-50 text-teal-700"
                  >
                    <Icon
                      icon="heroicons:rectangle-group"
                      width="20"
                      height="20"
                      className="ml-2"
                    />
                    لوحة التحكم
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/worker/profile`}
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Icon
                      icon="heroicons:user-circle"
                      width="20"
                      height="20"
                      className="ml-2"
                    />
                    الملف الشخصي
                  </Link>
                </li>
                <li>
                  <Link
                    href="/worker/interviews"
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Icon
                      icon="heroicons:calendar"
                      width="20"
                      height="20"
                      className="ml-2"
                    />
                    المقابلات
                  </Link>
                </li>
                <li>
                  <Link
                    href="/worker/assistant"
                    className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Icon
                      icon="heroicons:chat-bubble-left-right"
                      width="20"
                      height="20"
                      className="ml-2"
                    />
                    المساعد الشخصي
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white shadow-t-md border-t border-gray-200 fixed bottom-0 left-0 right-0">
        <nav className="dashboard-nav">
          <ul className="nav-list">
            <li>
              <Link href="/">
                <Icon icon="heroicons:home" width="20" height="20" />
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/worker/dashboard" className="active">
                <Icon icon="heroicons:rectangle-group" width="20" height="20" />
                لوحة التحكم
              </Link>
            </li>
            <li>
              <Link href={`/worker/profile/${"123"}`}>
                <Icon icon="heroicons:user-circle" width="20" height="20" />
                الملف الشخصي
              </Link>
            </li>
            <li>
              <Link href="/worker/interviews">
                <Icon icon="heroicons:calendar" width="20" height="20" />
                المقابلات
              </Link>
            </li>
            <li>
              <Link href="/worker/assistant">
                <Icon
                  icon="heroicons:chat-bubble-left-right"
                  width="20"
                  height="20"
                />
                المساعد الشخصي
              </Link>
            </li>
            <li>
              <Link href="/worker/logout">
                <Icon
                  icon="heroicons:arrow-left-on-rectangle"
                  width="20"
                  height="20"
                />
                تسجيل الخروج
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
