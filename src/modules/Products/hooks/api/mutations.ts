"use client";
import apiRequest from "@/config/request";
import { queryClient } from "@/reactQuery";
import { Product } from "@/types/Product.types";
import { useMutation } from "@tanstack/react-query";
import { ProductFormValues } from "../../components/ProductForm";

export const productKeys = {
  addProduct: ["addProduct"] as const,
  updateProduct: ["updateProduct"] as const,
  deleteProduct: ["deleteProduct"] as const,
};

/*******************  add product *******************************/
export const addProduct = async (
  details: ProductFormValues
): Promise<Product> => {
  const { data } = await apiRequest.post<Product>(`/product`, details);

  return data;
};

export const useAddProduct = () =>
  useMutation({
    mutationFn: (details: ProductFormValues) => addProduct(details),
    mutationKey: productKeys.addProduct,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
    },
  });

/*******************  update product *******************************/
export const updateProduct = async ({
  id,
  details,
}: {
  id: string;
  details: Partial<Product>;
}): Promise<Product> => {
  const { data } = await apiRequest.put<Product>(`/product/${id}`, details);

  return data;
};

export const useUpdateProduct = () =>
  useMutation({
    mutationFn: updateProduct,
    mutationKey: productKeys.updateProduct,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
    },
  });

/*******************  delete product *******************************/
export const deleteProduct = async (id: string): Promise<void> => {
  await apiRequest.delete(`/product/${id}`);
};

export const useDeleteProduct = () =>
  useMutation({
    mutationFn: deleteProduct,
    mutationKey: productKeys.deleteProduct,
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["get-products"] });
    },
  });
