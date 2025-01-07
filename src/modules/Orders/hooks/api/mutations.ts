"use client";
import apiRequest from "@/config/request";
import { useMutation } from "@tanstack/react-query";

export const orderKeys = {
  addOrder: ["addOrder"] as const,
  updateOrder: ["updateOrder"] as const,
  deleteOrder: ["deleteOrder"] as const,
};

/*******************  add order *******************************/
export const addOrder = async (details: Order): Promise<Order> => {
  const { data } = await apiRequest.post<Order>(`/order`, details);

  return data;
};

export const useAddOrder = () =>
  useMutation({
    mutationFn: (details: Order) => addOrder(details),
    mutationKey: orderKeys.addOrder,
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
  });

/*******************  delete order *******************************/
export const deleteOrder = async (id: string): Promise<void> => {
  await apiRequest.delete(`/order/${id}`);
};

export const useDeleteOrder = () =>
  useMutation({
    mutationFn: deleteOrder,
    mutationKey: orderKeys.deleteOrder,
  });
