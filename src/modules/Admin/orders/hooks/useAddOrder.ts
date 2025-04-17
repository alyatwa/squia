"use client";
import { CreateOrderDocument, OrderCreateInput } from "@/gql/graphql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useAddOrder = () => {
  const router = useRouter();
  const [createOrder, { loading }] = useMutation(CreateOrderDocument, {
    onCompleted: ({ createOrder }) => {
      toast.success(
        "Order created successfully, redirecting to payment page..."
      );
      router.push(`/admin/orders/${createOrder.id}/payment`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const addOrder = async (createOrderInput: OrderCreateInput) => {
    try {
      await createOrder({
        variables: {
          createOrderInput,
        },
      });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return {
    addOrder,
    loading,
  };
};
