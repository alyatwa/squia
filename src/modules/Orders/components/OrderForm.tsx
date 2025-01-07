"use client";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useAddOrder } from "../hooks/api/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import React from "react";
import { useGetOrders } from "../hooks/api/queries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order, OrderStatus } from "@/types/Order.types";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  quantity: z.number().int().positive(),
  companyName: z.string().nonempty(),
  orderNo: z.string().nonempty(),
  customerName: z.string().nonempty(),
  orderType: z.string().nonempty(),
  category: z.string().nonempty(),
  serviceType: z.string().nonempty(),
  status: z.nativeEnum(OrderStatus),
});

interface OrderFormProps {
  button: React.ReactNode;
  isUpdate?: boolean;
  order?: Order;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  button,
  order,
  isUpdate = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const { refetch } = useGetOrders();
  const { mutateAsync, isPending } = useAddOrder();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    await mutateAsync({
      id: "",
      orderType: "fridges",
      category: "package_10",
      createdAt: new Date(),
      quantity: 0,
      companyName: "",
      status: OrderStatus.PENDING,
      customerName: "",
      orderNo: "",
      serviceType: "delivery",
      amount: 0,
    });
    refetch();
    setOpen(false);
    toast.success("Order added successfully");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Order</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] p-4 pl-0 ">
          <Form {...form}>
            <form
              id="form-order"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-1"
            >
              {/* order NO */}
              <FormField
                control={form.control}
                name="orderNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order No</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Order Number</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* quantity */}
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Order quantity</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* company name */}
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Company Name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* customer name */}
              <FormField
                control={form.control}
                name="customerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Customer Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>Customer Name</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* order type */}
              <FormField
                control={form.control}
                name="orderType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order type</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          id="orderType"
                          aria-label="Select type of order"
                        >
                          <SelectValue placeholder={"Order type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="package">Packages</SelectItem>
                          <SelectItem value="fridge">Fridge</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* category*/}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          id="category"
                          aria-label="Select category of order"
                        >
                          <SelectValue placeholder={"Category"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="package_10">Package 10</SelectItem>
                          <SelectItem value="package_20">Package 20</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* service type */}
              <FormField
                control={form.control}
                name="serviceType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service type</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          id="serviceType"
                          aria-label="Select service type"
                        >
                          <SelectValue placeholder={"Service type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delivery">Delivery</SelectItem>
                          <SelectItem value="pickup">Pickup</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* status */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          id="status"
                          aria-label="Select status of order"
                        >
                          <SelectValue placeholder={"Status"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="approved">Approved</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                          <SelectItem value="shipped">Shipped</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </ScrollArea>
        <DialogFooter>
          <Button form="form-order" type="submit" disabled={isPending}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
