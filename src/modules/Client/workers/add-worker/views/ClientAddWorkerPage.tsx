import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const ClientAddWorkerPage = () => {
  const nationalities: any[] = [];
  return (
    <>
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-dark mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:construction-worker"
                width="32"
                height="32"
                className="ml-2"
              ></Icon>
              إضافة عامل جديد
            </h1>
            <p className="text-gray-600">
              يمكنك من هنا إضافة عامل جديد إلى المنصة.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              href="/client/workers"
              className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              <Icon
                icon="heroicons:arrow-left"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              العودة إلى قائمة العمال
            </Link>
          </div>
        </div>
      </div>

      {/* نموذج إضافة عامل جديد */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="mb-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-dark flex items-center">
            <Icon
              icon="heroicons:user-circle"
              className="ml-2"
              width="24"
              height="24"
            ></Icon>
            معلومات العامل الجديد
          </h2>
          <p className="text-gray-600 mt-1">
            يرجى ملء جميع الحقول المطلوبة المشار إليها بعلامة (*)
          </p>
        </div>

        <form method="POST" action="{{ url_for('client_add_worker') }}">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* معلومات أساسية */}
            <div className="md:col-span-2 form-section">
              <div className="form-section-header">
                <h3 className="text-lg font-bold text-dark flex items-center">
                  <Icon
                    icon="heroicons:identification"
                    className="ml-2"
                    width="24"
                    height="24"
                  ></Icon>
                  معلومات أساسية
                </h3>
              </div>
              <div className="form-section-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field required-field">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      الاسم
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      required
                    />
                  </div>

                  <div className="form-field required-field">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      dir="ltr"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      required
                    />
                  </div>

                  <div className="form-field required-field">
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      dir="ltr"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      required
                      placeholder="05xxxxxxxx"
                    />
                  </div>

                  <div className="form-field required-field">
                    <label
                      htmlFor="nationality"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      الجنسية
                    </label>
                    <select
                      id="nationality"
                      name="nationality"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      required
                    >
                      <option value="">اختر الجنسية</option>
                      {nationalities.map((nationality, index) => (
                        <option key={index} value={nationality}>
                          {nationality}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="gender"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      الجنس
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="">اختر الجنس</option>
                      <option value="ذكر">ذكر</option>
                      <option value="أنثى">أنثى</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="date_of_birth"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      تاريخ الميلاد
                    </label>
                    <input
                      type="date"
                      id="date_of_birth"
                      name="date_of_birth"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* معلومات الإقامة */}
            <div className="md:col-span-2 form-section">
              <div className="form-section-header">
                <h3 className="text-lg font-bold text-dark flex items-center">
                  <Icon
                    icon="heroicons:document-text"
                    className="ml-2"
                    width="24"
                    height="24"
                  ></Icon>
                  معلومات الإقامة
                </h3>
              </div>
              <div className="form-section-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field file-upload md:col-span-2">
                    <label
                      htmlFor="iqama_image"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      صورة الإقامة
                    </label>
                    <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-accent-500 transition-colors text-center">
                      <input
                        type="file"
                        id="iqama_image"
                        name="iqama_image"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                      />
                      <label htmlFor="iqama_image" className="cursor-pointer">
                        <Icon
                          icon="heroicons:cloud-arrow-up"
                          className="text-gray-400 mb-2"
                          width="48"
                          height="48"
                        ></Icon>
                        <div className="text-accent-600 font-medium">
                          اضغط لاختيار ملف أو اسحب الملف هنا
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          الصيغ المدعومة: JPG، JPEG، PNG
                        </p>
                        <p className="text-sm text-blue-500 mt-1">
                          سيتم استخراج المعلومات من صورة الإقامة تلقائياً
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="iqama_number"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      رقم الإقامة
                    </label>
                    <input
                      type="text"
                      id="iqama_number"
                      name="iqama_number"
                      dir="ltr"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="expiry_date"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      تاريخ انتهاء الإقامة
                    </label>
                    <input
                      type="date"
                      id="expiry_date"
                      name="expiry_date"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="residency_status"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      حالة الإقامة
                    </label>
                    <select
                      id="residency_status"
                      name="residency_status"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="valid">سارية</option>
                      <option value="expired">منتهية</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label
                      htmlFor="residency_months"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      عدد الأشهر (المتبقية أو المنتهية)
                    </label>
                    <input
                      type="number"
                      id="residency_months"
                      name="residency_months"
                      min="0"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-gray-100"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      يتم حساب هذه القيمة تلقائياً بناءً على تاريخ انتهاء
                      الإقامة
                    </p>
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="transfer_count"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      عدد مرات النقل
                    </label>
                    <input
                      type="number"
                      id="transfer_count"
                      name="transfer_count"
                      min="0"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* معلومات العمل */}
            <div className="md:col-span-2 form-section">
              <div className="form-section-header">
                <h3 className="text-lg font-bold text-dark flex items-center">
                  <Icon
                    icon="heroicons:briefcase"
                    className="ml-2"
                    width="24"
                    height="24"
                  ></Icon>
                  معلومات العمل
                </h3>
              </div>
              <div className="form-section-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field required-field">
                    <label
                      htmlFor="activity"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      النشاط
                    </label>
                    <input
                      type="text"
                      id="activity"
                      name="activity"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      required
                      list="activity-suggestions"
                    />
                    <datalist id="activity-suggestions">
                      {/* Sample activity suggestions, replace with your actual data */}
                      <option value="كهرباء">كهرباء</option>
                      <option value="سباكة">سباكة</option>
                      <option value="دهان">دهان</option>
                      <option value="بناء">بناء</option>
                      <option value="نجارة">نجارة</option>
                    </datalist>
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="current_city"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      المدينة الحالية
                    </label>
                    <input
                      type="text"
                      id="current_city"
                      name="current_city"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="current_workplace"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      مكان العمل الحالي
                    </label>
                    <input
                      type="text"
                      id="current_workplace"
                      name="current_workplace"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="accommodation_type"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      نوع السكن
                    </label>
                    <select
                      id="accommodation_type"
                      name="accommodation_type"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    >
                      <option value="">اختر نوع السكن</option>
                      <option value="سكن الشركة">سكن الشركة</option>
                      <option value="سكن خارجي">سكن خارجي</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="experience"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      الخبرة (بالسنوات)
                    </label>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      min="0"
                      step="0.5"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>

                  <div className="form-field required-field">
                    <label
                      htmlFor="position"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      المنصب/الوظيفة
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                      required
                    />
                  </div>

                  <div className="form-field md:col-span-2">
                    <label
                      htmlFor="skills"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      المهارات
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      rows={4}
                      className="w-full px-4 py-3 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* معلومات مالية */}
            <div className="md:col-span-2 form-section">
              <div className="form-section-header">
                <h3 className="text-lg font-bold text-dark flex items-center">
                  <Icon
                    icon="heroicons:banknotes"
                    className="ml-2"
                    width="24"
                    height="24"
                  ></Icon>
                  معلومات مالية
                </h3>
              </div>
              <div className="form-section-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field md:col-span-2">
                    <label
                      htmlFor="iban"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      رقم الآيبان
                    </label>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <input
                        type="text"
                        id="iban"
                        name="iban"
                        dir="ltr"
                        className="w-full px-4 py-4 text-xl rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 bg-white"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        مثال: SA0380000000608010167519
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* معلومات إضافية */}
            <div className="md:col-span-2 form-section">
              <div className="form-section-header">
                <h3 className="text-lg font-bold text-dark flex items-center">
                  <Icon
                    icon="heroicons:information-circle"
                    className="ml-2"
                    width="24"
                    height="24"
                  ></Icon>
                  معلومات إضافية
                </h3>
              </div>
              <div className="form-section-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-field">
                    <label
                      htmlFor="referral_source"
                      className="block text-gray-700 text-sm font-medium mb-2"
                    >
                      مصدر التوصية
                    </label>
                    <input
                      type="text"
                      id="referral_source"
                      name="referral_source"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* الملفات والصور */}
            <div className="md:col-span-2 form-section">
              <div className="form-section-header">
                <h3 className="text-lg font-bold text-dark flex items-center">
                  <Icon
                    icon="heroicons:photo"
                    className="ml-2"
                    width="24"
                    height="24"
                  ></Icon>
                  الملفات والصور
                </h3>
              </div>
              <div className="form-section-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field file-upload">
                    <label
                      htmlFor="profile_picture"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      صورة البروفايل الشخصية
                    </label>
                    <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-accent-500 transition-colors text-center">
                      <input
                        type="file"
                        id="profile_picture"
                        name="profile_picture"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                      />
                      <label
                        htmlFor="profile_picture"
                        className="cursor-pointer"
                      >
                        <Icon
                          icon="heroicons:user-circle"
                          className="text-gray-400 mb-2"
                          width="36"
                          height="36"
                        ></Icon>
                        <div className="text-accent-600 font-medium">
                          اضغط لاختيار صورة
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          الصيغ المدعومة: JPG، JPEG، PNG
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="form-field file-upload">
                    <label
                      htmlFor="cv_file"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      السيرة الذاتية
                    </label>
                    <div className="bg-gray-50 p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-accent-500 transition-colors text-center">
                      <input
                        type="file"
                        id="cv_file"
                        name="cv_file"
                        accept=".pdf"
                        className="hidden"
                      />
                      <label htmlFor="cv_file" className="cursor-pointer">
                        <Icon
                          icon="heroicons:document-text"
                          className="text-gray-400 mb-2"
                          width="36"
                          height="36"
                        ></Icon>
                        <div className="text-accent-600 font-medium">
                          اضغط لاختيار ملف
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          الصيغ المدعومة: PDF
                        </p>
                      </label>
                    </div>
                  </div>

                  <div className="form-field file-upload md:col-span-2">
                    <label
                      htmlFor="portfolio_files"
                      className="block text-gray-700 text-base font-medium mb-2"
                    >
                      صور وفيديوهات الأعمال السابقة
                    </label>
                    <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300 hover:border-accent-500 transition-colors text-center">
                      <input
                        type="file"
                        id="portfolio_files"
                        name="portfolio_files"
                        multiple
                        accept=".jpg,.jpeg,.png,.mp4"
                        className="hidden"
                      />
                      <label
                        htmlFor="portfolio_files"
                        className="cursor-pointer"
                      >
                        <Icon
                          icon="heroicons:photo"
                          className="text-gray-400 mb-2"
                          width="36"
                          height="36"
                        ></Icon>
                        <div className="text-accent-600 font-medium">
                          اضغط لاختيار ملفات متعددة
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          الصيغ المدعومة: JPG، JPEG، PNG، MP4. يمكنك اختيار عدة
                          ملفات.
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-2 space-x-reverse">
            <Link
              href="/client/workers"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              إلغاء
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
            >
              <Icon
                icon="heroicons:check"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              إضافة العامل
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
