import { Icon } from "@iconify/react/dist/iconify.js"

export const ClientAddInterviewPage = () => {
  return (
    <!-- زر العودة -->
<div class="mt-6 text-center">
    <Link >href="{{ url_for('interview.client_interviews') }}" class="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
        <Icon icon="heroicons:arrow-uturn-right" class="ml-1" width="20" height="20"></Icon>
        العودة إلى قائمة المقابلات
    </Link>
</div>
<!-- ترويسة الصفحة -->
<div class="bg-white rounded-2xl shadow-md p-6 mb-8">
    <div class="flex items-center">
        <div class="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center ml-4">
            <iconify-icon icon="fluent-emoji:calendar-plus" width="28" height="28"></iconify-icon>
        </div>
        <div>
            <h1 class="text-2xl font-bold text-dark">إنشاء مقابلة جديدة</h1>
            <p class="text-gray-600">قم بإدخال بيانات المقابلة الجديدة</p>
        </div>
    </div>
</div>

<!-- بطاقة النموذج -->
<div class="bg-white rounded-2xl shadow-md overflow-hidden form-card">
    <div class="bg-gradient-to-l from-teal-600 to-teal-500 p-4 text-white">
        <h2 class="text-xl font-bold flex items-center">
            <iconify-icon icon="heroicons:document-plus" class="ml-2" width="24" height="24"></iconify-icon>
            بيانات المقابلة
        </h2>
        <p class="text-teal-100 text-sm">جميع الحقول مطلوبة</p>
    </div>
    
    <form method="POST" action="{{ url_for('client_new_interview') }}" class="p-6 space-y-6">
        {{ form.hidden_tag() }}
        
        <!-- حقل العامل -->
        <div class="space-y-2">
            <label for="{{ form.worker_id.id }}" class="block text-dark font-medium flex items-center">
                <iconify-icon icon="fluent-emoji:construction-worker" class="ml-2" width="20" height="20"></iconify-icon>
                {{ form.worker_id.label.text }}
            </label>
            <div class="relative dropdown-wrapper">
                {{ form.worker_id(class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect") }}
                <div class="dropdown-icon text-gray-400">
                    <iconify-icon icon="heroicons:chevron-down" width="24" height="24"></iconify-icon>
                </div>
            </div>
            {% if form.worker_id.errors %}
                <div class="text-red-600 text-sm mt-1 space-y-1">
                    {% for error in form.worker_id.errors %}
                        <p class="flex items-center">
                            <iconify-icon icon="heroicons:exclamation-circle" class="ml-1" width="16" height="16"></iconify-icon>
                            {{ error }}
                        </p>
                    {% endfor %}
                </div>
            {% endif %}
        </div>
        
        <!-- حقل التاريخ والوقت -->
        <div class="space-y-2">
            <label for="interview_datetime" class="block text-dark font-medium flex items-center">
                <iconify-icon icon="fluent-emoji:calendar" class="ml-2" width="20" height="20"></iconify-icon>
                {{ form.date_time.label.text }}
            </label>
            <div class="relative calendar-icon-wrapper">
                <input type="datetime-local" id="interview_datetime" name="date_time" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect" required>
                <div class="calendar-icon text-gray-400">
                    <iconify-icon icon="heroicons:calendar" width="24" height="24"></iconify-icon>
                </div>
            </div>
            <p class="text-gray-500 text-sm flex items-center mt-1">
                <iconify-icon icon="heroicons:information-circle" class="ml-1" width="16" height="16"></iconify-icon>
                اختر التاريخ والوقت من التقويم
            </p>
            {% if form.date_time.errors %}
                <div class="text-red-600 text-sm mt-1 space-y-1">
                    {% for error in form.date_time.errors %}
                        <p class="flex items-center">
                            <iconify-icon icon="heroicons:exclamation-circle" class="ml-1" width="16" height="16"></iconify-icon>
                            {{ error }}
                        </p>
                    {% endfor %}
                </div>
            {% endif %}
        </div>
        
        <!-- حقل الطلب -->
        <div class="space-y-2">
            <label for="{{ form.order_id.id }}" class="block text-dark font-medium flex items-center">
                <iconify-icon icon="fluent-emoji:package" class="ml-2" width="20" height="20"></iconify-icon>
                {{ form.order_id.label.text }}
            </label>
            <div class="relative dropdown-wrapper">
                {{ form.order_id(class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect") }}
                <div class="dropdown-icon text-gray-400">
                    <iconify-icon icon="heroicons:chevron-down" width="24" height="24"></iconify-icon>
                </div>
            </div>
            {% if form.order_id.errors %}
                <div class="text-red-600 text-sm mt-1 space-y-1">
                    {% for error in form.order_id.errors %}
                        <p class="flex items-center">
                            <iconify-icon icon="heroicons:exclamation-circle" class="ml-1" width="16" height="16"></iconify-icon>
                            {{ error }}
                        </p>
                    {% endfor %}
                </div>
            {% endif %}
        </div>

        <!-- حقل نوع المقابلة -->
        <div class="space-y-2">
            <label for="{{ form.meeting_type.id }}" class="block text-dark font-medium flex items-center">
                <iconify-icon icon="fluent-emoji:video-camera" class="ml-2" width="20" height="20"></iconify-icon>
                {{ form.meeting_type.label.text }}
            </label>
            <div class="relative dropdown-wrapper">
                {{ form.meeting_type(class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect") }}
                <div class="dropdown-icon text-gray-400">
                    <iconify-icon icon="heroicons:chevron-down" width="24" height="24"></iconify-icon>
                </div>
            </div>
            {% if form.meeting_type.errors %}
                <div class="text-red-600 text-sm mt-1 space-y-1">
                    {% for error in form.meeting_type.errors %}
                        <p class="flex items-center">
                            <iconify-icon icon="heroicons:exclamation-circle" class="ml-1" width="16" height="16"></iconify-icon>
                            {{ error }}
                        </p>
                    {% endfor %}
                </div>
            {% endif %}
        </div>
        
        <!-- حقل الحالة -->
        <div class="space-y-2">
            <label for="{{ form.status.id }}" class="block text-dark font-medium flex items-center">
                <iconify-icon icon="fluent-emoji:check-mark-button" class="ml-2" width="20" height="20"></iconify-icon>
                {{ form.status.label.text }}
            </label>
            <div class="relative dropdown-wrapper">
                {{ form.status(class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all input-hover-effect") }}
                <div class="dropdown-icon text-gray-400">
                    <iconify-icon icon="heroicons:chevron-down" width="24" height="24"></iconify-icon>
                </div>
            </div>
            {% if form.status.errors %}
                <div class="text-red-600 text-sm mt-1 space-y-1">
                    {% for error in form.status.errors %}
                        <p class="flex items-center">
                            <iconify-icon icon="heroicons:exclamation-circle" class="ml-1" width="16" height="16"></iconify-icon>
                            {{ error }}
                        </p>
                    {% endfor %}
                </div>
            {% endif %}
        </div>
        
        <!-- زر الإرسال -->
        <div class="pt-4">
            <button type="submit" class="w-full bg-gradient-to-l from-teal-600 to-teal-500 text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-teal-400 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center pulse-button">
                <iconify-icon icon="heroicons:check" class="ml-2" width="20" height="20"></iconify-icon>
                حفظ المقابلة
            </button>
        </div>
    </form>
</div>

  );
};
