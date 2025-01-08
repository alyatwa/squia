import apiRequest from "@/config/request";
import { Inventory } from "@/types/Inventory.types";
import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

export const inventoryKeys = {
  getInventory: ["get-inventory"] as const,
};

/*******************  get inventory *******************************/
export const fetchInventory = async (): Promise<Inventory[]> => {
  const { data } = await apiRequest.get<Inventory[]>(
    `/inventory?limit=10&page=1`
  );

  return data;
};
export const fetchInventoryOptions: DefinedInitialDataOptions<Inventory[]> = {
  queryKey: ["get-inventory"],
  queryFn: fetchInventory,
  initialData: [],
};
export const useGetInventory = () => useQuery(fetchInventoryOptions);
