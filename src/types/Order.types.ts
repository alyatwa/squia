export enum OrderStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
}

export interface Order {
  id: string;
  orderType: "fridges" | "packages";
  category: "package_10" | "package_20";
  createdAt: Date;
  quantity: number;
  companyName: string;
  status: OrderStatus;
  customerName: string;
  orderNo: string;
  serviceType: "delivery" | "pickup";
  amount: number;
}
