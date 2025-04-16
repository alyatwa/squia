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
import { Control, useFormContext, useWatch } from "react-hook-form";
import { Activity, PricingListQuery, Specialty } from "@/gql/graphql";
import { useEffect } from "react";
import { OrderFormValues } from "../views/AdminAddOrderPage";

type Nationality = {
  id: string;
  name: string;
};

type WorkerFormProps = {
  index: number;
  onRemove: () => void;
  isRemovable: boolean;
  nationalities: Nationality[];
  specialties: Specialty[];
  activities: Activity[];
  pricingData?: PricingListQuery["pricingList"];
};

export const WorkerForm = ({
  index,
  onRemove,
  isRemovable,
  nationalities,
  specialties,
  activities,
  pricingData = [],
}: WorkerFormProps) => {
  const form = useFormContext<OrderFormValues>();
  const { control } = form;
  // Watch specialty, nationality, and activity to update salary range automatically
  const specialty = useWatch({
    control,
    name: `workers.${index}.specialty`,
  });

  const nationality = useWatch({
    control,
    name: `workers.${index}.nationality`,
  });

  const activity = useWatch({
    control,
    name: `workers.${index}.activity`,
  });

  // Calculate salary range based on selections
  useEffect(() => {
    if (specialty && nationality && activity && pricingData.length > 0) {
      const matchingPrice = pricingData.find(
        (price) =>
          price.specialty?.id === specialty &&
          price.nationality?.id === nationality &&
          price.activity?.id === activity
      );

      if (matchingPrice) {
        const salaryRange = `${matchingPrice.minWage} - ${matchingPrice.maxWage}`;
        // Update the salary field with the range
        form.setValue(`workers.${index}.salary`, salaryRange, {
          shouldDirty: true,
          shouldValidate: true,
        });
      }
    }
  }, [specialty, nationality, activity, pricingData, form, index]);

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
            name={`workers.${index}.specialty`}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 text-sm">التخصص</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="اختر التخصص" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty.id} value={specialty.id}>
                        {specialty.name}
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
                    readOnly
                    placeholder="تلقائي"
                    title="الراتب المتوقع"
                    className="bg-gray-50"
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
