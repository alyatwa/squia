"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// import { signIn } from "next-auth/react";

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
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

// Form schema with zod validation
const loginSchema = z.object({
  username: z.string().min(1, { message: "اسم المستخدم مطلوب" }),
  password: z.string().min(1, { message: "كلمة المرور مطلوبة" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  // Initialize react-hook-form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        usernameOrEmail: data.username,
        password: data.password,
        redirect: false,
      });

      if (result?.error) {
        setError("اسم المستخدم أو كلمة المرور غير صحيحة.");
      } else {
        // Redirect to dashboard on successful login
        router.push("/admin");
      }
    } catch (error) {
      setError("حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
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
              تسجيل الدخول
            </CardTitle>
            <CardDescription className="mt-2 text-white/80">
              أدخل بياناتك للوصول إلى لوحة تحكم الإدارة
            </CardDescription>
          </div>

          <CardContent className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {error && (
                  <Alert variant="destructive">
                    <Icon
                      icon="heroicons:exclamation-circle"
                      className="h-4 w-4 ml-2"
                    />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

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
                        الايميل
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
                          autoComplete="current-password"
                          disabled={isLoading}
                        />
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
                  تسجيل الدخول
                </Button>
              </form>
            </Form>

            {/* <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Icon
                    icon="heroicons:information-circle"
                    className="text-blue-500"
                    width={24}
                    height={24}
                  />
                </div>
                <div className="mr-3">
                  <p className="text-sm text-blue-700">
                    للاختبار، استخدم اسم المستخدم "admin" وكلمة المرور
                    "admin123"
                  </p>
                </div>
              </div>
            </div> */}

            <div className="mt-4 text-center">
              <Link
                href="/auth/register"
                className="text-accent-600 hover:underline"
              >
                ليس لديك حساب؟ سجل الآن
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* <div className="mt-6 flex justify-center space-x-4 space-x-reverse">
          <Link
            href="/auth/login"
            className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
          >
            <Icon
              icon="fluent-emoji:person"
              className="ml-1"
              width={24}
              height={24}
            />
            تسجيل دخول العميل
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/worker-login"
            className="flex items-center text-gray-600 hover:text-accent-600 transition-colors"
          >
            <Icon
              icon="fluent-emoji:construction-worker"
              className="ml-1"
              width={24}
              height={24}
            />
            تسجيل دخول العامل
          </Link>
        </div> */}
      </div>
    </div>
  );
};
