import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminPricingPage = () => {
  const pricing_data: any[] = [];
  return (
    <div className="max-w-7xl mx-auto">
      {/* ترحيب وملخص */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl shadow-md p-6 mb-8 text-white fade-in-up fade-in-up-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:money-with-wings"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              إدارة بيانات التسعير
            </h1>
            <p className="text-white/80">
              يمكنك من هنا إدارة بيانات التسعير للمناصب والجنسيات المختلفة.
            </p>
          </div>
          <Link
            href="/admin"
            className="inline-flex items-center px-4 py-2 bg-white text-teal-600 rounded-lg hover:bg-white/90 transition-colors"
          >
            <Icon
              icon="heroicons:arrow-right"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </div>

      {/* إضافة بيانات تسعير جديدة */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-2">
        <div className="flex items-center mb-6">
          <Icon
            icon="fluent-emoji:plus"
            className="ml-2 text-accent-600"
            width="24"
            height="24"
          ></Icon>
          <h2 className="text-xl font-bold text-gray-800">
            إضافة بيانات تسعير جديدة
          </h2>
        </div>

        <form
          method="POST"
          action="{{ url_for('admin_pricing_add') }}"
          className="space-y-6"
        >
          {/* CSRF Token */}

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* النشاط */}
            <div>
              <label
                htmlFor="activity"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                النشاط
              </label>
              <select
                id="activity"
                name="activity"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                required
              >
                <option value="">اختر النشاط</option>
                <option value="Restaurants, Cafes & Hotels">
                  المطاعم والمقاهي والفنادق
                </option>
                <option value="Construction, Maintenance & Technical Services">
                  البناء والصيانة والخدمات الفنية
                </option>
                <option value="Healthcare">الرعاية الصحية</option>
                <option value="Information Technology">
                  تكنولوجيا المعلومات
                </option>
                <option value="Sales, Purchasing & Marketing">
                  المبيعات والمشتريات والتسويق
                </option>
                <option value="Salons & Massage Services">
                  صالونات التجميل وخدمات المساج
                </option>
                <option value="مطاعم">مطاعم</option>
                <option value="نقل">نقل</option>
                <option value="أمن">أمن</option>
                <option value="نظافة">نظافة</option>
                <option value="General">عام</option>
              </select>
            </div>

            {/* المنصب */}
            <div>
              <label
                htmlFor="job_title"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                المنصب
              </label>
              <select
                id="job_title"
                name="job_title"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                disabled
                required
              >
                <option value="">اختر المنصب</option>
              </select>
              <p id="job_title_message" className="text-gray-500 text-sm mt-1">
                الرجاء اختيار النشاط أولاً
              </p>
            </div>

            {/* الجنسية */}
            <div>
              <label
                htmlFor="nationality"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الجنسية
              </label>
              <select
                id="nationality"
                name="nationality"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                disabled
                required
              >
                <option value="">اختر الجنسية</option>
              </select>
              <p
                id="nationality_message"
                className="text-gray-500 text-sm mt-1"
              >
                الرجاء اختيار المنصب أولاً
              </p>
            </div>

            {/* الحد الأدنى للراتب */}
            <div>
              <label
                htmlFor="salary_range_min"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الحد الأدنى للراتب (ريال)
              </label>
              <input
                type="number"
                id="salary_range_min"
                name="salary_range_min"
                min="0"
                step="0.01"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                required
              />
            </div>

            {/* الحد الأعلى للراتب */}
            <div>
              <label
                htmlFor="salary_range_max"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الحد الأعلى للراتب (ريال)
              </label>
              <input
                type="number"
                id="salary_range_max"
                name="salary_range_max"
                min="0"
                step="0.01"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                required
              />
            </div>

            {/* السعر */}
            <div>
              <label
                htmlFor="price"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                السعر (ريال)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                min="0"
                step="0.01"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 flex bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
            >
              <Icon
                icon="heroicons:plus"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              إضافة / تحديث
            </button>
          </div>
        </form>
      </div>

      {/* جدول بيانات التسعير مع خيارات الفلترة */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-3">
        <div className="flex items-center mb-6">
          <Icon
            icon="fluent-emoji:card-index"
            className="ml-2 text-accent-600"
            width="24"
            height="24"
          ></Icon>
          <h2 className="text-xl font-bold text-gray-800">
            بيانات التسعير الحالية
          </h2>
        </div>

        {/* خيارات الفلترة - الجديد */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
            <Icon
              icon="heroicons:funnel"
              className="ml-2 text-accent-600"
              width="20"
              height="20"
            ></Icon>
            خيارات الفلترة
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* فلترة حسب النشاط */}
            <div>
              <label
                htmlFor="filter_activity"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                النشاط
              </label>
              <select
                id="filter_activity"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              >
                <option value="">جميع الأنشطة</option>
                <option value="Restaurants, Cafes & Hotels" selected>
                  المطاعم والمقاهي والفنادق
                </option>
                <option value="Construction, Maintenance & Technical Services">
                  البناء والصيانة والخدمات الفنية
                </option>
                <option value="Healthcare">الرعاية الصحية</option>
                <option value="Information Technology">
                  تكنولوجيا المعلومات
                </option>
                <option value="Sales, Purchasing & Marketing">
                  المبيعات والمشتريات والتسويق
                </option>
                <option value="Salons & Massage Services">
                  صالونات التجميل وخدمات المساج
                </option>
              </select>
            </div>

            {/* فلترة حسب المنصب */}
            <div>
              <label
                htmlFor="filter_job_title"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                المنصب
              </label>
              <select
                id="filter_job_title"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              >
                <option value="">جميع المناصب</option>
              </select>
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
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              >
                <option value="">جميع الجنسيات</option>
                <option value="Filipino">فلبيني</option>
                <option value="Nepali">نيبالي</option>
                <option value="Indian">هندي</option>
                <option value="Bangladeshi">بنغلاديشي</option>
                <option value="Pakistani">باكستاني</option>
              </select>
            </div>

            {/* فلترة حسب نطاق الراتب */}
            <div>
              <label
                htmlFor="filter_salary_range"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                نطاق الراتب (ريال)
              </label>
              <div className="flex items-center space-x-2 space-x-reverse">
                <input
                  type="number"
                  id="filter_salary_min"
                  placeholder="الحد الأدنى"
                  className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  id="filter_salary_max"
                  placeholder="الحد الأعلى"
                  className="w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="filter_price_range"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              نطاق سعر نقل الكفالة (ريال):{" "}
              <span id="price_range_display">5000 - 7000</span>
            </label>
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-sm text-gray-600">5000</span>
              <input
                type="range"
                id="filter_price_range"
                min="5000"
                max="7000"
                step="100"
                value="5000"
                className="range-slider flex-grow"
              />
              <span className="text-sm text-gray-600">7000</span>
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
              className="px-4 py-2 bg-accent-600 flex text-white rounded-lg hover:bg-accent-700 transition-colors"
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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-right">#</th>
                <th className="px-4 py-3 text-right">النشاط</th>
                <th className="px-4 py-3 text-right">المنصب</th>
                <th className="px-4 py-3 text-right">الجنسية</th>
                <th className="px-4 py-3 text-right">نطاق الراتب (ريال)</th>
                <th className="px-4 py-3 text-right">السعر (ريال)</th>
                <th className="px-4 py-3 text-right">الإجراءات</th>
              </tr>
            </thead>
            <tbody id="pricing_table_body">
              {pricing_data.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 transition-colors pricing-row"
                  data-activity={item.activity}
                  data-job-title={item.job_title}
                  data-nationality={item.nationality}
                  data-salary-min={item.salary_range_min}
                  data-salary-max={item.salary_range_max}
                  data-price={item.price}
                >
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3">
                    {item.activity === "Restaurants, Cafes & Hotels" &&
                      "المطاعم والمقاهي والفنادق"}
                    {item.activity ===
                      "Construction, Maintenance & Technical Services" &&
                      "البناء والصيانة والخدمات الفنية"}
                    {item.activity === "Healthcare" && "الرعاية الصحية"}
                    {item.activity === "Information Technology" &&
                      "تكنولوجيا المعلومات"}
                    {item.activity === "Sales, Purchasing & Marketing" &&
                      "المبيعات والمشتريات والتسويق"}
                    {item.activity === "Salons & Massage Services" &&
                      "صالونات التجميل وخدمات المساج"}
                    {item.activity === "مطاعم" && "مطاعم"}
                    {item.activity === "نقل" && "نقل"}
                    {item.activity === "أمن" && "أمن"}
                    {item.activity === "نظافة" && "نظافة"}
                    {item.activity === "General" && "عام"}
                    {![
                      "Restaurants, Cafes & Hotels",
                      "Construction, Maintenance & Technical Services",
                      "Healthcare",
                      "Information Technology",
                      "Sales, Purchasing & Marketing",
                      "Salons & Massage Services",
                      "مطاعم",
                      "نقل",
                      "أمن",
                      "نظافة",
                      "General",
                    ].includes(item.activity) && item.activity}
                  </td>
                  <td className="px-4 py-3">{item.job_title}</td>
                  <td className="px-4 py-3">{item.nationality}</td>
                  <td className="px-4 py-3">
                    {item.salary_range_min} - {item.salary_range_max}
                  </td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3">
                    <form
                      method="POST"
                      action={`/admin_pricing_delete/${item.id}`}
                      className="inline"
                      onSubmit={() => confirm("هل أنت متأكد من حذف هذا السجل؟")}
                    >
                      <button
                        type="submit"
                        className="text-red-500 hover:text-red-700"
                      >
                        <Icon icon="heroicons:trash" width="20" height="20" />
                      </button>
                    </form>
                    <button
                      type="button"
                      className="text-blue-500 hover:text-blue-700 mr-2 edit-pricing"
                      data-id={item.id}
                      data-activity={item.activity}
                      data-job-title={item.job_title}
                      data-nationality={item.nationality}
                      data-salary-min={item.salary_range_min}
                      data-salary-max={item.salary_range_max}
                      data-price={item.price}
                    >
                      <Icon icon="heroicons:pencil" width="20" height="20" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* معلومات إضافية */}
      <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8 fade-in-up fade-in-up-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 mt-1">
            <Icon
              icon="heroicons:information-circle"
              className="text-teal-500"
              width="24"
              height="24"
            ></Icon>
          </div>
          <div className="mr-3">
            <h3 className="text-lg font-medium text-teal-800 mb-2">
              معلومات هامة عن بيانات التسعير
            </h3>
            <ul className="list-disc list-inside text-teal-700 space-y-2">
              <li>
                يتم استخدام بيانات التسعير لملء حقول الراتب والسعر تلقائيًا عند
                إنشاء طلب جديد.
              </li>
              <li>
                إذا قمت بإدخال منصب وجنسية موجودين بالفعل، سيتم تحديث بيانات
                التسعير الحالية.
              </li>
              <li>
                يمكنك إضافة مناصب وجنسيات جديدة في أي وقت لتوسيع قاعدة البيانات.
              </li>
              <li>تأكد من تحديث البيانات بانتظام لتعكس أسعار السوق الحالية.</li>
              <li>
                استخدم خيارات الفلترة للعثور بسرعة على البيانات التي تبحث عنها.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
