import { Product } from "./Product";
import { ProductList } from "./ProductList";

export const SuperList = () => {
  return (
    <ProductList>
      <Product vailible>Website Super</Product>
      <Product vailible>5 video anuncios gratis</Product>
      <Product vailible>Criação da logo</Product>
      <Product vailible={false}>Bot de atendimento</Product>
      <Product vailible={false}>Hospedagem do site gratis</Product>
      <Product vailible={false}>Dominio do site gratis</Product>
    </ProductList>
  );
};
