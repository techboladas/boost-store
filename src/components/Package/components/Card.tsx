import { ReactNode } from "react";
export type CardProps = {
  title: string;
  list: ReactNode;
  price: number;
  border: string;
  buttonBg: string;
};

export const Card = ({ title, list, price, border, buttonBg }: CardProps) => {
  return (
    <div
      className={`relative h-[500px] w-64 p-2 border-2 flex flex-col ${border}`}
    >
      <h1 className="pt-3 text-2xl text-center text-boost-60 font-extrabold">
        {title}
      </h1>
      <div className="pt-5 text-boost-60">{list}</div>
      <span
        className={`absolute bottom-3 left-1/2 p-1 px-8 translate-x-[-50%] text-boost-60 ${buttonBg}`}
      >
        {price}MT
      </span>
    </div>
  );
};
