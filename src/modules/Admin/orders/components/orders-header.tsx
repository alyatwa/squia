import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminOrdersHeader = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-md p-6 mb-8 text-white fade-in-up fade-in-up-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:package"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              إدارة الطلبات
            </h1>
            <p className="text-white/80">
              يمكنك من هنا إدارة الطلبات وعرض بياناتهم وتعديلها وحذفها.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2 space-x-reverse">
            <a
              href="/contract-template"
              className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors ml-2"
            >
              <Icon
                icon="heroicons:document-text"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              تعديل قالب العقد
            </a>
            <Link
              href="/admin/add-order"
              className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Icon
                icon="heroicons:plus"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              إضافة طلب جديد
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
