import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 p-2 text-sm">
      <Image
        className="flex "
        src="/logo.png"
        width={27}
        height={36}
        alt="Logo"
      />
    </div>
  );
};
