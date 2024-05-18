import { Logo } from "@/icons";
import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { WelcomeMsg } from "./welcome-msg";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-800 to-blue-600 px-4 py-8 md:px-14 pb-36 ">
      <div className="max-w-screen-xl mx-auto ">
        <div className="w-full flex items-center justify-between mb-14 gap-x-6">
          <div className="flex lg:justify-start w-full justify-between gap-x-8 items-center">
            <HeaderLogo />
            <Navigation />
          </div>
          <div className="flex items-center ">
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-6 animate-spin text-white/50" />
            </ClerkLoading>
          </div>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
};
