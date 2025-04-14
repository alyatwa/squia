"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";

export const ClientProfilePage = () => {
  // Dummy data to replace Flask form template variables
  const [formData, setFormData] = useState({
    name: "محمد أحمد",
    email: "mohammed@example.com",
    phone: "0512345678",
    nationality: "سعودي",
    gender: "ذكر",
    date_of_birth: "1990-01-01",
    position: "كهربائي",
    current_city: "الرياض",
    experience: "5 سنوات",
    skills: "كهرباء، صيانة، تركيبات",
    expected_salary: 5000,
    iban: "SA0380000000608010167519",
  });

  // Dummy errors for demonstration
  const [errors, setErrors] = useState({
    name: [],
    nationality: [],
    experience: [],
    skills: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
      <div className="mb-6 pb-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-dark flex items-center">
          <Icon
            icon="heroicons:user-circle"
            className="ml-2"
            width="24"
            height="24"
          ></Icon>
          معلوماتك الشخصية
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* معلومات أساسية */}
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg mb-2">
            <h3 className="text-lg font-bold text-dark mb-2">معلومات أساسية</h3>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              الاسم
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              required
            />
            {errors.name.length > 0 && (
              <div className="text-red-500 text-sm mt-1">
                {errors.name.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
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
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          <div>
            <label
              htmlFor="nationality"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              الجنسية
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
            {errors.nationality.length > 0 && (
              <div className="text-red-500 text-sm mt-1">
                {errors.nationality.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              الجنس
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            >
              <option value="">اختر الجنس</option>
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="date_of_birth"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              تاريخ الميلاد
            </label>
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          {/* معلومات العمل */}
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg mb-2 mt-4">
            <h3 className="text-lg font-bold text-dark mb-2">معلومات العمل</h3>
          </div>

          <div>
            <label
              htmlFor="position"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              المنصب/الوظيفة
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          <div>
            <label
              htmlFor="current_city"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              المدينة الحالية
            </label>
            <input
              type="text"
              id="current_city"
              name="current_city"
              value={formData.current_city}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              الخبرة
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
            {errors.experience.length > 0 && (
              <div className="text-red-500 text-sm mt-1">
                {errors.experience.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          <div className="md:col-span-2">
            <label
              htmlFor="skills"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              المهارات
            </label>
            <textarea
              id="skills"
              name="skills"
              rows={3}
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              يرجى فصل المهارات بفواصل (مثال: سباكة، كهرباء، نجارة)
            </p>
            {errors.skills.length > 0 && (
              <div className="text-red-500 text-sm mt-1">
                {errors.skills.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </div>

          {/* معلومات مالية */}
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg mb-2 mt-4">
            <h3 className="text-lg font-bold text-dark mb-2">معلومات مالية</h3>
          </div>

          <div>
            <label
              htmlFor="expected_salary"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              الراتب المتوقع (ريال)
            </label>
            <input
              type="number"
              id="expected_salary"
              name="expected_salary"
              value={formData.expected_salary}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          <div>
            <label
              htmlFor="iban"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              رقم الآيبان
            </label>
            <input
              type="text"
              id="iban"
              name="iban"
              value={formData.iban}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          {/* معلومات إضافية */}
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg mb-2 mt-4">
            <h3 className="text-lg font-bold text-dark mb-2">معلومات إضافية</h3>
          </div>

          {/* الملفات والصور */}
          <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg mb-2 mt-4">
            <h3 className="text-lg font-bold text-dark mb-2">الملفات والصور</h3>
            <p className="text-sm text-gray-600">
              يمكنك تحميل صورة شخصية وسيرة ذاتية لزيادة فرصك في الحصول على عمل
            </p>
          </div>

          <div>
            <label
              htmlFor="profile_picture"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              صورة البروفايل الشخصية
            </label>
            <input
              type="file"
              id="profile_picture"
              name="profile_picture"
              accept=".jpg,.jpeg,.png"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              الصيغ المدعومة: JPG، JPEG، PNG
            </p>
          </div>

          <div>
            <label
              htmlFor="cv_file"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              السيرة الذاتية
            </label>
            <input
              type="file"
              id="cv_file"
              name="cv_file"
              accept=".pdf"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
            <p className="text-xs text-gray-500 mt-1">الصيغ المدعومة: PDF</p>
          </div>
        </div>

        <div className="flex justify-end space-x-2 space-x-reverse">
          <Link
            href="/worker"
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
            حفظ المعلومات
          </button>
        </div>
      </form>
    </div>
  );
};
