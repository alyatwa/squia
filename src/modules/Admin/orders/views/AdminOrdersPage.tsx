import { Icon } from "@iconify/react/dist/iconify.js";
import "./AdminOrdersPage.module.css";
import { AlertConfirm } from "@/components/shared/alert-confirm";
import Link from "next/link";

export const AdminOrdersPage = () => {
  const unapproved_orders: any[] = [];
  const authorized_orders: any[] = [];
  const new_orders: any[] = [];
  const pending_orders: any[] = [];
  const completed_orders: any[] = [];
  const refund_orders: any[] = [];

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

      <div className="bg-white rounded-2xl space-y-4 shadow-md p-6 mb-8 fade-in-up fade-in-up-2">
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8 space-x-reverse">
            <div className="tab" data-tab="unapproved">
              <div className="flex items-center pb-4">
                <Icon
                  icon="fluent-emoji:warning"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                <span>الطلبات غير المعتمدة</span>
                <span className="mr-2 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {unapproved_orders.length}
                </span>
              </div>
            </div>
            <div className="tab active" data-tab="authorized">
              <div className="flex items-center pb-4">
                <Icon
                  icon="fluent-emoji:check-mark-button"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                <span>تعميد الطلبات المدفوعة</span>
                <span className="mr-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {authorized_orders.length}
                </span>
              </div>
            </div>
            <div className="tab" data-tab="new">
              <div className="flex items-center pb-4">
                <Icon
                  icon="fluent-emoji:package"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                <span>الطلبات الجديدة</span>
                <span className="mr-2 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {new_orders.length}
                </span>
              </div>
            </div>
            <div className="tab" data-tab="pending">
              <div className="flex items-center pb-4">
                <Icon
                  icon="fluent-emoji:hourglass-not-done"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                <span>الطلبات المعلقة</span>
                <span className="mr-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {pending_orders.length}
                </span>
              </div>
            </div>
            <div className="tab" data-tab="completed">
              <div className="flex items-center pb-4">
                <Icon
                  icon="fluent-emoji:check-mark-button"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                <span>الطلبات المكتملة</span>
                <span className="mr-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {completed_orders.length}
                </span>
              </div>
            </div>
            <div className="tab" data-tab="refund">
              <div className="flex items-center pb-4">
                <Icon
                  icon="fluent-emoji:counterclockwise-arrows-button"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                <span>طلبات الاسترجاع</span>
                <span className="mr-2 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {refund_orders.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-content" id="unapproved-content">
          {unapproved_orders && unapproved_orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العنوان
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العميل
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الكمية
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
                      المبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الدفعة الأولى
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تاريخ الإنشاء
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
                  {unapproved_orders.map((order) => (
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.title}
                        </div>
                        <div className="text-xs text-gray-500 truncate w-[100px]">
                          {order.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {order.client_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.client_name.replace(" ", "_").lower +
                                "@example.com"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.quantity ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.nationality ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.amount} ريال
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.initial_payment ?? 0} ريال
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.created_at.strftime("%Y-%m-%d")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.created_at.strftime("%H:%M")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <a
                            href={`/admin/edit-order/${order.id}`}
                            className="text-blue-600 hover:text-blue-900"
                            title="تعديل الطلب"
                          >
                            <Icon
                              icon="heroicons:pencil-square"
                              width="20"
                              height="20"
                            ></Icon>
                          </a>

                          <a
                            href={`/admin/order-payment/${order.id}`}
                            className="text-green-600 hover:text-green-900"
                            title="دفع الطلب"
                          >
                            <Icon
                              icon="heroicons:credit-card"
                              width="20"
                              height="20"
                            ></Icon>
                          </a>

                          <div className="status-dropdown">
                            <button
                              type="button"
                              className="text-gray-600 hover:text-gray-900"
                              title="تغيير حالة الطلب"
                            >
                              <Icon
                                icon="heroicons:ellipsis-vertical"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                            <div className="status-dropdown-content">
                              <form
                                method="POST"
                                action={`/admin_change_order_status/${order.id}/authorized`}
                              >
                                <button
                                  type="submit"
                                  className="status-dropdown-item authorized w-full text-right"
                                >
                                  <span className="flex items-center">
                                    <Icon
                                      icon="heroicons:check"
                                      className="ml-2"
                                      width="16"
                                      height="16"
                                    ></Icon>
                                    تعميد الطلب
                                  </span>
                                </button>
                              </form>
                              <form
                                method="POST"
                                action="/admin_change_order_status/{{ order.id }}/completed"
                              >
                                <button
                                  type="submit"
                                  className="status-dropdown-item completed w-full text-right"
                                >
                                  <span className="flex items-center">
                                    <Icon
                                      icon="heroicons:check-circle"
                                      className="ml-2"
                                      width="16"
                                      height="16"
                                    ></Icon>
                                    إكمال الطلب
                                  </span>
                                </button>
                              </form>
                              <form
                                method="POST"
                                action="/admin_change_order_status/{{ order.id }}/cancelled"
                              >
                                <button
                                  type="submit"
                                  className="status-dropdown-item cancelled w-full text-right"
                                >
                                  <span className="flex items-center">
                                    <Icon
                                      icon="heroicons:x-mark"
                                      className="ml-2"
                                      width="16"
                                      height="16"
                                    ></Icon>
                                    إلغاء الطلب
                                  </span>
                                </button>
                              </form>
                            </div>
                          </div>

                          <AlertConfirm
                            onConfirm={() => {}}
                            title="هل أنت متأكد أنك تريد حذف الطلب؟"
                            description="لا يمكن التراجع عن هذا الإجراء."
                            button={
                              <button
                                type="button"
                                className="text-red-600 hover:text-red-900 delete-btn"
                                title="حذف الطلب"
                              >
                                <Icon
                                  icon="heroicons:trash"
                                  width="20"
                                  height="20"
                                ></Icon>
                              </button>
                            }
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                icon="fluent-emoji:warning"
                className="mx-auto mb-4"
                width="64"
                height="64"
              ></Icon>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد طلبات غير معتمدة
              </h3>
              <p className="text-gray-500">
                لم يتم العثور على أي طلبات غير معتمدة في النظام.
              </p>
            </div>
          )}
        </div>

        <div className="tab-content active" id="authorized-content">
          {authorized_orders && authorized_orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العنوان
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العميل
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الكمية
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
                      المنصب
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      المبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      حالة الدفع
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تاريخ الإنشاء
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الإجراءات
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العقد
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {authorized_orders.map((order) => (
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.title}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {order.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {order.client_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.client_name + "@example.com"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.quantity ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.nationality ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.position ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.amount} ريال
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {order.payment_status == "paid" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Icon
                              icon="heroicons:check-circle"
                              className="ml-1"
                              width="12"
                              height="12"
                            ></Icon>
                            مدفوع
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Icon
                              icon="heroicons:clock"
                              className="ml-1"
                              width="12"
                              height="12"
                            ></Icon>
                            قيد المعالجة
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.created_at.strftime("%Y-%m-%d")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.created_at.strftime("%H:%M")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <a
                            href="{{ url_for('admin_edit_order', order_id=order.id) }}"
                            className="text-blue-600 hover:text-blue-900"
                            title="تعديل الطلب"
                          >
                            <Icon
                              icon="heroicons:pencil-square"
                              width="20"
                              height="20"
                            ></Icon>
                          </a>
                          <form
                            method="POST"
                            action="/admin_change_order_status/{{ order.id }}/completed"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="text-green-600 hover:text-green-900"
                              title="إكمال الطلب"
                            >
                              <Icon
                                icon="heroicons:check-circle"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                          </form>
                          <form
                            method="POST"
                            action="/admin_change_order_status/{{ order.id }}/unapproved"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="text-yellow-600 hover:text-yellow-900"
                              title="إلغاء تعميد الطلب"
                            >
                              <Icon
                                icon="heroicons:arrow-path"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                          </form>
                          <form
                            method="POST"
                            action="/admin_change_order_status/{{ order.id }}/cancelled"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="text-red-600 hover:text-red-900"
                              title="إلغاء الطلب"
                            >
                              <Icon
                                icon="heroicons:x-mark"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                          </form>
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-900 delete-btn"
                            data-id="{{ order.id }}"
                            title="حذف الطلب"
                          >
                            <Icon
                              icon="heroicons:trash"
                              width="20"
                              height="20"
                            ></Icon>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <a
                          href="{{ url_for('admin_generate_contract_pdf', order_id=order.id) }}"
                          target="_blank"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Icon
                            icon="heroicons:document-text"
                            width="20"
                            height="20"
                          ></Icon>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                icon="fluent-emoji:check-mark-button"
                className="mx-auto mb-4"
                width="64"
                height="64"
              ></Icon>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد طلبات معمدة
              </h3>
              <p className="text-gray-500">
                لم يتم العثور على أي طلبات معمدة في النظام.
              </p>
            </div>
          )}
        </div>

        <div className="tab-content" id="new-content">
          {new_orders && new_orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العنوان
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العميل
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الكمية
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
                      المنصب
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      المبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      طريقة الدفع
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      حالة الدفع
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تعميد الطلب
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تاريخ الإنشاء
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      الإجراءات
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العقد
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {new_orders.map((order) => (
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {order.client_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.client_name + "@example.com"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.quantity ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.nationality ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.position ?? "غير محدد"}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.amount} ريال
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {order.payment_method == "online" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Icon
                              icon="heroicons:credit-card"
                              className="ml-1"
                              width="12"
                              height="12"
                            ></Icon>
                            دفع إلكتروني
                          </span>
                        ) : order.payment_method == "bank_transfer" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            <Icon
                              icon="heroicons:building-library"
                              className="ml-1"
                              width="12"
                              height="12"
                            ></Icon>
                            تحويل بنكي
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                            غير محدد
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {order.payment_status == "unpaid" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <Icon
                              icon="heroicons:x-circle"
                              className="ml-1"
                              width="12"
                              height="12"
                            ></Icon>
                            غير مدفوع
                          </span>
                        ) : order.payment_status == "pending_confirmation" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            <Icon
                              icon="heroicons:clock"
                              className="ml-1"
                              width="12"
                              height="12"
                            ></Icon>
                            بانتظار التأكيد
                          </span>
                        ) : order.payment_status == "paid" ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Icon
                              icon="heroicons:check-circle"
                              className="ml-1"
                              width="12"
                              height="12"
                            ></Icon>
                            مدفوع
                          </span>
                        ) : null}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <form
                            method="POST"
                            action="{{ url_for('admin_toggle_order_authorization', order_id=order.id) }}"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="relative inline-flex h-6 w-11 items-center rounded-full {{ 'bg-green-500' if order.is_payment_authorized else 'bg-gray-300' }}"
                              title="{{ 'إلغاء تعميد الطلب' if order.is_payment_authorized else 'تعميد الطلب' }}"
                            >
                              <span className="inline-block h-4 w-4 transform rounded-full bg-white transition {{ 'translate-x-6' if order.is_payment_authorized else 'translate-x-1' }}"></span>
                            </button>
                          </form>
                          <span className="mr-2 text-sm {{ 'text-green-600' if order.is_payment_authorized else 'text-gray-500' }}">
                            {order.is_payment_authorized ? "معمد" : "غير معمد"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.created_at.strftime("%Y-%m-%d")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.created_at.strftime("%H:%M")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <a
                            href="{{ url_for('admin_edit_order', order_id=order.id) }}"
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Icon
                              icon="heroicons:pencil-square"
                              width="20"
                              height="20"
                            ></Icon>
                          </a>

                          {order.payment_status == "pending_confirmation" && (
                            <form
                              method="POST"
                              action="{{ url_for('admin_confirm_order_payment', order_id=order.id) }}"
                              className="inline"
                            >
                              <button
                                type="submit"
                                className="text-green-600 hover:text-green-900"
                                title="تأكيد الدفع"
                              >
                                <Icon
                                  icon="heroicons:banknotes"
                                  width="20"
                                  height="20"
                                ></Icon>
                              </button>
                            </form>
                          )}

                          {order.payment_method == "bank_transfer" &&
                            order.payment_proof && (
                              <a
                                href="{{ url_for('admin_uploaded_file', filename=order.payment_proof) }}"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-900"
                                title="عرض إثبات الدفع"
                              >
                                <Icon
                                  icon="heroicons:photo"
                                  width="20"
                                  height="20"
                                ></Icon>
                              </a>
                            )}

                          <button
                            type="button"
                            className="text-red-600 hover:text-red-900 delete-btn"
                            data-id="{{ order.id }}"
                          >
                            <Icon
                              icon="heroicons:trash"
                              width="20"
                              height="20"
                            ></Icon>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <a
                          href="{{ url_for('admin_generate_contract_pdf', order_id=order.id) }}"
                          target="_blank"
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Icon
                            icon="heroicons:document-text"
                            width="20"
                            height="20"
                          ></Icon>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                icon="fluent-emoji:package"
                className="mx-auto mb-4"
                width="64"
                height="64"
              ></Icon>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد طلبات جديدة
              </h3>
              <p className="text-gray-500">
                لم يتم العثور على أي طلبات جديدة في النظام.
              </p>
            </div>
          )}
        </div>

        <div className="tab-content" id="pending-content">
          {pending_orders && pending_orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العنوان
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العميل
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      المبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تاريخ الإنشاء
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
                  {pending_orders.map((order) => (
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {order.client_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.client_name + "@example.com"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.amount} ريال
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.created_at.strftime("%Y-%m-%d")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.created_at.strftime("%H:%M")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <a
                            href="{{ url_for('admin_edit_order', order_id=order.id) }}"
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Icon
                              icon="heroicons:pencil-square"
                              width="20"
                              height="20"
                            ></Icon>
                          </a>
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-900 delete-btn"
                            data-id="{{ order.id }}"
                          >
                            <Icon
                              icon="heroicons:trash"
                              width="20"
                              height="20"
                            ></Icon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                icon="fluent-emoji:hourglass-not-done"
                className="mx-auto mb-4"
                width="64"
                height="64"
              ></Icon>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد طلبات معلقة
              </h3>
              <p className="text-gray-500">
                لم يتم العثور على أي طلبات معلقة في النظام.
              </p>
            </div>
          )}
        </div>

        <div className="tab-content" id="completed-content">
          {completed_orders && completed_orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العنوان
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العميل
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      المبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تاريخ الإكمال
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
                  {completed_orders.map((order) => (
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {order.client_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.client_name + "@example.com"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.amount} ريال
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.completed_at.strftime("%Y-%m-%d")}{" "}
                          {order.completed_at
                            ? order.completed_at
                            : order.updated_at.strftime("%Y-%m-%d")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.completed_at.strftime("%H:%M")}
                          {order.completed_at
                            ? order.completed_at
                            : order.updated_at.strftime("%H:%M")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <a
                            href="{{ url_for('admin_edit_order', order_id=order.id) }}"
                            className="text-blue-600 hover:text-blue-900"
                            title="تعديل الطلب"
                          >
                            <Icon
                              icon="heroicons:pencil-square"
                              width="20"
                              height="20"
                            ></Icon>
                          </a>
                          <form
                            method="POST"
                            action="/admin_change_order_status/{{ order.id }}/authorized"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="text-blue-600 hover:text-blue-900"
                              title="إعادة الطلب إلى حالة التعميد"
                            >
                              <Icon
                                icon="heroicons:arrow-path"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                          </form>
                          <form
                            method="POST"
                            action="/admin_change_order_status/{{ order.id }}/cancelled"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="text-yellow-600 hover:text-yellow-900"
                              title="إلغاء الطلب"
                            >
                              <Icon
                                icon="heroicons:x-mark"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                          </form>
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-900 delete-btn"
                            data-id="{{ order.id }}"
                            title="حذف الطلب"
                          >
                            <Icon
                              icon="heroicons:trash"
                              width="20"
                              height="20"
                            ></Icon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                icon="fluent-emoji:check-mark-button"
                className="mx-auto mb-4"
                width="64"
                height="64"
              ></Icon>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد طلبات مكتملة
              </h3>
              <p className="text-gray-500">
                لم يتم العثور على أي طلبات مكتملة في النظام.
              </p>
            </div>
          )}
        </div>

        <div className="tab-content" id="refund-content">
          {refund_orders && refund_orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العنوان
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      العميل
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      المبلغ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تاريخ الاسترجاع
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
                  {refund_orders.map((order) => (
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {order.title}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.description}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {order.client_name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {order.client_name + "@example.com"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.amount} ريال
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.updated_at.strftime("%Y-%m-%d")}
                        </div>
                        <div className="text-xs text-gray-500">
                          {order.updated_at.strftime("%H:%M")}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <a
                            href="{{ url_for('admin_edit_order', order_id=order.id) }}"
                            className="text-blue-600 hover:text-blue-900"
                            title="تعديل الطلب"
                          >
                            <Icon
                              icon="heroicons:pencil-square"
                              width="20"
                              height="20"
                            ></Icon>
                          </a>
                          <form
                            method="POST"
                            action="/admin_change_order_status/{{ order.id }}/authorized"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="text-blue-600 hover:text-blue-900"
                              title="إعادة الطلب إلى حالة التعميد"
                            >
                              <Icon
                                icon="heroicons:arrow-path"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                          </form>
                          <form
                            method="POST"
                            action="/admin_change_order_status/{{ order.id }}/completed"
                            className="inline"
                          >
                            <button
                              type="submit"
                              className="text-green-600 hover:text-green-900"
                              title="إكمال الطلب"
                            >
                              <Icon
                                icon="heroicons:check-circle"
                                width="20"
                                height="20"
                              ></Icon>
                            </button>
                          </form>
                          <button
                            type="button"
                            className="text-red-600 hover:text-red-900 delete-btn"
                            data-id="{{ order.id }}"
                            title="حذف الطلب"
                          >
                            <Icon
                              icon="heroicons:trash"
                              width="20"
                              height="20"
                            ></Icon>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon
                icon="fluent-emoji:counterclockwise-arrows-button"
                className="mx-auto mb-4"
                width="64"
                height="64"
              ></Icon>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                لا توجد طلبات استرجاع
              </h3>
              <p className="text-gray-500">
                لم يتم العثور على أي طلبات استرجاع في النظام.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* <div id="delete-modal" className="modal-overlay">
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-right px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-xl font-bold text-gray-700">تأكيد الحذف</p>
              <div className="modal-close cursor-pointer z-50">
                <span className="text-gray-500 hover:text-gray-700">
                  <Icon icon="heroicons:x-mark" width="24" height="24" />
                </span>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              هل أنت متأكد من رغبتك في حذف هذا الطلب؟ لا يمكن التراجع عن هذا
              الإجراء.
            </p>
            <div className="flex justify-end pt-2 space-x-2  ">
              <button className="modal-close px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors">
                إلغاء
              </button>
              <form id="delete-form" method="POST" action="">
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  حذف
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>   */}
    </>
  );
};
