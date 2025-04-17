"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import "./AdminOrdersPage.module.css";
import { AlertConfirm } from "@/components/shared/alert-confirm";
import { AdminOrdersHeader } from "../components/orders-header";
import { useQuery } from "@apollo/client";
import { OrdersDocument, OrdersQuery } from "@/gql/graphql";
import { useState } from "react";
import { OrderUIStatus } from "@/types/Order.types";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui";
import { useRemoveOrder } from "../hooks/useRemoveOrder";
import { UpdateOrderForm } from "../components/update-order-form";

export const AdminOrdersPage = () => {
  const [activeTab, setActiveTab] = useState<OrderUIStatus>(
    OrderUIStatus.APPROVED
  );

  // Query for each status tab
  const { data: unapprovedData, loading: unapprovedLoading } = useQuery(
    OrdersDocument,
    {
      variables: { where: { status: { equals: OrderUIStatus.UNAPPROVED } } },
      fetchPolicy: "cache-and-network",
    }
  );

  const { data: APPROVEDData, loading: APPROVEDLoading } = useQuery(
    OrdersDocument,
    {
      variables: { where: { status: { equals: OrderUIStatus.APPROVED } } },
      fetchPolicy: "cache-and-network",
    }
  );

  const { data: newData, loading: newLoading } = useQuery(OrdersDocument, {
    variables: { where: { status: { equals: OrderUIStatus.NEW } } },
    fetchPolicy: "cache-and-network",
  });

  const { data: pendingData, loading: pendingLoading } = useQuery(
    OrdersDocument,
    {
      variables: { where: { status: { equals: OrderUIStatus.PENDING } } },
      fetchPolicy: "cache-and-network",
    }
  );

  const { data: completedData, loading: completedLoading } = useQuery(
    OrdersDocument,
    {
      variables: { where: { status: { equals: OrderUIStatus.COMPLETED } } },
      fetchPolicy: "cache-and-network",
    }
  );

  const { data: refundData, loading: refundLoading } = useQuery(
    OrdersDocument,
    {
      variables: { where: { status: { equals: OrderUIStatus.REFUND } } },
      fetchPolicy: "cache-and-network",
    }
  );

  // Organize the data
  const ordersByStatus = {
    [OrderUIStatus.UNAPPROVED]: {
      data: unapprovedData?.orders || [],
      loading: unapprovedLoading,
      icon: "fluent-emoji:warning",
      title: "الطلبات غير المعتمدة",
      emptyMessage: "لا توجد طلبات غير معتمدة",
      emptyDescription: "لم يتم العثور على أي طلبات غير معتمدة في النظام.",
      badgeClass: "bg-gray-100 text-gray-800",
    },
    [OrderUIStatus.APPROVED]: {
      data: APPROVEDData?.orders || [],
      loading: APPROVEDLoading,
      icon: "fluent-emoji:check-mark-button",
      title: "تعميد الطلبات المدفوعة",
      emptyMessage: "لا توجد طلبات معمدة",
      emptyDescription: "لم يتم العثور على أي طلبات معمدة في النظام.",
      badgeClass: "bg-blue-100 text-blue-800",
    },
    [OrderUIStatus.NEW]: {
      data: newData?.orders || [],
      loading: newLoading,
      icon: "fluent-emoji:package",
      title: "الطلبات الجديدة",
      emptyMessage: "لا توجد طلبات جديدة",
      emptyDescription: "لم يتم العثور على أي طلبات جديدة في النظام.",
      badgeClass: "bg-red-100 text-red-800",
    },
    [OrderUIStatus.PENDING]: {
      data: pendingData?.orders || [],
      loading: pendingLoading,
      icon: "fluent-emoji:hourglass-not-done",
      title: "الطلبات المعلقة",
      emptyMessage: "لا توجد طلبات معلقة",
      emptyDescription: "لم يتم العثور على أي طلبات معلقة في النظام.",
      badgeClass: "bg-yellow-100 text-yellow-800",
    },
    [OrderUIStatus.COMPLETED]: {
      data: completedData?.orders || [],
      loading: completedLoading,
      icon: "fluent-emoji:check-mark-button",
      title: "الطلبات المكتملة",
      emptyMessage: "لا توجد طلبات مكتملة",
      emptyDescription: "لم يتم العثور على أي طلبات مكتملة في النظام.",
      badgeClass: "bg-green-100 text-green-800",
    },
    [OrderUIStatus.REFUND]: {
      data: refundData?.orders || [],
      loading: refundLoading,
      icon: "fluent-emoji:counterclockwise-arrows-button",
      title: "طلبات الاسترجاع",
      emptyMessage: "لا توجد طلبات استرجاع",
      emptyDescription: "لم يتم العثور على أي طلبات استرجاع في النظام.",
      badgeClass: "bg-purple-100 text-purple-800",
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
        <Icon icon={icon} className="mx-auto mb-4 " width="64" height="64" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{message}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );

  // Common loading state component
  const LoadingState = () => (
    <div className="text-center py-8  ">
      <Icon
        icon="line-md:loading-twotone-loop"
        className="mx-auto mb-2"
        width="48"
        height="48"
      />
      <p className="text-gray-500">جاري تحميل البيانات...</p>
    </div>
  );

  // Common order table component
  const OrderTable = ({
    orders,
    loading,
    statusInfo,
    showFinalPayment = false,
  }: {
    orders: OrdersQuery["orders"];
    loading: boolean;
    statusInfo: {
      icon: string;
      title: string;
      emptyMessage: string;
      emptyDescription: string;
      badgeClass: string;
    };
    showFinalPayment?: boolean;
  }) => {
    if (loading) return <LoadingState />;

    if (orders.length === 0) {
      return (
        <EmptyState
          icon={statusInfo.icon}
          message={statusInfo.emptyMessage}
          description={statusInfo.emptyDescription}
        />
      );
    }

    const { removeOrder, loading: loadingRemove } = useRemoveOrder();

    const handleDeleteOrder = async (orderId: string) => {
      await removeOrder(orderId);
    };

    return (
      <div className="overflow-x-auto">
        <Table className="text-sm" dir="rtl">
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">العنوان</TableHead>
              <TableHead className="text-right">العميل</TableHead>
              <TableHead className="text-right">المبلغ</TableHead>
              {showFinalPayment && (
                <TableHead className="text-right">الدفعة النهائية</TableHead>
              )}
              <TableHead className="text-right">تاريخ الإنشاء</TableHead>
              <TableHead className="text-right">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="text-sm font-medium text-gray-900">
                    {order.title}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <div className="ml-2">
                      <div className="text-sm font-medium text-gray-900">
                        {order.client?.user?.username || "غير محدد"}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-900">
                    {order.amount} ريال
                  </div>
                </TableCell>
                {showFinalPayment && (
                  <TableCell>
                    <div className="text-sm text-gray-900">
                      {order.finalPayment || 0} ريال
                    </div>
                  </TableCell>
                )}
                <TableCell>
                  <div className="text-sm text-gray-900">
                    {formatDate(order.createdAt)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatTime(order.createdAt)}
                  </div>
                </TableCell>
                <TableCell className="text-left">
                  <div className="flex items-center space-x-2 ltr:space-x-reverse">
                    {/* update button */}
                    <UpdateOrderForm
                      order={order}
                      button={
                        <Button
                          variant={"ghost"}
                          size="icon"
                          className="text-yellow-600 hover:text-yellow-900"
                          title="تحديث الطلب"
                        >
                          <Icon
                            icon="heroicons:pencil-square"
                            width="20"
                            height="20"
                          />
                        </Button>
                      }
                    />

                    {activeTab === OrderUIStatus.UNAPPROVED && (
                      <a
                        href={`/admin/order-payment/${order.id}`}
                        className="text-green-600 hover:text-green-900"
                        title="دفع الطلب"
                      >
                        <Icon
                          icon="heroicons:credit-card"
                          width="20"
                          height="20"
                        />
                      </a>
                    )}

                    {activeTab === OrderUIStatus.APPROVED && (
                      <button
                        type="button"
                        className="text-green-600 hover:text-green-900"
                        title="إكمال الطلب"
                      >
                        <Icon
                          icon="heroicons:check-circle"
                          width="20"
                          height="20"
                        />
                      </button>
                    )}

                    {activeTab === OrderUIStatus.UNAPPROVED && (
                      <div className="status-dropdown relative">
                        <button
                          type="button"
                          className="text-gray-600 hover:text-gray-900"
                          title="تغيير حالة الطلب"
                        >
                          <Icon
                            icon="heroicons:ellipsis-vertical"
                            width="20"
                            height="20"
                          />
                        </button>
                      </div>
                    )}

                    <AlertConfirm
                      onConfirm={() => handleDeleteOrder(order.id)}
                      title="هل أنت متأكد أنك تريد حذف الطلب؟"
                      description="لا يمكن التراجع عن هذا الإجراء."
                      button={
                        <Button
                          variant={"ghost"}
                          size="icon"
                          loading={loadingRemove}
                          type="button"
                          className="text-red-600 hover:text-red-900 delete-btn"
                          title="حذف الطلب"
                        >
                          <Icon icon="heroicons:trash" width="20" height="20" />
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
    );
  };

  return (
    <>
      <AdminOrdersHeader />

      <div className="bg-white rounded-2xl shadow-md p-6 mb-8 fade-in-up fade-in-up-2">
        <Tabs
          defaultValue={activeTab}
          onValueChange={(value) => setActiveTab(value as OrderUIStatus)}
          className="w-full"
        >
          <TabsList className="flex w-full mb-6 bg-transparent p-0 border-b border-gray-200 space-x-8 space-x-reverse">
            {Object.entries(ordersByStatus).map(([status, statusInfo]) => (
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

          {Object.entries(ordersByStatus).map(([status, statusInfo]) => (
            <TabsContent
              key={status}
              value={status}
              className="focus-visible:outline-none focus-visible:ring-0"
            >
              <OrderTable
                orders={statusInfo.data}
                loading={statusInfo.loading}
                statusInfo={statusInfo}
                showFinalPayment
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
};
