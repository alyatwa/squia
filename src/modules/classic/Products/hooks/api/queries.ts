import apiRequest from "@/config/request";
import { Product } from "@/types/Product.types";
import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";

export const productKeys = {
  getProduct: ["product"] as const,
  getProducts: ["get-products"] as const,
};

/*******************  get products *******************************/
export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await apiRequest.get<Product[]>(`/products?limit=10&page=1`);

  return data;
};
export const fetchProductsOptions: DefinedInitialDataOptions<Product[]> = {
  queryKey: ["get-products"],
  queryFn: fetchProducts,
  initialData: [],
};
export const useGetProducts = () => useQuery(fetchProductsOptions);
