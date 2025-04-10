"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { motion } from "framer-motion";

interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {
  breadcrumbs: {
    url: string;
    title: string;
  }[];
}

const Body = React.forwardRef<HTMLDivElement, BodyProps>(
  ({ className, breadcrumbs, children }, ref) => {
    return (
      <>
        <div className="absolute h-[168px] w-full bg-[linear-gradient(rgb(217,230,255)_0%,rgba(242,238,249,0)_100%)] dark:bg-none"></div>
        <header
          ref={ref}
          data-layout="body-admin"
          className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4"
        >
          <div className="flex items-center w-full justify-between gap-2 px-4">
            <div className="flex items-center gap-2 ">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {[{ title: "Home", url: "/overview" }, ...breadcrumbs].map(
                    (item, i) => (
                      <div
                        className="flex flex-row-reverse gap-2 items-center"
                        key={i}
                      >
                        <BreadcrumbItem
                          key={item.title}
                          className="hidden md:block"
                        >
                          <BreadcrumbLink href={item.url}>
                            {item.title}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        {breadcrumbs.length > 0 &&
                          breadcrumbs.length - 1 !== i && (
                            <BreadcrumbSeparator className="hidden md:block" />
                          )}
                      </div>
                    )
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <ModeToggle />
          </div>
        </header>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="z-1 relative"
        >
          <div className="flex w-full flex-1 flex-col gap-4 h-[90vh] overflow-x-hidden p-4">
            {children}
          </div>
        </motion.div>
      </>
    );
  }
);
Body.displayName = "BodyAdmin";

export { Body };
