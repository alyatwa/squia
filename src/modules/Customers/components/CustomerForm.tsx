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
import {
  useAddCustomer,
  useDeleteCustomer,
  useUpdateCustomer,
} from "../hooks/api/mutations";
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
// import { useGetCustomers } from "../hooks/api/queries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Customer, CustomerStatus } from "@/types/Customer.types";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  status: z.nativeEnum(CustomerStatus),
});

export type CustomerFormValues = z.infer<typeof formSchema>;

interface CustomerFormProps {
  button: React.ReactNode;
  isUpdate?: boolean;
  customer?: Customer;
}

export const CustomerForm: React.FC<CustomerFormProps> = ({
  button,
  customer,
  isUpdate = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const { mutateAsync: addCustomer, isPending } = useAddCustomer();
  const { mutateAsync: updateCustomer, isPending: updatePending } =
    useUpdateCustomer();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: customer,
  });

  const onSubmit = async (values: CustomerFormValues) => {
    if (isUpdate && customer) {
      await updateCustomer({
        id: customer.id,
        details: values,
      });
      toast.success("Customer updated successfully");
    } else {
      await addCustomer(values);

      toast.success("Customer added successfully");
    }

    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isUpdate ? "Update customer" : "Add customer"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] p-4 pl-0 ">
          <Form {...form}>
            <form
              id="form-customer"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 px-2"
            >
              {/* name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                          aria-label="Select status of customer"
                        >
                          <SelectValue placeholder={"Status"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={CustomerStatus.ACTIVE}>
                            Active
                          </SelectItem>
                          <SelectItem value={CustomerStatus.SUSPENDED}>
                            Suspended
                          </SelectItem>
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
          <Button
            form="form-customer"
            type="submit"
            disabled={isPending || updatePending}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
