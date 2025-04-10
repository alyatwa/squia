export enum ProductStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum ProductType {
  FRIDGES = "fridges",
  PACKAGES = "packages",
}

export interface Product {
  id: string;
  name: string;
  size: number;
  type: ProductType;
  status: ProductStatus;
  unitsCount: number;
  unitPrice: number;
  unitSize: number;
  packagePrice: number;
  description: string;
  companyName: string;
  companyEmail: string;
  createdAt: string;
}
