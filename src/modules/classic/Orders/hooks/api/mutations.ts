"use client";
import apiRequest from "@/config/request";
import { queryClient } from "@/reactQuery";
import { Order } from "@/types/Order.types";
import { useMutation } from "@tanstack/react-query";
import { OrderFormValues } from "../../components/OrderForm";

export const orderKeys = {
  addOrder: ["addOrder"] as const,
  updateOrder: ["updateOrder"] as const,
  deleteOrder: ["deleteOrder"] as const,
};

/*******************  add order *******************************/
export const addOrder = async (details: OrderFormValues): Promise<Order> => {
  const { data } = await apiRequest.post<Order>(`/order`, details);

  return data;
};

export const useAddOrder = () =>
  useMutation({
    mutationFn: (details: OrderFormValues) => addOrder(details),
    mutationKey: orderKeys.addOrder,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
    },
  });

/*******************  update order *******************************/
export const updateOrder = async ({
  id,
  details,
}: {
  id: string;
  details: Partial<Order>;
}): Promise<Order> => {
  const { data } = await apiRequest.put<Order>(`/order/${id}`, details);

  return data;
};

export const useUpdateOrder = () =>
  useMutation({
    mutationFn: updateOrder,
    mutationKey: orderKeys.updateOrder,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
    },
  });

/*******************  delete order *******************************/
export const deleteOrder = async (id: string): Promise<void> => {
  await apiRequest.delete(`/order/${id}`);
};

export const useDeleteOrder = () =>
  useMutation({
    mutationFn: deleteOrder,
    mutationKey: orderKeys.deleteOrder,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-orders"] });
    },
  });
