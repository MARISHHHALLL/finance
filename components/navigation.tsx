"use client";

import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "./nav-button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { useMedia } from "react-use";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const routes = [
  {
    href: "/",
    title: "Overview",
  },
  {
    href: "/transaction",
    title: "Transaction",
  },
  {
    href: "/accounts",
    title: "Accounts",
  },
  {
    href: "/categories",
    title: "Categories",
  },
  {
    href: "/settings",
    title: "Settings",
  },
];

export const Navigation = () => {
  const pathName = usePathname();
  const useRoute = useRouter();
  const [openSheet, setOpenSheet] = useState<boolean>();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const routeClicked = (link: string) => {
    useRoute.push(link);
    setOpenSheet(false);
  };

  if (isMobile) {
    return (
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger>
          <Button
            size="sm"
            variant="outline"
            className="font-normal bg-white/10 border-none hover:bg-white/20"
          >
            <Menu color="white" className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                variant={route.href === pathName ? "secondary" : "ghost"}
                key={route.href}
                onClick={() => routeClicked(route.href)}
              >
                {route.title}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className="md:flex flex-row gap-x-1 hidden ">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          isActive={pathName === route.href}
          title={route.title}
        />
      ))}
    </nav>
  );
};
