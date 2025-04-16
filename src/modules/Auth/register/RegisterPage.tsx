"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useMutation } from "@apollo/client";

// Shadcn components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SignupDocument } from "@/gql/graphql";
import { useRouter } from "next/navigation";

// Form schema with zod validation
const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "اسم المستخدم يجب أن يكون على الأقل 3 أحرف" }),
    email: z.string().email({ message: "يرجى إدخال بريد إلكتروني صحيح" }),
    password: z
      .string()
      .min(8, { message: "كلمة المرور يجب أن تكون على الأقل 8 أحرف" }),
    confirmPassword: z.string().min(1, { message: "تأكيد كلمة المرور مطلوب" }),
    role: z.enum(["worker", "client"], {
      required_error: "يرجى اختيار نوع الحساب",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمات المرور غير متطابقة",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export const RegisterPage: React.FC = () => {
  const router = useRouter();
  // Initialize react-hook-form
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "client",
    },
  });

  // Use GraphQL mutation
  const [signup, { loading: isLoading }] = useMutation(SignupDocument, {
    onCompleted: (data) => {
      router.push("/auth/login?registered=true");
    },
    onError: ({ message }) => {
      console.error("Error during signup:", message);
      form.setError("username", {
        type: "manual",
        message,
      });
    },
  });

  // Form submission handler
  const onSubmit = async (data: RegisterFormValues) => {
    await signup({
      variables: {
        signupInput: {
          name: data.username,
          username: data.username,
          email: data.email,
          password: data.password,
          role: data.role,
        },
      },
    });
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-full max-w-md">
        <Card className="border-0 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-accent-700 to-accent-500 p-6 text-white text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
              <Icon icon="fluent-emoji:office-worker" width={40} height={40} />
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              إنشاء حساب جديد
            </CardTitle>
          </div>

          <CardContent className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-light font-medium flex items-center">
                        <Icon
                          icon="heroicons:user"
                          className="ml-1"
                          width={20}
                          height={20}
                        />
                        اسم المستخدم
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="أدخل اسم المستخدم"
                          {...field}
                          className="px-4 py-3 rounded-lg"
                          autoComplete="username"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-light font-medium flex items-center">
                        <Icon
                          icon="heroicons:envelope"
                          className="ml-1"
                          width={20}
                          height={20}
                        />
                        البريد الإلكتروني
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="أدخل البريد الإلكتروني"
                          {...field}
                          className="px-4 py-3 rounded-lg"
                          autoComplete="email"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-light font-medium flex items-center">
                        <Icon
                          icon="heroicons:lock-closed"
                          className="ml-1"
                          width={20}
                          height={20}
                        />
                        كلمة المرور
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="أدخل كلمة المرور"
                          {...field}
                          className="px-4 py-3 rounded-lg"
                          autoComplete="new-password"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-dark-light font-medium flex items-center">
                        <Icon
                          icon="heroicons:lock-closed"
                          className="ml-1"
                          width={20}
                          height={20}
                        />
                        تأكيد كلمة المرور
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="أعد إدخال كلمة المرور"
                          {...field}
                          className="px-4 py-3 rounded-lg"
                          autoComplete="new-password"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-dark-light font-medium flex items-center">
                        <Icon
                          icon="heroicons:user-group"
                          className="ml-1"
                          width={20}
                          height={20}
                        />
                        نوع الحساب
                      </FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex   justify-around rounded-lg p-2 gap-4"
                          disabled={isLoading}
                        >
                          <FormItem className="flex items-center space-x-2 ltr:space-x-reverse cursor-pointer">
                            <FormControl>
                              <RadioGroupItem value="client" id="client" />
                            </FormControl>
                            <FormLabel
                              htmlFor="client"
                              className="font-normal cursor-pointer flex items-center gap-2"
                            >
                              عميل
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 ltr:space-x-reverse cursor-pointer">
                            <FormControl>
                              <RadioGroupItem value="worker" id="worker" />
                            </FormControl>
                            <FormLabel
                              htmlFor="worker"
                              className="font-normal cursor-pointer flex items-center gap-2"
                            >
                              عامل
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-700 to-accent-500 text-white py-6 rounded-lg font-bold hover:opacity-90 transition-opacity"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Icon
                      icon="eos-icons:loading"
                      className="mr-2 h-4 w-4 animate-spin"
                    />
                  ) : null}
                  إنشاء حساب
                </Button>
              </form>
            </Form>

            <div className="mt-4 text-center">
              <Link
                href="/auth/login"
                className="text-accent-600 hover:underline"
              >
                لديك حساب بالفعل؟ سجل دخول
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
