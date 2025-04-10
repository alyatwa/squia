import { Icon } from "@iconify/react";

export const Main = () => {
  return (
    <main className="flex-grow py-6">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-teal-dark to-teal text-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to Taeen Platform
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                The leading platform connecting clients with skilled workers in
                various fields
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  href="/register"
                  className="bg-white text-teal hover:bg-gray-100 px-6 py-3 rounded-lg font-bold shadow-md transition-all flex items-center"
                >
                  <Icon
                    icon="heroicons:user-plus"
                    className="ml-2"
                    width="24"
                    height="24"
                  />
                  Register New Account
                </a>
                <a
                  href="/login"
                  className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center"
                >
                  <Icon
                    icon="heroicons:arrow-right-on-rectangle"
                    className="ml-2"
                    width="24"
                    height="24"
                  />
                  Login
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/5"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-dark relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-cherry">
            مميزات المنصة
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover-lift">
              <div className="bg-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon
                  icon="fluent-emoji:magnifying-glass-tilted-right"
                  width="40"
                  height="40"
                ></Icon>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-dark">
                بحث سهل
              </h3>
              <p className="text-gray-600 text-center">
                تصفح قائمة العمال المتاحين بمختلف المهارات والتخصصات بكل سهولة
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover-lift">
              <div className="bg-coral/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon
                  icon="fluent-emoji:spiral-calendar"
                  width="40"
                  height="40"
                ></Icon>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-dark">
                جدولة مرنة
              </h3>
              <p className="text-gray-600 text-center">
                جدولة المقابلات بشكل مباشر وسهل مع إمكانية التعديل والإلغاء
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover-lift">
              <div className="bg-teal-light/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon
                  icon="fluent-emoji:credit-card"
                  width="40"
                  height="40"
                ></Icon>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-dark">
                دفع آمن
              </h3>
              <p className="text-gray-600 text-center">
                نظام دفع آمن وسهل الاستخدام مع إمكانية استرداد المبالغ
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover-lift">
              <div className="bg-coral-light/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Icon
                  icon="fluent-emoji:chart-increasing"
                  width="40"
                  height="40"
                ></Icon>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-dark">
                متابعة دقيقة
              </h3>
              <p className="text-gray-600 text-center">
                متابعة حالة المقابلات والمدفوعات بشكل مباشر ودقيق
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-dark relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-cherry">
              كيف تعمل المنصة
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 relative hover-lift">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-teal text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="text-center mb-4">
                  <Icon
                    icon="fluent-emoji:person-raising-hand"
                    width="64"
                    height="64"
                  ></Icon>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-dark">
                  سجل حساب جديد
                </h3>
                <p className="text-gray-600 text-center">
                  قم بإنشاء حساب جديد في المنصة واملأ بياناتك الشخصية
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 relative hover-lift">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-coral text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="text-center mb-4">
                  <Icon
                    icon="fluent-emoji:person-in-tuxedo"
                    width="64"
                    height="64"
                  ></Icon>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-dark">
                  اختر العامل المناسب
                </h3>
                <p className="text-gray-600 text-center">
                  تصفح قائمة العمال واختر العامل المناسب لاحتياجاتك
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 relative hover-lift">
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-teal-light text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="text-center mb-4">
                  <Icon
                    icon="fluent-emoji:handshake"
                    width="64"
                    height="64"
                  ></Icon>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-dark">
                  حدد موعد المقابلة
                </h3>
                <p className="text-gray-600 text-center">
                  حدد موعد المقابلة وقم بالدفع لتأكيد الحجز
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover-lift">
              <div className="text-teal text-4xl font-bold mb-2">+500</div>
              <div className="text-gray-600">عميل مسجل</div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover-lift">
              <div className="text-coral text-4xl font-bold mb-2">+200</div>
              <div className="text-gray-600">عامل محترف</div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover-lift">
              <div className="text-teal-light text-4xl font-bold mb-2">
                +1000
              </div>
              <div className="text-gray-600">مقابلة ناجحة</div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 text-center hover-lift">
              <div className="text-coral-light text-4xl font-bold mb-2">
                +50
              </div>
              <div className="text-gray-600">تخصص مختلف</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-dark to-teal text-white rounded-2xl shadow-xl overflow-hidden my-16 py-12 px-6">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">ابدأ الآن</h2>
            <p className="text-xl mb-8 opacity-90">
              انضم إلى آلاف العملاء والعمال الذين يستخدمون منصة تعيين يوميًا
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/register"
                className="bg-white text-teal hover:bg-gray-100 px-6 py-3 rounded-lg font-bold shadow-md transition-all flex items-center"
              >
                <Icon
                  icon="heroicons:user-plus"
                  className="ml-2"
                  width="24"
                  height="24"
                ></Icon>
                تسجيل حساب جديد
              </a>
              <a
                href="/login"
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold transition-all flex items-center"
              >
                <Icon
                  icon="heroicons:arrow-right-on-rectangle"
                  className="ml-2"
                  width="24"
                  height="24"
                ></Icon>
                تسجيل الدخول
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
