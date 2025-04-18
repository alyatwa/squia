"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { cn } from "@/lib/utils";
import { InterviewsDocument } from "@/gql/graphql";
import { AlertConfirm } from "@/components/shared/alert-confirm";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddInterviewDialog } from "../components/add-interview-dialog";

// Define interview status types with UI properties
export enum InterviewStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export const AdminInterviewsPage = () => {
  // Active tab state
  const [activeTab, setActiveTab] = useState<InterviewStatus>(
    InterviewStatus.PENDING
  );

  // Queries for each status tab
  const {
    data: pendingData,
    loading: pendingLoading,
    refetch: refetchPending,
  } = useQuery(InterviewsDocument, {
    variables: { where: { status: { equals: InterviewStatus.PENDING } } },
    fetchPolicy: "cache-and-network",
  });

  const {
    data: confirmedData,
    loading: confirmedLoading,
    refetch: refetchConfirmed,
  } = useQuery(InterviewsDocument, {
    variables: { where: { status: { equals: InterviewStatus.CONFIRMED } } },
    fetchPolicy: "cache-and-network",
  });

  const {
    data: completedData,
    loading: completedLoading,
    refetch: refetchCompleted,
  } = useQuery(InterviewsDocument, {
    variables: { where: { status: { equals: InterviewStatus.COMPLETED } } },
    fetchPolicy: "cache-and-network",
  });

  const {
    data: cancelledData,
    loading: cancelledLoading,
    refetch: refetchCancelled,
  } = useQuery(InterviewsDocument, {
    variables: { where: { status: { equals: InterviewStatus.CANCELLED } } },
    fetchPolicy: "cache-and-network",
  });

  // Function to refetch all interviews data
  const refetchAllInterviews = () => {
    refetchPending();
    refetchConfirmed();
    refetchCompleted();
    refetchCancelled();
  };

  // Organize the data
  const interviewsByStatus = {
    [InterviewStatus.PENDING]: {
      data: pendingData?.interviews || [],
      loading: pendingLoading,
      icon: "fluent-emoji:hourglass-not-done",
      title: "المقابلات في الانتظار",
      emptyMessage: "لا توجد مقابلات في الانتظار",
      emptyDescription: "لم يتم العثور على أي مقابلات في الانتظار في النظام.",
      badgeClass: "bg-yellow-100 text-yellow-800",
    },
    [InterviewStatus.CONFIRMED]: {
      data: confirmedData?.interviews || [],
      loading: confirmedLoading,
      icon: "fluent-emoji:check-mark-button",
      title: "المقابلات المؤكدة",
      emptyMessage: "لا توجد مقابلات مؤكدة",
      emptyDescription: "لم يتم العثور على أي مقابلات مؤكدة في النظام.",
      badgeClass: "bg-blue-100 text-blue-800",
    },
    [InterviewStatus.COMPLETED]: {
      data: completedData?.interviews || [],
      loading: completedLoading,
      icon: "fluent-emoji:check-mark-button",
      title: "المقابلات المكتملة",
      emptyMessage: "لا توجد مقابلات مكتملة",
      emptyDescription: "لم يتم العثور على أي مقابلات مكتملة في النظام.",
      badgeClass: "bg-green-100 text-green-800",
    },
    [InterviewStatus.CANCELLED]: {
      data: cancelledData?.interviews || [],
      loading: cancelledLoading,
      icon: "fluent-emoji:counterclockwise-arrows-button",
      title: "المقابلات الملغية",
      emptyMessage: "لا توجد مقابلات ملغية",
      emptyDescription: "لم يتم العثور على أي مقابلات ملغية في النظام.",
      badgeClass: "bg-red-100 text-red-800",
    },
  };

