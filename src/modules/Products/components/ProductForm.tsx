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
  useAddProduct,
  useDeleteProduct,
  useUpdateProduct,
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
// import { useGetProducts } from "../hooks/api/queries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product, ProductStatus, ProductType } from "@/types/Product.types";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  name: z.string().nonempty(),
  size: z.number().positive(),
  type: z.nativeEnum(ProductType),
  status: z.nativeEnum(ProductStatus),
  unitsCount: z.number().int().positive(),
  unitPrice: z.number().positive(),
  unitSize: z.number().positive(),
  packagePrice: z.number().positive(),
  description: z.string().nonempty(),
  companyName: z.string().nonempty(),
  companyEmail: z.string().email(),
});

export type ProductFormValues = z.infer<typeof formSchema>;

interface ProductFormProps {
  button: React.ReactNode;
  isUpdate?: boolean;
  product?: Product;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  button,
  product,
  isUpdate = false,
}) => {
  const [open, setOpen] = React.useState(false);
  const { mutateAsync: addProduct, isPending } = useAddProduct();
  const { mutateAsync: updateProduct, isPending: updatePending } =
    useUpdateProduct();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: product,
  });

  const onSubmit = async (values: ProductFormValues) => {
    if (isUpdate && product) {
      await updateProduct({
        id: product.id,
        details: values,
      });
      toast.success("Product updated successfully");
    } else {
      await addProduct(values);

      toast.success("Product added successfully");
    }

    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isUpdate ? "Update product" : "Add product"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] p-4 pl-0 ">
          <Form {...form}>
            <form
              id="form-product"
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
              {/* size */}
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Size</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Select
                        {...field}
                        value={String(field.value)}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger
                          id="type"
                          aria-label="Select type of product"
                        >
                          <SelectValue placeholder={"Type"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={ProductType.PACKAGES}>
                            Packages
                          </SelectItem>
                          <SelectItem value={ProductType.FRIDGES}>
                            Fridge
                          </SelectItem>
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
                          aria-label="Select status of product"
                        >
                          <SelectValue placeholder={"Status"} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={ProductStatus.ACTIVE}>
                            Active
                          </SelectItem>
                          <SelectItem value={ProductStatus.INACTIVE}>
                            Inactive
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* unitsCount */}
              <FormField
                control={form.control}
                name="unitsCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Units Count</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* unitPrice */}
              <FormField
                control={form.control}
                name="unitPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* unitSize */}
              <FormField
                control={form.control}
                name="unitSize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit Size</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* packagePrice */}
              <FormField
                control={form.control}
                name="packagePrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package Price</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* companyName */}
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
              {/* companyEmail */}
              <FormField
                control={form.control}
                name="companyEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
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
            form="form-product"
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
