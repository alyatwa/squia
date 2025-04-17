"use client";
import {
  UpdateOrderDocument,
  OrderUpdateInput,
  OrdersDocument,
} from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useUpdateOrder = () => {
  const router = useRouter();
  const [updateOrderMutate, { loading }] = useMutation(UpdateOrderDocument, {
    refetchQueries: [OrdersDocument],
    onCompleted: ({ updateOrder }) => {
      toast.success(
        "Order updated successfully, redirecting to orders page..."
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const updateOrder = async ({
    updateOrderInput,
    id,
  }: {
    id: string;
    updateOrderInput: OrderUpdateInput;
  }) => {
    try {
      await updateOrderMutate({
        variables: {
          updateOrderId: id,
          updateOrderInput,
        },
      });
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return {
    updateOrder,
    loading,
  };
};
