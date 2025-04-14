import { Icon } from "@iconify/react/dist/iconify.js";

interface AddInterviewProps {
  interviewId: string | null;
  interview: any;
}

export const AddInterview: React.FC<AddInterviewProps> = ({
  interviewId,
  interview,
}) => {
  const workers: any[] = [];
  const orders: any[] = [];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">إضافة مقابلة جديدة</h1>
        <p className="text-gray-600">قم بإضافة مقابلة جديدة مع أحد العمال</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center">
          <a
            href="/interviews"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors text-sm flex items-center w-fit"
          >
            <Icon
              icon="heroicons:arrow-right"
              className="ml-1"
              width="16"
              height="16"
            ></Icon>
            العودة للمقابلات
          </a>

          {interviewId && (
            <div className="flex space-x-2 space-x-reverse">
              <a
                href="/reschedule_interview/interviewId456"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors text-sm flex items-center"
              >
                <Icon
                  icon="heroicons:calendar"
                  className="ml-1"
                  width="16"
                  height="16"
                ></Icon>
                إعادة جدولة
              </a>
              <a
                href="/interviewId/13"
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors text-sm flex items-center"
              >
                <Icon
                  icon="heroicons:x-mark"
                  className="ml-1"
                  width="16"
                  height="16"
                ></Icon>
                إلغاء المقابلة
              </a>
            </div>
          )}
        </div>
      </div>

      <div
        className="bg-white rounded-lg shadow-md p-6"
        data-interview-id="{% if interviewId %}{{ interviewId }}{% else %}0{% endif %}"
        data-is-editing={!!interviewId}
        data-worker-id={interview.worker_id}
        data-order-id={interview.order_id}
        id="interview-form-container"
      >
        <div
          id="form-errors"
          className="hidden mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-700"
        ></div>

        <form
          method="POST"
          action="{% if interviewId %}{{ url_for('reschedule_interview', interviewId=interviewId) }}{% else %}{{ url_for('add_interview') }}{% endif %}"
          id="interview-form"
        >
          <input type="hidden" name="csrf_token" value="{{ csrf_token() }}" />

          {interviewId && (
            <input type="hidden" name="interviewId" value="{{ interviewId }}" />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label
                htmlFor="worker_id"
                className="block text-gray-700 font-medium mb-2"
              >
                اختر العامل *
              </label>
              <select
                id="worker_id"
                name="worker_id"
                className="select2-worker w-full"
                required
              >
                <option value="">-- اختر العامل --</option>
                {workers.map((worker) => (
                  <option
                    key={worker.id}
                    value={worker.id}
                    selected={interview && interview.worker_id === worker.id}
                  >
                    {worker.name} ({worker.nationality})
                  </option>
                ))}{" "}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="order_id"
                className="block text-gray-700 font-medium mb-2"
              >
                اختر الطلب *
              </label>
              <select
                id="order_id"
                name="order_id"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">-- اختر الطلب --</option>
                <option value="10">توظيف طباخين (شركة الرياض للتطوير)</option>
                <option value="11">
                  توظيف عمال بناء (مؤسسة جدة للمقاولات)
                </option>
                <option value="12">توظيف ممرضين (شركة الدمام للخدمات)</option>
                <option value="13">توظيف سائقين (مؤسسة المدينة للتجارة)</option>
                <option value="14">توظيف حراس أمن (شركة مكة للاستثمار)</option>
                {orders.map((order) => (
                  <option
                    key={order.id}
                    value={order.id}
                    data-client={order.client_name}
                    selected={interview && interview.order_id === order.id}
                  >
                    {order.title}
                  </option>
                ))}{" "}
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 font-medium mb-2"
              >
                تاريخ المقابلة *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                value="{% if interview %}{{ interview.date }}{% else %}{{ now.strftime('%Y-%m-%d') }}{% endif %}"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-gray-700 font-medium mb-2"
              >
                وقت المقابلة *
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
                value="{% if interview %}{{ interview.time }}{% else %}{{ now.strftime('%H:%M') }}{% endif %}"
              />
            </div>

            <div className="mb-4 md:col-span-2">
              <label
                htmlFor="meeting_type"
                className="block text-gray-700 font-medium mb-2"
              >
                نوع المقابلة *
              </label>
              <div className="flex space-x-4 space-x-reverse">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="in_person"
                    name="meeting_type"
                    value="in_person"
                    className="ml-2"
                    checked={interview && interview.meeting_type == "in_person"}
                  />
                  <label htmlFor="in_person">حضوري</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="zoom"
                    name="meeting_type"
                    value="zoom"
                    className="ml-2"
                    checked={!(interview && interview.meeting_type !== "zoom")}
                  />{" "}
                  <label htmlFor="zoom">عبر زوم</label>
                </div>
              </div>
            </div>

            <div
              id="zoom-preview"
              className="mb-4 md:col-span-2 zoom-preview hidden"
            >
              <h3 className="text-blue-800 font-medium mb-2 flex items-center">
                <Icon
                  icon="logos:zoom"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                معلومات اجتماع زوم
              </h3>
              <p className="text-gray-600 mb-2">
                سيتم إنشاء رابط زوم تلقائياً عند حفظ المقابلة.
              </p>
              <p className="text-gray-600 mb-2">
                سيكون الرابط متاحاً قبل 15 دقيقة من موعد المقابلة.
              </p>
              <div className="zoom-link">
                <p className="text-gray-500 text-sm">
                  رابط المعاينة:{" "}
                  <span id="zoom-link-preview" className="text-blue-600">
                    https://zoom.us/j/XXXXXXXXX
                  </span>
                </p>
              </div>
            </div>

            <div
              id="in-person-payment"
              className="mb-4 md:col-span-2 bg-yellow-50 border border-yellow-200 rounded-md p-4 hidden"
            >
              <h3 className="text-yellow-800 font-medium mb-2 flex items-center">
                <Icon
                  icon="heroicons:currency-dollar"
                  className="ml-2"
                  width="20"
                  height="20"
                ></Icon>
                معلومات الدفع للمقابلة الحضورية
              </h3>
              <p className="text-gray-600 mb-4">
                يرجى تحديد المبلغ المطلوب دفعه مقابل الخدمة والمواصلات.
              </p>
              <div className="flex items-center">
                <label
                  htmlFor="payment_amount"
                  className="block text-gray-700 font-medium ml-2"
                >
                  المبلغ:
                </label>
                <input
                  type="number"
                  id="payment_amount"
                  name="payment_amount"
                  min="0"
                  step="1"
                  className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-32"
                  placeholder="0"
                  value={
                    interview && interview.payment_amount
                      ? parseFloat(interview.payment_amount)
                      : 100
                  }
                />
                <span className="mr-2 text-gray-700">ريال</span>
              </div>
            </div>

            <div className="mb-4 md:col-span-2">
              <label
                htmlFor="notes"
                className="block text-gray-700 font-medium mb-2"
              >
                ملاحظات
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="أضف أي ملاحظات أو تفاصيل إضافية هنا..."
              >
                {interview && interview.notes}
              </textarea>
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div id="form-status" className="text-gray-500 hidden">
              <span className="inline-flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-teal-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>جاري إضافة المقابلة...</span>
              </span>
            </div>
            <div>
              <button
                type="button"
                id="validate-form"
                className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-colors"
              >
                {interviewId ? "تحديث المقابلة" : "إضافة المقابلة"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
