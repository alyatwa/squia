export enum OrderStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
}

export enum OrderType {
  FRIDGES = "fridges",
  PACKAGES = "packages",
}

export enum OrderCategory {
  PACKAGE_10 = "package_10",
  PACKAGE_20 = "package_20",
}

export enum OrderServiceType {
  DELIVERY = "delivery",
  PICKUP = "pickup",
}

// Updated order status to match the UI tabs
export enum OrderUIStatus {
  UNAPPROVED = "unapproved",
  APPROVED = "approved",
  NEW = "new",
  PENDING = "pending",
  COMPLETED = "completed",
  REFUND = "refund",
  CANCELLED = "cancelled",
}

export interface Order {
  id: string;
  orderType: OrderType;
  category: OrderCategory;
  createdAt: Date;
  quantity: number;
  companyName: string;
  status: OrderStatus;
  customerName: string;
  orderNo: string;
  serviceType: OrderServiceType;
  amount: number;
}
