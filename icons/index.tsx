import Image from "next/image";

type Props = {};

export const Logo = () => (
  <Image src={"/svg/logo.svg"} alt="logo" width={60} height={30} />
);
