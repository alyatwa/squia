export enum CustomerStatus {
  ACTIVE = "active",
  SUSPENDED = "suspended",
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: CustomerStatus;
}
