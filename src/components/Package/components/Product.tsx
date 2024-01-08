import { ReactNode } from "react";
import avalibleIcon from "../../../../public/boost-availible-icon.svg";
import unvalibleIcon from "../../../../public/boost-unvalible-icon.svg";
import Image from "next/image";

type ProductProps = {
  children: ReactNode;
  vailible: boolean;
};
const UnvalibleIcon = () => {
  return <Image src={unvalibleIcon} alt="Indisponivel" />;
};

const AvalibleIcon = () => {
  return <Image src={avalibleIcon} alt="Disponivel" />;
};

export const Product = ({ children, vailible }: ProductProps) => {
  return (
    <li className="flex items-center gap-1 text-sm font-bold h-9">
      {" "}
      {vailible ? <AvalibleIcon /> : <UnvalibleIcon />} {children}
    </li>
  );
};
