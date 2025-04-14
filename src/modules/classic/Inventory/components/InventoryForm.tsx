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
  useAddInventory,
  useDeleteInventory,
  useUpdateInventory,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Inventory,
  InventoryCategory,
  StockType,
} from "@/types/Inventory.types";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  quantity: z.number().int().positive(),
  companyName: z.string().nonempty(),
  inventoryNo: z.string().nonempty(),
  name: z.string().nonempty(),
  stockType: z.nativeEnum(StockType),
  category: z.nativeEnum(InventoryCategory),
  sellingPrice: z.number().int().positive(),
  buyingPrice: z.number().int().positive(),
});
export type InventoryFormValues = z.infer<typeof formSchema>;

interface InventoryFormProps {
  button: React.ReactNode;
  isUpdate?: boolean;
  inventory?: Inventory;
}

export const InventoryForm: React.FC<InventoryFormProps> = ({
  button,
  inventory,
  isUpdate = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const { mutateAsync: addInventory, isPending } = useAddInventory();
  const { mutateAsync: updateInventory, isPending: updatePending } =
    useUpdateInventory();

  const form = useForm<InventoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: inventory,
  });

  const onSubmit = async (values: InventoryFormValues) => {
    if (isUpdate && inventory) {
      await updateInventory({
        id: inventory.id,
        details: values,
      });
      toast.success("Inventory updated successfully");
    } else {
      await addInventory(values);

      toast.success("Inventory added successfully");
    }

    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isUpdate ? "Update inventory" : "Add inventory"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] p-4 pl-0 ">
          <Form {...form}>
            <form
              id="form-inventory"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 px-2"
            >
              {/* inventory selling price */}
              <FormField
                control={form.control}
                name="sellingPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Selling price</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* inventory buying price */}
              <FormField
                control={form.control}
                name="buyingPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Buying price</FormLabel>
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
              {/* stock name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* inventory type */}
              <FormField
                control={form.control}
                name="stockType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inventory type</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          id="stockType"
                          aria-label="Select type of inventory"
                        >
                          <SelectValue placeholder={"Inventory type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={StockType.PACKAGES}>
                            Packages
                          </SelectItem>
                          <SelectItem value={StockType.FRIDGES}>
                            Fridge
                          </SelectItem>
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
                          aria-label="Select category of inventory"
                        >
                          <SelectValue placeholder={"Category"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={InventoryCategory.PACKAGE_10}>
                            Package 10
                          </SelectItem>
                          <SelectItem value={InventoryCategory.PACKAGE_20}>
                            Package 20
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
            form="form-inventory"
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
