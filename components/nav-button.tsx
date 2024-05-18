import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  href: string;
  isActive?: boolean;
};

export const NavButton: FC<Props> = ({ title, href, isActive }) => {
  return (
    <Button
      asChild
      size={"sm"}
      variant={isActive ? "default" : "secondary"}
      className={cn(
        "dark text-white focus:bg-white/30 hover:bg-white/20 transition font-normal",
        isActive ? "bg-white/10 " : "bg-transparent"
      )}
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
};
