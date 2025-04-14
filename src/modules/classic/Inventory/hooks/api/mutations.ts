"use client";
import apiRequest from "@/config/request";
import { queryClient } from "@/reactQuery";
import { Inventory } from "@/types/Inventory.types";
import { useMutation } from "@tanstack/react-query";
import { InventoryFormValues } from "../../components/InventoryForm";

export const inventoryKeys = {
  addInventory: ["addInventory"] as const,
  updateInventory: ["updateInventory"] as const,
  deleteInventory: ["deleteInventory"] as const,
};

/*******************  add inventory *******************************/
export const addInventory = async (
  details: InventoryFormValues
): Promise<Inventory> => {
  const { data } = await apiRequest.post<Inventory>(`/inventory`, details);

  return data;
};

export const useAddInventory = () =>
  useMutation({
    mutationFn: (details: InventoryFormValues) => addInventory(details),
    mutationKey: inventoryKeys.addInventory,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-inventory"] });
    },
  });

/*******************  update inventory *******************************/
export const updateInventory = async ({
  id,
  details,
}: {
  id: string;
  details: Partial<Inventory>;
}): Promise<Inventory> => {
  const { data } = await apiRequest.put<Inventory>(`/inventory/${id}`, details);

  return data;
};

export const useUpdateInventory = () =>
  useMutation({
    mutationFn: updateInventory,
    mutationKey: inventoryKeys.updateInventory,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-inventory"] });
    },
  });

/*******************  delete inventory *******************************/
export const deleteInventory = async (id: string): Promise<void> => {
  await apiRequest.delete(`/inventory/${id}`);
};

export const useDeleteInventory = () =>
  useMutation({
    mutationFn: deleteInventory,
    mutationKey: inventoryKeys.deleteInventory,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-inventory"] });
    },
  });
