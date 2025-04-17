"use client";
import {
  RemoveOrderDocument,
  OrderCreateInput,
  OrdersDocument,
} from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useRemoveOrder = () => {
  const router = useRouter();
  const [removeOrderMutate, { loading }] = useMutation(RemoveOrderDocument, {
    refetchQueries: [OrdersDocument],
    onCompleted: ({ removeOrder }) => {
      toast.success(
        "Order removed successfully, redirecting to orders page..."
      );
      router.push(`/admin/orders`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const removeOrder = async (id: string) => {
    try {
      await removeOrderMutate({
        variables: {
          removeOrderId: id,
        },
      });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return {
    removeOrder,
    loading,
  };
};
