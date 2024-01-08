import { Product } from "./Product";
import { ProductList } from "./ProductList";

export const LitleList = () => {
  return (
    <ProductList>
      <Product vailible>Website basico</Product>
      <Product vailible>1 video anuncio gratis</Product>
      <Product vailible={false}>Criação da logo</Product>
      <Product vailible={false}>Bot de atendimento</Product>
      <Product vailible={false}>Hospedagem de site gratis</Product>
      <Product vailible={false}>Dominio de site gratis</Product>
    </ProductList>
  );
};
