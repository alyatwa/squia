import apiRequest from "@/config/request";
import { queryClient } from "@/reactQuery";
import { Customer } from "@/types/Customer.types";
import { useMutation } from "@tanstack/react-query";
import { CustomerFormValues } from "../../components/CustomerForm";

export const customerKeys = {
  addCustomer: ["addCustomer"] as const,
  updateCustomer: ["updateCustomer"] as const,
  deleteCustomer: ["deleteCustomer"] as const,
};

/*******************  add customer *******************************/
export const addCustomer = async (
  details: CustomerFormValues
): Promise<Customer> => {
  const { data } = await apiRequest.post<Customer>(`/customer`, details);

  return data;
};

export const useAddCustomer = () =>
  useMutation({
    mutationFn: (details: CustomerFormValues) => addCustomer(details),
    mutationKey: customerKeys.addCustomer,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-customers"] });
    },
  });

/*******************  update customer *******************************/
export const updateCustomer = async ({
  id,
  details,
}: {
  id: string;
  details: Partial<Customer>;
}): Promise<Customer> => {
  const { data } = await apiRequest.put<Customer>(`/customer/${id}`, details);

  return data;
};

export const useUpdateCustomer = () =>
  useMutation({
    mutationFn: updateCustomer,
    mutationKey: customerKeys.updateCustomer,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-customers"] });
    },
  });

/*******************  delete customer *******************************/
export const deleteCustomer = async (id: string): Promise<void> => {
  await apiRequest.delete(`/customer/${id}`);
};

export const useDeleteCustomer = () =>
  useMutation({
    mutationFn: deleteCustomer,
    mutationKey: customerKeys.deleteCustomer,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-customers"] });
    },
  });
