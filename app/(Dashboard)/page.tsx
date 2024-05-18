"use client";

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useGetAccount } from "@/hooks/accounts/useGetAccount";
export default function Home() {
  const getAccount = useGetAccount();
  return <div>hello world</div>;
}
