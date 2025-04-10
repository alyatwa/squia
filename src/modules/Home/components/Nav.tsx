import { Icon } from "@iconify/react";

export const Nav = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-dark to-teal text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2 space-x-reverse">
            <Icon icon="fluent-emoji:handshake" width="32" height="32"></Icon>
            <span className="text-xl font-bold">منصة تعيين</span>
          </a>

          <div className="flex items-center space-x-4 space-x-reverse">
            <div className=" flex items-center mr-4 px-3 py-1 bg-white/10 rounded-md">
              <a
                href="#"
                className="text-white text-sm font-semibold px-2 py-1 rounded transition-colors duration-300 ease-in-out active"
                data-lang="ar"
              >
                عربي
              </a>
              <span className="lang-divider">|</span>
              <a
                href="#"
                className="text-white text-sm font-semibold px-2 py-1 rounded transition-colors duration-300 ease-in-out"
                data-lang="en"
                id="en-link"
              >
                EN
              </a>
            </div>

            <a
              href="/"
              className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors flex items-center"
            >
              <Icon
                icon="heroicons:home"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              الرئيسية
            </a>

            <div className="relative group">
              <button className="flex items-center px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
                <Icon
                  icon="heroicons:arrow-right-on-rectangle"
                  className="ml-1"
                  width="20"
                  height="20"
                ></Icon>
                تسجيل الدخول
                <Icon
                  icon="heroicons:chevron-down"
                  className="mr-1"
                  width="16"
                  height="16"
                ></Icon>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                <a
                  href="/login"
                  className="block px-4 py-2 text-dark hover:bg-gray-100"
                >
                  تسجيل دخول العميل
                </a>
                <a
                  href="/worker_login"
                  className="block px-4 py-2 text-dark hover:bg-gray-100"
                >
                  تسجيل دخول العامل
                </a>
                <a
                  href="/admin_login"
                  className="block px-4 py-2 text-dark hover:bg-gray-100"
                >
                  تسجيل دخول المدير
                </a>
                <div className="border-t border-gray-100"></div>
                <a
                  href="/register"
                  className="block px-4 py-2 text-dark hover:bg-gray-100"
                >
                  تسجيل حساب جديد
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
