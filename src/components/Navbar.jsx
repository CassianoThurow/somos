import { useState, useEffect } from "react";
import LogoWhite from '../assets/99LogoWhite.svg';
import LogoBlack from '../assets/99Logo.svg';
import openIcon from '../assets/hamburger.svg';
import closeIcon from '../assets/close.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 z-50 ${isMobile || scrolled ? 'bg-white' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src={isMobile ? LogoBlack : (scrolled ? LogoBlack : LogoWhite)} alt="Logo da 99" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${isMobile || scrolled ? 'text-black' : 'text-white'}`}
                  >
                    Parcerias Nacionais
                  </a>
                  <a
                    href="#"
                    className={`px-3 py-2 rounded-md text-sm font-medium ${isMobile || scrolled ? 'text-black' : 'text-white'}`}
                  >
                    Parcerias Regionais
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isMobile || scrolled ? 'bg-black text-white' : 'bg-white text-black'}`}
              >
                Quero ser motorista
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                <img src={isOpen ? closeIcon : openIcon}/>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden fixed w-full h-full top-0 left-0 bg-white z-40 overflow-y-auto">
          <div className="pt-32 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-black block text-2xl font-montserrat font-semibold text-center"
            >
              Parcerias Nacionais
            </a>
            <a
              href="#"
              className="text-black block text-2xl font-montserrat font-semibold text-center pt-8"
            >
              Parcerias Regionais
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 absolute bottom-10 w-full flex">
            <button
              className="bg-primary-orange text-primary-gray-light m-auto py-4 px-9 rounded-20 text-base font-montserrat font-bold"
            >
              Quero ser motorista
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;