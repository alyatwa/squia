import { Role } from "@/modules/Auth/hooks/types";

// Extend the User type to include the role property
declare module "next-auth" {
  interface User {
    role?: Role;
  }
}
