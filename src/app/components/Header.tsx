"use client";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import React, { useState } from "react";

type HeaderProps = {
  title?: string;
  description?: string;
};

const Header: React.FC<HeaderProps> = ({
  title = "Food-FH",
  description = "BEM-VINDO",
}) => {
  // Estado para controlar se o menu está aberto
  const [isOpen, setIsOpen] = useState(false);

  // Função para abrir o menu
  const openMenu = () => setIsOpen(true);

  // Função para fechar o menu
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white p-4 text-white relative   shadow-black shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-amber-500">{title}</h1>
          <p className="text-sm font-bold text-black">{description}</p>
        </div>
        <button
          onClick={openMenu}
          className="focus:outline-none md:hidden"
          aria-label="Open menu"
        >
          <IoMdMenu size={24} color="black" />
        </button>
      </div>

      {/* Menu Hamburguer */}
      <div
        className={`fixed top-0 right-0 h-full bg-slate-50 rounded-l-2xl text-white p-6 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-64 z-50 md:hidden`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 focus:outline-none"
          aria-label="Close menu"
        >
          <IoMdClose size={24} color="black" />
        </button>
        <ul className="mt-12 space-y-4 text-black  font-semibold ">
          <li></li>
          <li>
            <a href="#about" className="hover:text-gray-300 ">
              Carrinho
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 ">
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div className="fixed inset-0   md:hidden" onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Header;
