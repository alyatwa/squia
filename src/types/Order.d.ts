interface Order {
  id: string;
  orderType: "fridges" | "packages";
  category: "package_10" | "package_20";
  createdAt: Date;
  quantity: number;
  companyName: string;
  status: "pending" | "completed" | "cancelled";
  customerName: string;
  orderNo: string;
  serviceType: "delivery" | "pickup";
  amount: number;
}
