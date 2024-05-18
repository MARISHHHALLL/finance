import { ClerkLoading, ClerkLoaded, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols1 md:grid-cols-2">
      <div className="h-full w-full flex justify-center items-center">
        <ClerkLoaded>
          <SignUp path="/sign-up" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 />
        </ClerkLoading>
      </div>
      <div className="bg-[url('/images/background-sign.jpg')] bg-cover bg-bottom h-full hidden md:flex items-end justify-end p-5">
        <h1 className="font-black text-white text-7xl font-primary">
          WELCOME
          <br />
          <span className="flex justify-end">BACK</span>
        </h1>
      </div>
    </div>
  );
}
