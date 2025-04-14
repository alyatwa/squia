import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const ClientWorkersPage = () => {
  const workers = [
    {
      name: "محمد علي",
      nationality: "مصري",
      skills: "طبخ, تنظيف",
      experience: 5,
      experience_display: "5 سنوات",
      residency_status: "valid",
      residency_months: 6,
      profile_image: "default-profile.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">إدارة العمال</h1>
        <p className="text-gray-600">عرض وإدارة حسابات العمال.</p>
      </div>

      {/* قائمة العمال */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">قائمة العمال</h2>
          <Link
            href="/client/workers/add-worker"
            className="bg-teal text-white px-4 py-2 rounded-md hover:bg-teal-dark transition-colors flex items-center"
          >
            <Icon
              icon="heroicons:plus"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            إضافة عامل جديد
          </Link>
        </div>

        {/* خيارات البحث والفلترة */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <Icon
              icon="heroicons:funnel"
              className="ml-2 text-teal-600"
              width="20"
              height="20"
            ></Icon>
            خيارات البحث والفلترة
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* بحث بالاسم */}
            <div>
              <label
                htmlFor="search_name"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الاسم
              </label>
              <input
                type="text"
                id="search_name"
                placeholder="ابحث بالاسم"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>

            {/* فلترة حسب الجنسية */}
            <div>
              <label
                htmlFor="filter_nationality"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الجنسية
              </label>
              <select
                id="filter_nationality"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">جميع الجنسيات</option>
                <option value="مصري">مصري</option>
                <option value="سعودي">سعودي</option>
                <option value="باكستاني">باكستاني</option>
                <option value="هندي">هندي</option>
                <option value="فلبيني">فلبيني</option>
                <option value="نيبالي">نيبالي</option>
                <option value="بنغلاديشي">بنغلاديشي</option>
              </select>
            </div>

            {/* فلترة حسب حالة الإقامة */}
            <div>
              <label
                htmlFor="filter_residency"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                حالة الإقامة
              </label>
              <select
                id="filter_residency"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">الكل</option>
                <option value="valid">سارية</option>
                <option value="expired">منتهية</option>
              </select>
            </div>

            {/* فلترة حسب المهنة */}
            <div>
              <label
                htmlFor="filter_profession"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                المهنة
              </label>
              <select
                id="filter_profession"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="">جميع المهن</option>
                <option value="طبخ">طبخ</option>
                <option value="تنظيف">تنظيف</option>
                <option value="برمجة">برمجة</option>
                <option value="تصميم">تصميم</option>
                <option value="كهرباء">كهرباء</option>
                <option value="سباكة">سباكة</option>
                <option value="تمريض">تمريض</option>
                <option value="رعاية صحية">رعاية صحية</option>
                <option value="قيادة">قيادة</option>
                <option value="توصيل">توصيل</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-4">
            <button
              id="reset_filters"
              className="px-4 py-2 flex bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors mr-2"
            >
              <Icon
                icon="heroicons:x-mark"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              إعادة تعيين
            </button>
            <button
              id="apply_filters"
              className="px-4 py-2 flex bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
            >
              <Icon
                icon="heroicons:funnel"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              تطبيق الفلترة
            </button>
          </div>
        </div>

        {workers.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  الاسم
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  الجنسية
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  المهارات
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  الخبرة
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  حالة الإقامة
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody
              className="bg-white divide-y divide-gray-200"
              id="workers_table_body"
            >
              {workers.map((worker, index) => (
                <tr
                  key={index}
                  className="worker-row"
                  data-name={worker.name}
                  data-nationality={worker.nationality}
                  data-skills={worker.skills}
                  data-residency={worker.residency_status}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          src={worker.profile_image}
                          className="h-10 w-10 rounded-full profile-image"
                          alt={worker.name}
                        />
                      </div>
                      <div className="mr-4">
                        <div className="text-sm font-medium text-gray-900">
                          {worker.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {worker.nationality}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{worker.skills}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {worker.experience_display ||
                        `${worker.experience} سنوات`}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {worker.residency_status === "expired" ? (
                      <div>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          منتهية
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          منذ {worker.residency_months} أشهر
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          سارية
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          متبقي {worker.residency_months} أشهر
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <Link
                      href={`/client/workers/${index}`}
                      className="text-teal hover:underline ml-2"
                    >
                      عرض
                    </Link>
                    <Link
                      href={`/client/workers/edit/${index}`}
                      className="text-yellow-600 hover:underline ml-2"
                    >
                      تعديل
                    </Link>
                    <Link
                      href={`/client/workers/delete/${index}`}
                      className="text-red-600 hover:underline"
                    >
                      حذف
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600 text-center py-4">لا يوجد عمال مسجلين</p>
        )}
      </div>
    </div>
  );
};
