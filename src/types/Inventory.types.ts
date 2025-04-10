export enum StockType {
  FRIDGES = "fridges",
  PACKAGES = "packages",
}

export enum InventoryCategory {
  PACKAGE_10 = "package_10",
  PACKAGE_20 = "package_20",
}

export interface Inventory {
  id: string;
  stockType: StockType;
  category: InventoryCategory;
  name: string;
  quantity: number;
  companyName: string;
  sellingPrice: number;
  buyingPrice: number;
  createdAt: Date;
}
