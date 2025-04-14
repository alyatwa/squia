import apiRequest from "@/config/request";
import { Customer } from "@/types/Customer.types";
import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

export const customerKeys = {
  getCustomer: ["customer"] as const,
  getCustomers: ["get-customers"] as const,
};

/*******************  get customers *******************************/
export const fetchCustomers = async (): Promise<Customer[]> => {
  const { data } = await apiRequest.get<Customer[]>(
    `/customers?limit=10&page=1`
  );

  return data;
};
export const fetchCustomersOptions: DefinedInitialDataOptions<Customer[]> = {
  queryKey: ["get-customers"],
  queryFn: fetchCustomers,
  initialData: [],
};
export const useGetCustomers = () => useQuery(fetchCustomersOptions);
