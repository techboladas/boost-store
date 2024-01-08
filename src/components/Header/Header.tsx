"use client";

import Image from "next/image";
import logo from "../../../public/boost-icon.svg";
import { Link } from "react-scroll";
export const Header = () => {
  return (
    <header className="w-screen h-16 bg-boost-30 fixed flex items-center justify-between shadow-gray shadow-lg z-10 ">
      <span className="ml-3 flex items-center gap-2">
        <Image src={logo} alt="boost store logo" width={35} height={35} />
        <h1 className="mr-5  font-bold text-boost-60 text-xl">Boost Store</h1>
      </span>
      <menu className="justify-self-end hidden md:block">
        <ul className="flex text-boost-60 gap-5 mr-3">
          <li>
            <Link to="main" smooth duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="package" smooth duration={500}>
              Pacotes
            </Link>
          </li>
          <li>
            <Link to="price-table" smooth duration={500}>
              Produtos a vulso
            </Link>
          </li>
          <li>
            <Link to="contact" smooth duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </menu>
    </header>
  );
};
