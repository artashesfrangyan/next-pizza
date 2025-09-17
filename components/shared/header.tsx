import { cn } from "@/lib/utils";
import type { FC } from "react";
import { Container } from "./container";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className={cn("border border-b", className)}>
      <div>
        <Container className="flex items-center justify-between py-8">
          <Image src="logo.png" alt="Next Pizza Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</р>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Header;
