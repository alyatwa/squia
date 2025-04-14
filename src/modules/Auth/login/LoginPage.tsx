import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: [] as string[],
    password: [] as string[],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Login attempt with:", formData);

    // Example validation (replace with actual validation)
    const newErrors = {
      username: [] as string[],
      password: [] as string[],
    };

    if (!formData.username) {
      newErrors.username.push("اسم المستخدم مطلوب");
    }

    if (!formData.password) {
      newErrors.password.push("كلمة المرور مطلوبة");
    }

    setErrors(newErrors);

    // Continue with form submission if no errors
    if (newErrors.username.length === 0 && newErrors.password.length === 0) {
      // Process login
    }
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-accent-700 to-accent-500 p-6 text-white text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
              <Icon icon="fluent-emoji:office-worker" width={40} height={40} />
            </div>
            <h2 className="text-2xl font-bold">تسجيل دخول المدير</h2>
            <p className="mt-2 text-white/80">
              أدخل بياناتك للوصول إلى لوحة تحكم الإدارة
            </p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit}>
              {/* اسم المستخدم */}
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="  text-dark-light font-medium mb-2 flex items-center"
                >
                  <Icon
                    icon="heroicons:user"
                    className="ml-1"
                    width={20}
                    height={20}
                  />
                  اسم المستخدم
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="أدخل اسم المستخدم"
                  autoComplete="username"
                />
                {errors.username.length > 0 && (
                  <div className="mt-2 text-accent-700 text-sm">
                    {errors.username.map((error, index) => (
                      <p key={index} className="flex items-center">
                        <Icon
                          icon="heroicons:exclamation-circle"
                          className="ml-1"
                          width={16}
                          height={16}
                        />
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* كلمة المرور */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="  text-dark-light font-medium mb-2 flex items-center"
                >
                  <Icon
                    icon="heroicons:lock-closed"
                    className="ml-1"
                    width={20}
                    height={20}
                  />
                  كلمة المرور
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors"
                  placeholder="أدخل كلمة المرور"
                  autoComplete="current-password"
                />
                {errors.password.length > 0 && (
                  <div className="mt-2 text-accent-700 text-sm">
                    {errors.password.map((error, index) => (
                      <p key={index} className="flex items-center">
                        <Icon
                          icon="heroicons:exclamation-circle"
                          className="ml-1"
                          width={16}
                          height={16}
                        />
                        {error}
                      </p>
                    ))}
                  </div>
                )}
              </div>

            
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-700 to-accent-500 text-white py-3 rounded-lg font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  تسجيل الدخول
                </button>
              </div>
            </form>

            {/* ملاحظة للاختبار */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Icon
                    icon="heroicons:information-circle"
                    className="text-blue-500"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="mr-3">
                  <p className="text-sm text-blue-700">
                    للاختبار، استخدم اسم المستخدم "admin" وكلمة المرور
                    "admin123"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
          <Link
            href="/login"
            className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
          >
            <Icon
              icon="fluent-emoji:person"
              className="ml-1"
              width={24}
              height={24}
            />
            تسجيل دخول العميل
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/worker-login"
            className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
          >
            <Icon
              icon="fluent-emoji:construction-worker"
              className="ml-1"
              width={24}
              height={24}
            />
            تسجيل دخول العامل
          </Link>
        </div>
      </div>
    </div>
  );
};
