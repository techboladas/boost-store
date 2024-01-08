import { ReactNode } from "react";

type ProductListProps = {
  children: ReactNode;
};

export const ProductList = ({ children }: ProductListProps) => {
  return <ul>{children}</ul>;
};
