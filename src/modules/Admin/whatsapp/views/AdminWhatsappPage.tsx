import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminWhatsappPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl shadow-md p-6 mb-8 text-white fade-in-up fade-in-up-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:mobile-phone"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              إدارة واتساب 📲
            </h1>
            <p className="text-white/80">
              اختر نوع إدارة واتساب الذي تريد الوصول إليه.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <Link
              href="{{ url_for('admin_message_templates') }}"
              className="inline-flex items-center px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Icon
                icon="fluent-emoji:envelope"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              قوالب الرسائل
            </Link>
            <Link
              href="/admin"
              className="inline-flex items-center px-4 py-2 bg-white text-green-600 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Icon
                icon="heroicons:arrow-right"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              العودة للوحة التحكم
            </Link>
          </div>
        </div>
      </div>

      {/* بطاقات الاختيار */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* إدارة واتساب العملاء */}
        <Link href="{{ url_for('admin_whatsapp_clients') }}" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden fade-in-up fade-in-up-1 card-hover h-full">
            <div className="bg-gradient-to-l from-blue-600 to-blue-500 p-4 text-white">
              <h2 className="text-xl font-bold flex items-center">
                <Icon
                  icon="fluent-emoji:person"
                  className="ml-2"
                  width="28"
                  height="28"
                ></Icon>
                إدارة واتساب العملاء
              </h2>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Icon
                    icon="fluent-emoji:mobile-phone"
                    className="text-blue-600"
                    width="32"
                    height="32"
                  ></Icon>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    قسم الطلبات
                  </h3>
                  <p className="text-gray-600">
                    إدارة واتساب للتواصل مع العملاء وإرسال الرسائل التلقائية
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-blue-500 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  إعداد رقم واتساب العملاء
                </li>
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-blue-500 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  إرسال رسائل للعملاء
                </li>
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-blue-500 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  عرض سجل رسائل العملاء
                </li>
              </ul>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Icon
                    icon="heroicons:arrow-left"
                    className="mr-1"
                    width="20"
                    height="20"
                  ></Icon>
                  الدخول إلى إدارة واتساب العملاء
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* إدارة واتساب العمال */}
        <Link href="{{ url_for('admin_whatsapp_workers') }}" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden fade-in-up fade-in-up-2 card-hover h-full">
            <div className="bg-gradient-to-l from-green-600 to-green-500 p-4 text-white">
              <h2
                className="text-2xl font-bold flex items-center"
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3);" }}
              >
                <Icon
                  icon="fluent-emoji:construction-worker"
                  className="ml-2"
                  width="32"
                  height="32"
                ></Icon>
                إدارة واتساب العمال
              </h2>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Icon
                    icon="fluent-emoji:mobile-phone"
                    className="text-green-600"
                    width="32"
                    height="32"
                  ></Icon>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-green-800">
                    قسم العمال
                  </h3>
                  <p className="text-gray-600">
                    إدارة واتساب للتواصل مع العمال وإرسال الرسائل الجماعية
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-green-600 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  إعداد رقم واتساب العمال
                </li>
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-green-600 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  إرسال رسائل للعمال
                </li>
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-green-600 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  إرسال رسائل جماعية للعمال
                </li>
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-green-600 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  عرض سجل رسائل العمال
                </li>
              </ul>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center px-4 py-2 bg-green-400 text-green-800 rounded-lg hover:bg-green-500 hover:text-white transition-colors shadow-md font-bold">
                  <Icon
                    icon="heroicons:arrow-left"
                    className="mr-1"
                    width="20"
                    height="20"
                  ></Icon>
                  الدخول إلى إدارة واتساب العمال
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* إدارة قوالب الرسائل */}
        <Link href="{{ url_for('admin_message_templates') }}" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden fade-in-up fade-in-up-1 card-hover h-full">
            <div className="bg-gradient-to-l from-purple-600 to-purple-500 p-4 text-white">
              <h2 className="text-xl font-bold flex items-center">
                <Icon
                  icon="fluent-emoji:envelope"
                  className="ml-2"
                  width="28"
                  height="28"
                ></Icon>
                إدارة قوالب الرسائل
              </h2>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <Icon
                    icon="fluent-emoji:envelope"
                    className="text-purple-600"
                    width="32"
                    height="32"
                  ></Icon>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    قوالب الرسائل
                  </h3>
                  <p className="text-gray-600">
                    إدارة قوالب الرسائل المستخدمة في إشعارات واتساب
                  </p>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-purple-500 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  إضافة وتعديل قوالب الرسائل
                </li>
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-purple-500 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  دعم اللغات المتعددة
                </li>
                <li className="flex items-center text-gray-700">
                  <Icon
                    icon="heroicons:check-circle"
                    className="text-purple-500 ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  تخصيص محتوى الرسائل
                </li>
              </ul>

              <div className="mt-6 text-center">
                <span className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Icon
                    icon="heroicons:arrow-left"
                    className="mr-1"
                    width="20"
                    height="20"
                  ></Icon>
                  الدخول إلى إدارة قوالب الرسائل
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
