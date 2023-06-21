import { useState } from "react";
import Logo from '../assets/99Logo.svg'
import openIcon from '../assets/hamburger.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white lg:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={Logo} alt="Logo da 99" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Item 1
                </a>
                <a
                  href="#"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Item 2
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button
              className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Botão
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              <img src={openIcon}/>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Item 1
            </a>
            <a
              href="#"
              className="text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Item 2
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute bottom-10 w-full flex">
            <button
              className="bg-primary-orange text-white m-auto py-4 px-9 rounded-3xl text-base font-medium "
            >
              Quero ser motorista
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;