"use client";
import apiRequest from "@/config/request";
import { useQuery } from "@tanstack/react-query";

export const orderKeys = {
  getOrder: ["order"] as const,
  getOrders: ["orders"] as const,
};

/*******************  get orders *******************************/
export const fetchOrders = async (): Promise<Order[]> => {
  const { data } = await apiRequest.get<Order[]>(`/orders?limit=10&page=1`);

  return data;
};
export const fetchOrdersOptions = {
  queryKey: orderKeys.getOrders,
  queryFn: () => fetchOrders(),
};
export const useGetOrders = () => useQuery(fetchOrdersOptions);
