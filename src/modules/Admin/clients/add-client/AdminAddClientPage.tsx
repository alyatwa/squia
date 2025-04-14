import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminAddClientPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-md p-6 mb-8 text-white fade-in-up fade-in-up-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:person"
                width="32"
                height="32"
                className="ml-2"
              ></Icon>
              إضافة عميل جديد
            </h1>
            <p className="text-white/80">
              يمكنك من هنا إضافة عميل جديد إلى النظام.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/admin/clients"
              className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Icon
                icon="heroicons:arrow-left"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              العودة إلى قائمة العملاء
            </Link>
          </div>
        </div>
      </div>

      {/* نموذج إضافة عميل جديد */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-2">
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-dark flex items-center">
            <Icon
              icon="heroicons:user-circle"
              className="ml-2"
              width="24"
              height="24"
            ></Icon>
            معلومات العميل الجديد
          </h2>
        </div>

        <form method="POST" action="{{ url_for('admin_add_client') }}">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                اسم المستخدم <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                البريد الإلكتروني <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الاسم الكامل <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                رقم الهاتف
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                كلمة المرور <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
                autoComplete="new-password"
              />
            </div>
          </div>

          {/* معلومات الشركة */}
          <div className="mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-dark flex items-center">
              <Icon
                icon="heroicons:building-office"
                className="ml-2"
                width="24"
                height="24"
              ></Icon>
              معلومات الشركة
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 fade-in-up fade-in-up-3">
            <div>
              <label
                htmlFor="company_name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                اسم الشركة
              </label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label
                htmlFor="company_type"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                نوع الشركة
              </label>
              <select
                id="company_type"
                name="company_type"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">اختر نوع الشركة</option>
                <option value="مؤسسة فردية">مؤسسة فردية</option>
                <option value="شركة ذات مسؤولية محدودة">
                  شركة ذات مسؤولية محدودة
                </option>
                <option value="شركة مساهمة">شركة مساهمة</option>
                <option value="شركة تضامنية">شركة تضامنية</option>
                <option value="أخرى">أخرى</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="company_address"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                عنوان الشركة
              </label>
              <textarea
                id="company_address"
                name="company_address"
                rows={3}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="commercial_registration"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                <div className="flex items-center">
                  <Icon
                    icon="heroicons:document-text"
                    className="ml-1"
                    width="20"
                    height="20"
                  ></Icon>
                  السجل التجاري
                </div>
              </label>
              <div className="flex items-center space-x-2 space-x-reverse">
                <label className="w-full flex items-center justify-center px-4 py-2 bg-white text-primary-600 rounded-lg border border-primary-500 cursor-pointer hover:bg-primary-50 transition-colors">
                  <Icon
                    icon="heroicons:cloud-arrow-up"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  <span>ارفع السجل التجاري</span>
                  <input
                    type="file"
                    id="commercial_registration"
                    name="commercial_registration"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </label>
              </div>
              <p className="mt-1 text-sm text-gray-500">
                يمكنك رفع ملف بصيغة PDF أو صورة (JPG, JPEG, PNG)
              </p>
              <div id="file-name" className="mt-2 text-sm text-gray-700"></div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 space-x-reverse">
            <Link
              href="/admin/clients"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              إلغاء
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Icon
                icon="heroicons:check"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              إضافة العميل
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
