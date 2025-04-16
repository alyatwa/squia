import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = () => {
  return (
    <footer className="bg-teal-dark text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3  gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-0.5 after:bg-coral">
              منصة تعيين
            </h3>
            <p className="text-gray-300 mb-4">
              منصة متخصصة في ربط العملاء بالعمال المهرة في مختلف المجالات. نسعى
              لتقديم خدمة متميزة وتجربة سلسة لجميع المستخدمين.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-0.5 after:bg-coral">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Icon
                    icon="heroicons:chevron-left"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="/auth/login"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Icon
                    icon="heroicons:chevron-left"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  تسجيل الدخول
                </a>
              </li>
              <li>
                <a
                  href="/auth/register"
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Icon
                    icon="heroicons:chevron-left"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  تسجيل حساب جديد
                </a>
              </li>
              <li>
                <a
                  href="/admin_dashboard"
                  className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors flex items-center mt-2"
                >
                  <Icon
                    icon="heroicons:rectangle-group"
                    className="ml-1"
                    width="16"
                    height="16"
                  ></Icon>
                  لوحة التحكم
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-12 after:h-0.5 after:bg-coral">
              تواصل معنا
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Icon
                  icon="heroicons:envelope"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                info@taeen.com
              </li>
              <li className="flex items-center">
                <Icon
                  icon="heroicons:phone"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                +966 12 345 6789
              </li>
              <li className="flex items-center">
                <Icon
                  icon="heroicons:map-pin"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
            <div className="mt-4 flex space-x-4 gap-2 space-x-reverse">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon icon="logos:facebook" width="24" height="24"></Icon>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon icon="logos:twitter" width="24" height="24"></Icon>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon icon="logos:instagram-icon" width="24" height="24"></Icon>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Icon icon="logos:linkedin-icon" width="24" height="24"></Icon>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            © 2025 منصة تعيين. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
