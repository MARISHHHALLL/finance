import { Logo } from "@/icons";
import Link from "next/link";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="flex flex-row text-xl items-center gap-x-1">
        <Logo />
        <p className="font-semibold text-white h-fit">Finance</p>
      </div>
    </Link>
  );
};