  // Format date helper function
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  // Format time helper function
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toTimeString().substring(0, 5); // HH:MM
  };

  // Format duration helper function
  const formatDuration = (durationMinutes: number) => {
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    if (hours > 0) {
      return `${hours} ساعة ${minutes > 0 ? `و ${minutes} دقيقة` : ""}`;
    }
    return `${minutes} دقيقة`;
  };

  // Common empty state component
  const EmptyState = ({
    icon,
    message,
    description,
  }: {
    icon: string;
    message: string;
    description: string;
  }) => (
    <div className="text-center py-12">
      <div className="min-h-[80px]">
        <Icon icon={icon} className="mx-auto mb-4" width="64" height="64" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{message}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );

  // Common loading state component
  const LoadingState = () => (
    <div className="text-center py-8">
      <Icon
        icon="line-md:loading-twotone-loop"
        className="mx-auto mb-2"
        width="48"
        height="48"
      />
      <p className="text-gray-500">جاري تحميل البيانات...</p>
    </div>
  );

  // Handle interview deletion
  const handleDeleteInterview = async (interviewId: string) => {
    // Implement delete functionality
    console.log(`Deleting interview with ID: ${interviewId}`);
    // TODO: Add actual delete mutation

    // Refresh data after deletion
    refetchAllInterviews();
  };

  return (
    <>
      {/* Page Header Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-dark mb-2 flex items-center">
              <Icon
                icon="fluent-emoji:calendar"
                width="32"
                height="32"
                className="ml-2"
              />
              إدارة المقابلات
            </h1>
            <p className="text-gray-600">
              يمكنك من هنا إدارة المقابلات وعرض بياناتها وتعديلها وحذفها.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
            <AddInterviewDialog
              onSuccess={refetchAllInterviews}
              trigger={
                <Button className="inline-flex items-center px-5 py-3 bg-gradient-to-l from-teal-600 to-teal-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-teal-500 hover:to-teal-400 transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  <span className="absolute -inset-x-1 bottom-0 h-1 bg-teal-300 opacity-50 rounded-full"></span>
                  <span className="relative flex items-center">
                    <span className="flex items-center justify-center bg-opacity-20 rounded-full p-1.5 mr-2">
                      <Icon
                        icon="heroicons:plus"
                        className="text-white"
                        width="18"
                        height="18"
                      />
                    </span>
                    <span>إنشاء مقابلة جديدة</span>
                  </span>
                </Button>
              }
            />
            <button
              type="button"
              className="inline-flex items-center px-5 py-3 bg-gradient-to-l from-blue-600 to-blue-500 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-400 transform hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="absolute -inset-x-1 bottom-0 h-1 bg-blue-300 opacity-50 rounded-full"></span>
              <span className="relative flex items-center">
                <span className="flex items-center justify-center bg-opacity-20 rounded-full p-1.5 mr-2">
                  <Icon
                    icon="heroicons:bell"
                    className="text-white"
                    width="18"
                    height="18"
                  />
                </span>
                <span>إرسال إشعارات المقابلات</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="search"
              className="block text-gray-700 text-sm font-medium mb-2"
            >
              بحث
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="ابحث عن عميل أو عامل..."
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                <Icon
                  icon="heroicons:magnifying-glass"
                  width="20"
                  height="20"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <label
                htmlFor="status-filter"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                الحالة
              </label>
              <select
                id="status-filter"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">جميع الحالات</option>
                <option value="pending">قيد الانتظار</option>
                <option value="confirmed">مؤكدة</option>
                <option value="completed">مكتملة</option>
                <option value="cancelled">ملغية</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="date-filter"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                التاريخ
              </label>
              <select
                id="date-filter"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">جميع التواريخ</option>
                <option value="today">اليوم</option>
                <option value="week">هذا الأسبوع</option>
                <option value="month">هذا الشهر</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Interviews Tabs and Content */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-2">
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value as InterviewStatus)}
          className="w-full"
        >
          <TabsList className="flex w-full mb-6 bg-transparent p-0 border-b border-gray-200 space-x-8 space-x-reverse">
            {Object.entries(interviewsByStatus).map(([status, statusInfo]) => (
              <TabsTrigger
                key={status}
                value={status}
                className={cn(
                  "flex items-center cursor-pointer gap-2 pb-4 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:font-medium",
                  "data-[state=active]:text-blue-600 data-[state=inactive]:text-gray-500 hover:text-gray-700",
                  "bg-transparent rounded-none px-0 mx-3"
                )}
              >
                <Icon
                  icon={statusInfo.icon}
                  className="ml-2"
                  width="20"
                  height="20"
                />
                <span>{statusInfo.title}</span>
                <span
                  className={cn(
                    "mr-2 text-xs font-medium px-2.5 py-0.5 rounded-full",
                    statusInfo.badgeClass
                  )}
                >
                  {statusInfo.data.length}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(interviewsByStatus).map(([status, statusInfo]) => (
            <TabsContent
              key={status}
              value={status}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              {statusInfo.loading ? (
                <LoadingState />
              ) : statusInfo.data.length === 0 ? (
                <EmptyState
                  icon={statusInfo.icon}
                  message={statusInfo.emptyMessage}
                  description={statusInfo.emptyDescription}
                />
              ) : (
                <div className="overflow-x-auto">
                  <Table className="text-sm" dir="rtl">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">الرقم</TableHead>
                        <TableHead className="text-right">العميل</TableHead>
                        <TableHead className="text-right">العامل</TableHead>
                        <TableHead className="text-right">
                          تاريخ المقابلة
                        </TableHead>
                        <TableHead className="text-right">
                          نوع المقابلة
                        </TableHead>
                        <TableHead className="text-right">المدة</TableHead>
                        <TableHead className="text-right">الحالة</TableHead>
                        <TableHead className="text-right">الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {statusInfo.data.map((interview, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="text-sm font-medium text-gray-900">
                              {index + 1}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <div className="ml-2">
                                <div className="text-sm font-medium text-gray-900">
                                  {interview.Client?.user?.name || "غير محدد"}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {interview.Client?.companyType || ""}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm font-medium text-gray-900">
                              {interview.worker?.user?.name || "غير محدد"}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-gray-900">
                              {interview.dateTime
                                ? formatDate(interview.dateTime)
                                : "غير محدد"}
                            </div>
                            <div className="text-xs text-gray-500">
                              {interview.dateTime
                                ? formatTime(interview.dateTime)
                                : ""}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-gray-900">
                              {interview.meetingType === "ONLINE"
                                ? "عن بعد"
                                : interview.meetingType === "IN_PERSON"
                                ? "شخصية"
                                : "غير محدد"}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="text-sm text-gray-900">
                              {interview.duration
                                ? formatDuration(interview.duration)
                                : "غير محدد"}
                            </div>
                          </TableCell>
                          <TableCell>
                            <span
                              className={cn(
                                "px-2 py-1 rounded-full text-xs font-medium",
                                status === InterviewStatus.PENDING
                                  ? "bg-yellow-100 text-yellow-800"
                                  : status === InterviewStatus.CONFIRMED
                                  ? "bg-blue-100 text-blue-800"
                                  : status === InterviewStatus.COMPLETED
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              )}
                            >
                              {status === InterviewStatus.PENDING
                                ? "قيد الانتظار"
                                : status === InterviewStatus.CONFIRMED
                                ? "مؤكدة"
                                : status === InterviewStatus.COMPLETED
                                ? "مكتملة"
                                : "ملغية"}
                            </span>
                          </TableCell>
                          <TableCell className="text-left">
                            <div className="flex items-center space-x-2 ltr:space-x-reverse">
                              <Link
                                href={`/admin/interviews/edit/${index}`}
                                className="inline-flex items-center"
                              >
                                <Button
                                  variant={"ghost"}
                                  size="icon"
                                  className="text-yellow-600 hover:text-yellow-900"
                                  title="تعديل المقابلة"
                                >
                                  <Icon
                                    icon="heroicons:pencil-square"
                                    width="20"
                                    height="20"
                                  />
                                </Button>
                              </Link>

                              <AlertConfirm
                                onConfirm={() =>
                                  handleDeleteInterview(index.toString())
                                }
                                title="هل أنت متأكد أنك تريد حذف المقابلة؟"
                                description="لا يمكن التراجع عن هذا الإجراء."
                                button={
                                  <Button
                                    variant={"ghost"}
                                    size="icon"
                                    type="button"
                                    className="text-red-600 hover:text-red-900 delete-btn"
                                    title="حذف المقابلة"
                                  >
                                    <Icon
                                      icon="heroicons:trash"
                                      width="20"
                                      height="20"
                                    />
                                  </Button>
                                }
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};
