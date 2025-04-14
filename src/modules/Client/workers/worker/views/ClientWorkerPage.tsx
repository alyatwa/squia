"use client";
import { Button } from "@/components/ui";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const ClientWorkerPage = () => {
  const worker = {
    name: "محمد العلي",
    nationality: "سعودي",
    status: "نشط",
    profile_image: "default-profile.jpg",
    gender: "ذكر",
    date_of_birth: "1990-01-01",
    phone: "123456789",
    email: "use@gmail.com",
    address: "الرياض, السعودية",
    activity: "تكنولوجيا المعلومات",
    position: "مهندس برمجيات",
    experience_display: "5 سنوات",
    current_city: "الرياض",
    current_workplace: "شركة التقنية",
    iqama_number: "123456789",
    expiry_date: "2024-12-31",
    transfer_count: 2,
    transfer_price: 2000,
    iban: "SA1234567890123456789012",
    expected_salary: 6000,
    experience: 5,
    current_salary: 5000,
    referral_source: "موقع التوظيف",
    skills: ["JavaScript", "React", "Node.js"],
    created_at: new Date("2023-01-01"),
    updated_at: new Date("2023-06-01"),
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            تفاصيل العامل
          </h1>
          <p className="text-gray-600">عرض معلومات العامل بالتفصيل.</p>
        </div>

        {/* بطاقة تفاصيل العامل */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden relative group">
                  <img
                    data-src="{{ url_for('static', filename='images/' + worker.profile_image) if worker.profile_image and worker.profile_image != 'default-profile.jpg' else url_for('static', filename='images/default-profile.jpg') }}"
                    alt={worker.name}
                    className="w-full h-full object-cover profile-image"
                    id="profile-image"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      id="change-photo-btn"
                      className="text-white bg-teal-600 hover:bg-teal-700 px-3 py-1 rounded-md text-sm"
                    >
                      تغيير الصورة
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {worker.name}
                </h2>
                <p className="text-gray-600">{worker.nationality}</p>
                <p className="text-gray-600">{worker.status}</p>
              </div>
              <div className="mt-6 flex justify-center space-x-2 ltr:space-x-reverse">
                <Link
                  href="/client/edit_worker/worker.id"
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                >
                  تعديل
                </Link>
                <Button
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                  onClick={(e) => {
                    if (!confirm("هل أنت متأكد من رغبتك في حذف هذا العامل؟"))
                      e.preventDefault();
                  }}
                >
                  حذف
                </Button>
              </div>

              {/* نموذج تغيير الصورة (مخفي) */}
              <div id="photo-upload-form" className="hidden mt-4">
                <form
                  action="/client/update_worker_photo"
                  method="POST"
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <div className="mb-3">
                    <input
                      type="file"
                      id="profile_picture"
                      name="profile_picture"
                      accept=".jpg,.jpeg,.png"
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="bg-teal-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      حفظ
                    </button>
                    <button
                      type="button"
                      id="delete-photo-btn"
                      className="bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      حذف الصورة
                    </button>
                    <button
                      type="button"
                      id="cancel-upload-btn"
                      className="bg-gray-500 text-white px-3 py-1 rounded-md text-sm"
                    >
                      إلغاء
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:w-2/3 md:pr-8">
              {/* معلومات العامل في شكل بطاقات */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* المعلومات الشخصية */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Icon
                      icon="heroicons:identification"
                      className="ml-2"
                      width="20"
                      height="20"
                    ></Icon>
                    المعلومات الشخصية
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">البريد الإلكتروني:</span>
                      <span className="text-gray-800">{worker.email}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">رقم الهاتف:</span>
                      <span className="text-gray-800">{worker.phone}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">العنوان:</span>
                      <span className="text-gray-800">{worker.address}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">الجنس:</span>
                      <span className="text-gray-800">{worker.gender}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">تاريخ الميلاد:</span>
                      <span className="text-gray-800">
                        {worker.date_of_birth}
                      </span>
                    </div>
                  </div>
                </div>

                {/* معلومات العمل */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Icon
                      icon="heroicons:briefcase"
                      className="ml-2"
                      width="20"
                      height="20"
                    ></Icon>
                    معلومات العمل
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">النشاط:</span>
                      <span className="text-gray-800">{worker.activity}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">المنصب/الوظيفة:</span>
                      <span className="text-gray-800">{worker.position}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">الخبرة:</span>
                      <span className="text-gray-800">
                        {worker.experience_display ||
                          worker.experience + " سنوات"}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">المدينة الحالية:</span>
                      <span className="text-gray-800">
                        {worker.current_city}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">مكان العمل الحالي:</span>
                      <span className="text-gray-800">
                        {worker.current_workplace}
                      </span>
                    </div>
                  </div>
                </div>

                {/* معلومات الإقامة */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Icon
                      icon="heroicons:document-text"
                      className="ml-2"
                      width="20"
                      height="20"
                    ></Icon>
                    معلومات الإقامة
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">رقم الإقامة:</span>
                      <span className="text-gray-800">
                        {worker.iqama_number}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">
                        تاريخ انتهاء الإقامة:
                      </span>
                      <span className="text-gray-800">
                        {worker.expiry_date}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">عدد مرات النقل:</span>
                      <span className="text-gray-800">
                        {worker.transfer_count}
                      </span>
                    </div>
                  </div>
                </div>

                {/* معلومات مالية */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Icon
                      icon="heroicons:banknotes"
                      className="ml-2"
                      width="20"
                      height="20"
                    ></Icon>
                    معلومات مالية
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">الراتب الحالي:</span>
                      <span className="text-gray-800">
                        {worker.current_salary} ريال
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">الراتب المتوقع:</span>
                      <span className="text-gray-800">
                        {worker.expected_salary} ريال
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">سعر نقل الكفالة:</span>
                      <span className="text-gray-800">
                        {worker.transfer_price} ريال
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">رقم الآيبان:</span>
                      <span className="text-gray-800 font-mono">
                        {worker.iban}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* المهارات */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Icon
                    icon="heroicons:sparkles"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  المهارات
                </h3>
                <div className="flex flex-wrap">
                  {worker.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-teal-100 text-teal-800 text-sm font-medium px-3 py-1 rounded-full ml-2 mb-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* معلومات النظام */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <Icon
                    icon="heroicons:information-circle"
                    className="ml-2"
                    width="20"
                    height="20"
                  ></Icon>
                  معلومات النظام
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-gray-600">تاريخ التسجيل:</span>
                    <span className="text-gray-800">
                      {worker.created_at.toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">آخر تحديث:</span>
                    <span className="text-gray-800">
                      {worker.updated_at.toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">الحالة:</span>
                    <span className="text-gray-800">{worker.status}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">مصدر التوصية:</span>
                    <span className="text-gray-800">
                      {worker.referral_source}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* زر العودة */}
        <div className="mt-6">
          <Link
            href="/client/workers"
            className="text-teal hover:underline flex items-center"
          >
            <Icon
              icon="heroicons:arrow-right"
              className="ml-1"
              width="20"
              height="20"
            ></Icon>
            العودة إلى قائمة العمال
          </Link>
        </div>
      </div>
    </>
  );
};
