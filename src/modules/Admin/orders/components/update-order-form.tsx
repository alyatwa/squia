"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateOrder } from "../hooks/useUpdateOrder";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { OrderUpdateInput } from "@/gql/graphql";
import { OrderStatus } from "@/types/Order.types";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  hoursDuty: z.string().optional(),
  price: z.number().optional(),
  amount: z.number().min(0, "Amount must be a positive number"),
  paymentPercentage: z.number().optional(),
  initialPayment: z.number().optional(),
  finalPayment: z.number().optional(),
  paymentMethod: z.string().optional(),
  paymentStatus: z.string(),
  status: z.string(),
});

type OrderFormValues = z.infer<typeof formSchema>;

interface UpdateOrderFormProps {
  order: {
    id: string;
    title: string;
    description?: string | null;
    hoursDuty?: string | null;
    price?: number | null;
    amount: number;
    paymentPercentage?: number | null;
    initialPayment?: number | null;
    finalPayment?: number | null;
    paymentMethod?: string | null;
    paymentStatus: string;
    status: string;
  };
  button: React.ReactNode;
}

export const UpdateOrderForm: React.FC<UpdateOrderFormProps> = ({
  order,
  button,
}) => {
  const [open, setOpen] = useState(false);
  const { updateOrder, loading } = useUpdateOrder();

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: order.title,
      description: order.description || "",
      hoursDuty: order.hoursDuty || "",
      price: order.price || undefined,
      amount: order.amount,
      paymentPercentage: order.paymentPercentage || undefined,
      initialPayment: order.initialPayment || undefined,
      finalPayment: order.finalPayment || undefined,
      paymentMethod: order.paymentMethod || "",
      paymentStatus: order.paymentStatus,
      status: order.status,
    },
  });

  async function onSubmit(values: OrderFormValues) {
    const updateOrderInput: OrderUpdateInput = {
      title: { set: values.title },
      description: { set: values.description || null },
      hoursDuty: { set: values.hoursDuty || null },
      price: { set: values.price || null },
      amount: { set: values.amount },
      paymentPercentage: { set: values.paymentPercentage || null },
      initialPayment: { set: values.initialPayment || null },
      finalPayment: { set: values.finalPayment || null },
      paymentMethod: { set: values.paymentMethod || null },
      paymentStatus: { set: values.paymentStatus },
      status: { set: values.status },
    };

    await updateOrder({
      id: order.id,
      updateOrderInput,
    });

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Update Order</Button> */}
        {button}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Update Order</DialogTitle>
          <DialogDescription>
            Update the order details and click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 px-1"
            >
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the order details..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Hours Duty */}
              <FormField
                control={form.control}
                name="hoursDuty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hours Duty</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Price and Amount */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              parseFloat(e.target.value) || undefined
                            )
                          }
                          value={field.value === undefined ? "" : field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseFloat(e.target.value) || 0)
                          }
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Payment Details */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <FormField
                  control={form.control}
                  name="paymentPercentage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Payment Percentage</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              parseFloat(e.target.value) || undefined
                            )
                          }
                          value={field.value === undefined ? "" : field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="initialPayment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Initial Payment</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              parseFloat(e.target.value) || undefined
                            )
                          }
                          value={field.value === undefined ? "" : field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="finalPayment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Final Payment</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(
                              parseFloat(e.target.value) || undefined
                            )
                          }
                          value={field.value === undefined ? "" : field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Payment Method */}
              <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Method</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Payment Status */}
              <FormField
                control={form.control}
                name="paymentStatus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Payment Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a payment status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="unpaid">Unpaid</SelectItem>
                        <SelectItem value="partially_paid">
                          Partially Paid
                        </SelectItem>
                        <SelectItem value="paid">Paid</SelectItem>
                        <SelectItem value="refunded">Refunded</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Order Status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order Status</FormLabel>
                    <Select
                      onValueChange={(e) => form.setValue("status", e)}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an order status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(OrderStatus).map((status) => (
                          <SelectItem key={status} value={status}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </ScrollArea>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button onClick={form.handleSubmit(onSubmit)} loading={loading}>
            {loading ? "Updating..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
