import { Icon } from "@iconify/react/dist/iconify.js";

interface WorkerContainerProps {
  onRemove: (id: string) => void;
  id: string;
}

export const Worker: React.FC<WorkerContainerProps> = ({ onRemove, id }) => {
  return (
    <div className="worker-card bg-white rounded-lg shadow-sm p-4 mb-4 relative">
      <div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            النشاط
          </label>
          <select
            name="workers[0][activity]"
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 worker-activity activity-field"
          >
            <option value="">اختر النشاط</option>
            <option value="المطاعم والمقاهي والفنادق">
              المطاعم والمقاهي والفنادق
            </option>
            <option value="البناء والصيانة والخدمات الفنية">
              البناء والصيانة والخدمات الفنية
            </option>
            <option value="الرعاية الصحية">الرعاية الصحية</option>
            <option value="تكنولوجيا المعلومات">تكنولوجيا المعلومات</option>
            <option value="المبيعات والمشتريات والتسويق">
              المبيعات والمشتريات والتسويق
            </option>
            <option value="صالونات التجميل وخدمات المساج">
              صالونات التجميل وخدمات المساج
            </option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              المسمى الوظيفي
            </label>
            <div className="position-field-container relative">
              <input
                type="text"
                name="workers[0][position]"
                list="job_titles_list_0"
                className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 worker-position position-field"
              />
              <div className="loading-indicator hidden absolute left-2 top-1/2 transform -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <datalist id="job_titles_list_0"></datalist>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              الجنسية
            </label>
            <select
              name="workers[0][nationality]"
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            >
              <option value="">اختر الجنسية</option>
              <option value="فلبيني">🇵🇭 فلبيني</option>
              <option value="نيبالي">🇳🇵 نيبالي</option>
              <option value="هندي">🇮🇳 هندي</option>
              <option value="بنغلاديشي">🇧🇩 بنغالي</option>
              <option value="باكستاني">🇵🇰 باكستاني</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              الكمية
            </label>
            <input
              type="number"
              name="workers[0][quantity]"
              min="1"
              className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            />
          </div>

          <div>
            <div className="flex flex-row gap-2">
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  الراتب (ريال)
                </label>
                <input
                  type="text"
                  name="workers[0][salary]"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 salary-field"
                  placeholder="تلقائي"
                  title="الراتب المتوقع"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 text-sm font-medium mb-1">
                  سعر النقل
                </label>
                <input
                  type="number"
                  name="workers[0][price]"
                  min="0"
                  step="0.01"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 price-field"
                  placeholder="تلقائي"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-2 left-2">
        <button
          onClick={() => onRemove(id)}
          type="button"
          className="delete-worker-btn text-red-500 hover:text-red-700 transition-colors"
          title="حذف العامل"
        >
          <Icon icon="heroicons:trash" width="20" height="20"></Icon>
        </button>
      </div>
    </div>
  );
};
