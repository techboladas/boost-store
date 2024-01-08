import { Product } from "./Product";
import { ProductList } from "./ProductList";

export const GoldList = () => {
  return (
    <ProductList>
      <Product vailible>Website Gold</Product>
      <Product vailible>Hospedagem do site gratis</Product>
      <Product vailible>5 video anuncios gratis</Product>
      <Product vailible>Criação da logo</Product>
      <Product vailible>Bot de atendimento</Product>
      <Product vailible={false}>Dominio do site gratis</Product>
    </ProductList>
  );
};
