import { Role } from "@/modules/Auth/hooks/types";
import { auth } from "@/modules/Auth/lib";
import { HomePage } from "@/modules/Home/HomePage";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  const role = session?.user?.role;
  if (session) {
    if (role === Role.Admin) {
      // Redirect to admin page
      redirect("/admin");
    } else if (role === Role.Client) {
      // Redirect to client page
      redirect("/client");
    } else if (role === Role.Worker) {
      // Redirect to worker page
      redirect("/worker");
    }
  }
  return <HomePage />;
}
