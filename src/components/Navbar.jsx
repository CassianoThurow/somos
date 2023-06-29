import { useState, useEffect } from "react";

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

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 ${
          isMobile || scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto p-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src={isMobile ? "/99Logo.svg" : scrolled ? "/99Logo.svg" : "/99LogoWhite.svg"}
                  alt="Logo da 99"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-9 flex items-baseline">
                  <a
                    href="#"
                    className={`text-base font-normal font-montserrat cursor-pointer hover:text-primary-orange ${
                      scrolled ? "text-primary-black" : "text-white"
                    }`}
                  >
                    Parcerias Nacionais
                  </a>
                  <a
                    href="#"
                    className={`ml-6 text-base font-normal font-montserrat cursor-pointer hover:text-primary-orange ${
                      scrolled ? "text-primary-black" : "text-white"
                    }`}
                  >
                    Parcerias Regionais
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button
                className={`px-6 py-4 rounded-20 border-2 text-sm font-semibold ${
                  isMobile || scrolled
                    ? "bg-white text-primary-black  border-primary-black"
                    : "hover:bg-white hover:border-black hover:text-black bg-transparent text-white border-white"
                }`}
              >
                Quero ser motorista
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                <img src={isOpen ? "/close" : "/hamburger"} />
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
            <button className="bg-primary-orange text-primary-gray-light m-auto py-4 px-9 rounded-20 text-base font-montserrat font-bold">
              Quero ser motorista
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
