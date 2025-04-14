"use client";
import { Button } from "@/components/ui";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const AdminUsersPage = () => {
  const users = [
    {
      id: "12",
      name: "أحمد محمد",
      username: "ahmedmohamed",
      email: "abc@email.com",
      phone: "12345687",
    },
  ];

  const handleEditUser = (userId: string) => {};

  const handleDeleteUser = (userId: string) => {};

  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-md p-6 mb-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center">
              <Icon
                icon="heroicons:users"
                width="36"
                height="36"
                className="ml-2"
              ></Icon>
              إدارة المستخدمين
            </h1>
            <p className="text-white/80">
              يمكنك من هنا إضافة وتعديل وحذف المستخدمين في النظام.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2 space-x-reverse">
            <Link
              href="/admin/settings"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-white/90 transition-colors"
            >
              <Icon
                icon="heroicons:arrow-uturn-right"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              العودة للإعدادات
            </Link>
            <button
              id="addUserBtn"
              className="inline-flex items-center px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Icon
                icon="heroicons:plus"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              إضافة مستخدم جديد
            </button>
          </div>
        </div>
      </div>

      {/* قسم البحث والفلترة */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Icon
                icon="heroicons:magnifying-glass"
                className="text-gray-400"
                width="20"
                height="20"
              ></Icon>
            </div>
            <input
              type="text"
              id="searchUsers"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
              placeholder="البحث عن مستخدم..."
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <select
              id="filterRole"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            >
              <option value="">جميع الأدوار</option>
              <option value="admin">مدير</option>
              <option value="staff">موظف</option>
              <option value="supervisor">مشرف</option>
            </select>
            <select
              id="filterStatus"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            >
              <option value="">جميع الحالات</option>
              <option value="active">نشط</option>
              <option value="inactive">غير نشط</option>
            </select>
          </div>
        </div>
      </div>

      {/* جدول المستخدمين */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-8">
        <div className="overflow-x-auto">
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
                  البريد الإلكتروني
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  رقم الهاتف
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  الدور
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  الحالة
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users && users.length > 0 ? (
                users.map((user) => (
                  <tr className="table-row" key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-bold">
                            {user.name ? user.name[0] : user.username[0]}
                          </span>
                        </div>
                        <div className="mr-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name || user.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.email || "لا يوجد"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.phone || "لا يوجد"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        مدير
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        نشط
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2 space-x-reverse">
                        <button
                          className="text-blue-600 hover:text-blue-900 edit-user"
                          onClick={() => handleEditUser(user.id)}
                        >
                          <Icon
                            icon="heroicons:pencil-square"
                            width="20"
                            height="20"
                          />
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900 delete-user"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Icon icon="heroicons:trash" width="20" height="20" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    لا يوجد مستخدمين حالياً
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* نافذة إضافة مستخدم جديد */}
      <div id="addUserModal" className="modal-overlay">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto p-6 fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Icon
                icon="heroicons:user-plus"
                className="ml-2"
                width="24"
                height="24"
              ></Icon>
              إضافة مستخدم جديد
            </h3>
            <button
              type="button"
              className="close-modal text-gray-400 hover:text-gray-500"
            >
              <Icon icon="heroicons:x-mark" width="24" height="24"></Icon>
            </button>
          </div>

          <form
            id="addUserForm"
            action="{{ url_for('admin_add_user') }}"
            method="POST"
          >
            <div className="space-y-4">
              {/* الاسم */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />

                {/* اسم المستخدم */}
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    اسم المستخدم
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* البريد الإلكتروني */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* رقم الهاتف */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    رقم الهاتف
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* الدور */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    الدور
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="admin">مدير</option>
                    <option value="staff">موظف</option>
                    <option value="supervisor">مشرف</option>
                  </select>
                </div>
              </div>

              {/* كلمة المرور */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  كلمة المرور
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  autoComplete="new-password"
                />
              </div>

              {/* تأكيد كلمة المرور */}
              <div>
                <label
                  htmlFor="password_confirm"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  تأكيد كلمة المرور
                </label>
                <input
                  type="password"
                  id="password_confirm"
                  name="password_confirm"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-2 space-x-reverse">
              <button
                type="button"
                className="close-modal px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                إلغاء
              </button>
              <Button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                إضافة المستخدم
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* نافذة تعديل المستخدم */}
      <div id="editUserModal" className="modal-overlay">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto p-6 fade-in-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Icon
                icon="heroicons:pencil-square"
                className="ml-2"
                width="24"
                height="24"
              ></Icon>
              تعديل بيانات المستخدم
            </h3>
            <button
              type="button"
              className="close-edit-modal text-gray-400 hover:text-gray-500"
            >
              <Icon icon="heroicons:x-mark" width="24" height="24"></Icon>
            </button>
          </div>

          <form
            id="editUserForm"
            action="{{ url_for('admin_edit_user') }}"
            method="POST"
          >
            <div className="space-y-4">
              {/* الاسم */}
              <div>
                <label
                  htmlFor="edit_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="edit_name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* اسم المستخدم */}
              <div>
                <label
                  htmlFor="edit_username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  id="edit_username"
                  name="username"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* البريد الإلكتروني */}
              <div>
                <label
                  htmlFor="edit_email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="edit_email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* رقم الهاتف */}
              <div>
                <label
                  htmlFor="edit_phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  رقم الهاتف
                </label>
                <input
                  type="text"
                  id="edit_phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* الدور */}
              <div>
                <label
                  htmlFor="edit_role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الدور
                </label>
                <select
                  id="edit_role"
                  name="role"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="admin">مدير</option>
                  <option value="staff">موظف</option>
                  <option value="supervisor">مشرف</option>
                </select>
              </div>

              {/* الحالة */}
              <div>
                <label
                  htmlFor="edit_status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  الحالة
                </label>
                <select
                  id="edit_status"
                  name="status"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="active">نشط</option>
                  <option value="inactive">غير نشط</option>
                </select>
              </div>

              {/* كلمة المرور الجديدة (اختياري) */}
              <div>
                <label
                  htmlFor="edit_password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  كلمة المرور الجديدة (اختياري)
                </label>
                <input
                  type="password"
                  id="edit_password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  autoComplete="new-password"
                />
                <p className="text-xs text-gray-500 mt-1">
                  اترك هذا الحقل فارغًا إذا كنت لا ترغب في تغيير كلمة المرور
                </p>
              </div>

              {/* تأكيد كلمة المرور الجديدة */}
              <div>
                <label
                  htmlFor="edit_password_confirm"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  تأكيد كلمة المرور الجديدة
                </label>
                <input
                  type="password"
                  id="edit_password_confirm"
                  name="password_confirm"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  autoComplete="new-password"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-2 space-x-reverse">
              <button
                type="button"
                className="close-edit-modal px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
              >
                إلغاء
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                حفظ التغييرات
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* نافذة تأكيد حذف المستخدم */}
      <div id="deleteUserModal" className="modal-overlay">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto p-6 fade-in-up">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <Icon
                icon="heroicons:exclamation-triangle"
                className="ml-2 text-red-600"
                width="24"
                height="24"
              ></Icon>
              تأكيد الحذف
            </h3>
            <button
              type="button"
              className="close-delete-modal text-gray-400 hover:text-gray-500"
            >
              <Icon icon="heroicons:x-mark" width="24" height="24"></Icon>
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-center bg-red-100 w-16 h-16 rounded-full mx-auto mb-4">
              <Icon
                icon="heroicons:trash"
                className="text-red-600"
                width="32"
                height="32"
              ></Icon>
            </div>

            <p className="text-center text-gray-700 mb-2">
              هل أنت متأكد من رغبتك في حذف المستخدم
            </p>
            <p
              id="delete-user-name"
              className="text-center font-bold text-gray-900 mb-4"
            >
              اسم المستخدم
            </p>

            <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Icon
                    icon="heroicons:exclamation-triangle"
                    className="text-yellow-600"
                    width="20"
                    height="20"
                  ></Icon>
                </div>
                <div className="mr-3">
                  <p className="text-sm text-yellow-700">
                    سيتم حذف جميع بيانات المستخدم بشكل نهائي ولا يمكن التراجع عن
                    هذا الإجراء.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 space-x-reverse">
            <button
              type="button"
              className="close-delete-modal px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              إلغاء
            </button>
            <button
              id="confirm-delete-btn"
              type="button"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center"
            >
              <Icon
                icon="heroicons:trash"
                className="ml-1"
                width="20"
                height="20"
              ></Icon>
              تأكيد الحذف
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
