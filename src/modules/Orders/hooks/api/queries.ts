"use client";
import apiRequest from "@/config/request";
import { Order } from "@/types/Order.types";
import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

export const orderKeys = {
  getOrder: ["order"] as const,
  getOrders: ["orders"] as const,
};

/*******************  get orders *******************************/
export const fetchOrders = async (): Promise<Order[]> => {
  const { data } = await apiRequest.get<Order[]>(`/orders?limit=10&page=1`);

  return data;
};
export const fetchOrdersOptions: DefinedInitialDataOptions<Order[]> = {
  queryKey: ["get-orders"],
  queryFn: fetchOrders,
  initialData: [],
  // enabled: false,
};
export const useGetOrders = () => useQuery(fetchOrdersOptions);
