import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/Logo";
import Link from "next/link";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "/overview",
        },
      ],
    },
    {
      title: "Orders",
      url: "#",
      items: [
        {
          title: "Manage Orders",
          url: "/orders",
        },
      ],
    },
    {
      title: "Customers",
      url: "#",
      items: [
        {
          title: "Manage customers",
          url: "/customers",
        },
      ],
    },
    {
      title: "Inventory",
      url: "#",
      items: [
        {
          title: "Manage Inventory",
          url: "/inventory",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      // isActive={item.isActive}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
