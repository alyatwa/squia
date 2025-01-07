import { GalleryVerticalEnd } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 p-2 text-sm">
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
        <GalleryVerticalEnd className="size-4" />
      </div>
      <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-semibold">Logo</span>
        <span className="font-semibold">v1</span>
      </div>
    </div>
  );
};
