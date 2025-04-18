"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useMutation } from "@apollo/client";
import {
  CreateInterviewDocument,
  InterviewStatus,
  MeetingType,
} from "@/gql/graphql";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddInterviewDialogProps {
  onSuccess?: () => void;
  trigger?: React.ReactNode;
}

export const AddInterviewDialog = ({
  onSuccess,
  trigger,
}: AddInterviewDialogProps) => {
  const [open, setOpen] = useState(false);
  const [interviewData, setInterviewData] = useState({
    workerId: "",
    clientId: "",
    orderId: "",
    meetingType: MeetingType.Online,
    duration: 60, // Default duration in minutes
    notes: "",
  });
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("12:00");

  const { toast } = useToast();

  const [createInterview, { loading }] = useMutation(CreateInterviewDocument, {
    onCompleted: () => {
      toast({
        title: "تم إنشاء المقابلة بنجاح",
        description: "تمت إضافة المقابلة الجديدة بنجاح",
        variant: "default",
      });
      setOpen(false);
      resetForm();
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      toast({
        title: "حدث خطأ",
        description:
          error.message || "فشل إنشاء المقابلة، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    },
  });

  const resetForm = () => {
    setInterviewData({
      workerId: "",
      clientId: "",
      orderId: "",
      meetingType: MeetingType.Online,
      duration: 60,
      notes: "",
    });
    setDate(new Date());
    setTime("12:00");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      toast({
        title: "تاريخ المقابلة مطلوب",
        description: "يرجى تحديد تاريخ المقابلة",
        variant: "destructive",
      });
      return;
    }

    // Combine date and time
    const dateTime = new Date(date);
    const [hours, minutes] = time.split(":").map(Number);
    dateTime.setHours(hours, minutes, 0, 0);

    createInterview({
      variables: {
        data: {
          worker: { connect: { id: interviewData.workerId } },
          Client: { connect: { id: interviewData.clientId } },
          order: interviewData.orderId
            ? { connect: { id: interviewData.orderId } }
            : undefined,
          meetingType: interviewData.meetingType,
          duration: interviewData.duration,
          dateTime: dateTime.toISOString(),
          notes: interviewData.notes || undefined,
          status: InterviewStatus.Pending, // Default status
        },
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="inline-flex items-center gap-2">
            <Icon icon="heroicons:plus" width="20" height="20" />
            <span>إضافة مقابلة جديدة</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rtl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Icon icon="fluent-emoji:calendar" width="24" height="24" />
            إضافة مقابلة جديدة
          </DialogTitle>
          <DialogDescription>
            أدخل بيانات المقابلة الجديدة، وانقر على زر "إضافة" عند الانتهاء.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="clientId" className="text-right col-span-1">
                العميل
              </Label>
              <div className="col-span-3">
                <Select
                  value={interviewData.clientId}
                  onValueChange={(value) =>
                    setInterviewData({ ...interviewData, clientId: value })
                  }
                  required
                >
                  <SelectTrigger id="clientId">
                    <SelectValue placeholder="اختر العميل" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client-1">شركة الأهلي</SelectItem>
                    <SelectItem value="client-2">شركة البناء الحديث</SelectItem>
                    <SelectItem value="client-3">مؤسسة المستقبل</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="workerId" className="text-right col-span-1">
                العامل
              </Label>
              <div className="col-span-3">
                <Select
                  value={interviewData.workerId}
                  onValueChange={(value) =>
                    setInterviewData({ ...interviewData, workerId: value })
                  }
                  required
                >
                  <SelectTrigger id="workerId">
                    <SelectValue placeholder="اختر العامل" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="worker-1">أحمد محمد</SelectItem>
                    <SelectItem value="worker-2">خالد عبدالله</SelectItem>
                    <SelectItem value="worker-3">محمد سعيد</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="orderId" className="text-right col-span-1">
                الطلب
              </Label>
              <div className="col-span-3">
                <Select
                  value={interviewData.orderId}
                  onValueChange={(value) =>
                    setInterviewData({ ...interviewData, orderId: value })
                  }
                >
                  <SelectTrigger id="orderId">
                    <SelectValue placeholder="اختر الطلب (اختياري)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order-1">تصميم منزل سكني</SelectItem>
                    <SelectItem value="order-2">إنشاء مبنى تجاري</SelectItem>
                    <SelectItem value="order-3">تطوير حديقة عامة</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right col-span-1">
                التاريخ
              </Label>
              <div className="col-span-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-between text-right",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "yyyy/MM/dd") : "اختر التاريخ"}
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="time" className="text-right col-span-1">
                الوقت
              </Label>
              <div className="col-span-3">
                <Input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="text-right"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="meetingType" className="text-right col-span-1">
                نوع المقابلة
              </Label>
              <div className="col-span-3">
                <Select
                  value={interviewData.meetingType}
                  onValueChange={(value) =>
                    setInterviewData({
                      ...interviewData,
                      meetingType: value as MeetingType,
                    })
                  }
                  required
                >
                  <SelectTrigger id="meetingType">
                    <SelectValue placeholder="اختر نوع المقابلة" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.values(MeetingType).map((type) => (
                      <SelectItem key={type} value={type}>
                        {type === MeetingType.Online ? "عن بعد" : "شخصية"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right col-span-1">
                المدة (دقيقة)
              </Label>
              <div className="col-span-3">
                <Input
                  id="duration"
                  type="number"
                  min="15"
                  max="360"
                  step="15"
                  value={interviewData.duration}
                  onChange={(e) =>
                    setInterviewData({
                      ...interviewData,
                      duration: parseInt(e.target.value) || 60,
                    })
                  }
                  className="text-right"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="notes" className="text-right col-span-1 pt-2">
                ملاحظات
              </Label>
              <div className="col-span-3">
                <textarea
                  id="notes"
                  rows={3}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="أدخل أي ملاحظات إضافية هنا"
                  value={interviewData.notes}
                  onChange={(e) =>
                    setInterviewData({
                      ...interviewData,
                      notes: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              إلغاء
            </Button>
            <Button type="submit" loading={loading}>
              إضافة
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
