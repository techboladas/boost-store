import Image from "next/image";
import logo from "../../../public/boost-logo.svg";
export const Main = () => {
  return (
    <section
      id="main"
      className="flex flex-col p-5 h-screen justify-center md:items-center  md:flex-row"
    >
      <article className="w-6/12">
        <h1 className="text-2xl font-bold">Boost Store</h1>
        <p className="w-96 text-lg">
          Um serviço com o objectivo de ajudar emprendedores e empresas de
          pequeno e medio porte fornecendo produtos digitais que ajudam a marca
          a ter maior alcance nas suas vendas
        </p>
      </article>
      <Image alt="Logo Boost Store" src={logo} width={300} height={300} className="self-center"/>
    </section>
  );
};
