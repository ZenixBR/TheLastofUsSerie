import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray w-full py-4 fixed top-0 z-50 font-bebas">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-14"><img src="/logo.png" alt="" /></div>
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <ul
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:flex lg:space-x-4`}
        >
          <li><a href="#pginicial" className="text-paragrafo">Inicio</a></li>
          <li><a href="#elenco" className="text-paragrafo">Elencos</a></li>
          <li><a href="#producao" className="text-paragrafo">Produção</a></li>
          <li><a href="#historia" className="text-paragrafo">História</a></li>
          <li><a href="#espectativas" className="text-paragrafo">Espectativas</a></li>
        </ul>
      </div>
    </nav>
  );
}
