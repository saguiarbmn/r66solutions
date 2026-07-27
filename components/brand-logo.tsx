import Image from "next/image";
import { cn } from "@/lib/utils";
import logo from "@/public/r66-logo.png";
import logoLg from "@/public/r66-logo-lg.png";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg" | "hero";
};

const sizes = {
  sm: { width: 40, height: 48, className: "h-10 w-auto" },
  md: { width: 52, height: 62, className: "h-12 w-auto sm:h-14" },
  lg: { width: 96, height: 114, className: "h-20 w-auto sm:h-24" },
  hero: { width: 160, height: 190, className: "h-28 w-auto sm:h-36 lg:h-40" },
} as const;

export function BrandLogo({
  className,
  priority = false,
  size = "md",
}: BrandLogoProps) {
  const dim = sizes[size];
  // Static imports so Next.js applies basePath/assetPrefix on GitHub Pages.
  const src = size === "hero" || size === "lg" ? logoLg : logo;

  return (
    <Image
      src={src}
      alt="R66 Solutions"
      width={dim.width}
      height={dim.height}
      priority={priority}
      className={cn(dim.className, "object-contain", className)}
    />
  );
}
