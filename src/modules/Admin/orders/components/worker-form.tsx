import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Control } from "react-hook-form";

type WorkerFormProps = {
  index: number;
  control: Control<any>;
  onRemove: () => void;
  isRemovable: boolean;
};

export const WorkerForm = ({
  index,
  control,
  onRemove,
  isRemovable,
}: WorkerFormProps) => {
  // Activities
  const activities = [
    { id: "المطاعم والمقاهي والفنادق", name: "المطاعم والمقاهي والفنادق" },
    {
      id: "البناء والصيانة والخدمات الفنية",
      name: "البناء والصيانة والخدمات الفنية",
    },
    { id: "الرعاية الصحية", name: "الرعاية الصحية" },
    { id: "تكنولوجيا المعلومات", name: "تكنولوجيا المعلومات" },
    {
      id: "المبيعات والمشتريات والتسويق",
      name: "المبيعات والمشتريات والتسويق",
    },
    {
      id: "صالونات التجميل وخدمات المساج",
      name: "صالونات التجميل وخدمات المساج",
    },
  ];

  // Nationalities
  const nationalities = [
    { id: "فلبيني", name: "🇵🇭 فلبيني" },
    { id: "نيبالي", name: "🇳🇵 نيبالي" },
    { id: "هندي", name: "🇮🇳 هندي" },
    { id: "بنغلاديشي", name: "🇧🇩 بنغالي" },
    { id: "باكستاني", name: "🇵🇰 باكستاني" },
  ];

  // Job positions
  const positions = [
    { id: "عامل بناء", name: "عامل بناء" },
    { id: "سائق", name: "سائق" },
    { id: "كهربائي", name: "كهربائي" },
    { id: "سباك", name: "سباك" },
    { id: "حارس", name: "حارس" },
    { id: "نجار", name: "نجار" },
  ];

  return (
    <Card className="bg-white shadow-sm">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="font-medium text-gray-800 flex items-center">
            <Icon
              icon="fluent-emoji:person"
              className="ml-2"
              width="18"
              height="18"
            />
            عامل {index + 1}
          </h4>
          {isRemovable && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onRemove}
              className="text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Icon icon="heroicons:trash" width="18" height="18" />
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <FormField
            control={control}
            name={`workers.${index}.activity`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm">النشاط</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر النشاط" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {activities.map((activity) => (
                      <SelectItem key={activity.id} value={activity.id}>
                        {activity.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormField
            control={control}
            name={`workers.${index}.position`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm">
                  المسمى الوظيفي
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر المسمى الوظيفي" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {positions.map((position) => (
                      <SelectItem key={position.id} value={position.id}>
                        {position.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`workers.${index}.nationality`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm">الجنسية</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الجنسية" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {nationalities.map((nationality) => (
                      <SelectItem key={nationality.id} value={nationality.id}>
                        {nationality.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={control}
            name={`workers.${index}.quantity`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm">الكمية</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="1"
                    {...field}
                    onChange={(e) =>
                      field.onChange(parseInt(e.target.value, 10))
                    }
                    placeholder="أدخل الكمية"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`workers.${index}.salary`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm">
                  الراتب (ريال)
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    {...field}
                    placeholder="تلقائي"
                    title="الراتب المتوقع"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`workers.${index}.price`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm">
                  سعر النقل
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    {...field}
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                    placeholder="تلقائي"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};
