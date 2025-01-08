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
import { useAddOrder, useDeleteOrder, useUpdateOrder } from "../hooks/api/mutations";
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
// import { useGetOrders } from "../hooks/api/queries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Order, OrderCategory, OrderServiceType, OrderStatus, OrderType } from "@/types/Order.types";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  quantity: z.number().int().positive(),
  companyName: z.string().nonempty(),
  orderNo: z.string().nonempty(),
  customerName: z.string().nonempty(),
  orderType: z.nativeEnum(OrderType),
  category: z.nativeEnum(OrderCategory),
  serviceType: z.nativeEnum(OrderServiceType),
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
  const { mutateAsync:addOrder, isPending } = useAddOrder();
  const { mutateAsync:updateOrder, isPending:updatePending } = useUpdateOrder();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: order
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if(isUpdate && order){
      await updateOrder({
         id: order.id,
        details: values
        });  
        toast.success("Order updated successfully");
      } else{
        await addOrder({
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

        toast.success("Order added successfully");
      }

        setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
{isUpdate ? "Update order" : "Add order"}          
          </DialogTitle> 
        </DialogHeader>
        <ScrollArea className="h-[400px] p-4 pl-0 ">
          <Form {...form}>
            <form
              id="form-order"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 px-2"
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
                          <SelectItem value={OrderType.PACKAGES}>Packages</SelectItem>
                          <SelectItem value={OrderType.FRIDGES}>Fridge</SelectItem>
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
                          <SelectItem value={OrderCategory.PACKAGE_10}>Package 10</SelectItem>
                          <SelectItem value={OrderCategory.PACKAGE_20}>Package 20</SelectItem>
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
                          <SelectItem value={OrderServiceType.DELIVERY}>Delivery</SelectItem>
                          <SelectItem value={OrderServiceType.PICKUP}>Pickup</SelectItem>
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
          <Button form="form-order" type="submit" disabled={isPending||updatePending}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
