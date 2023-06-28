import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className=" flex flex-col bg-primary-black p-6">
      <div className="container flex mx-auto flex-col items-center justify-center gap-4 mb-6">
        <img src="../src/assets/99logowhite.svg" alt="logo" className="h-16 w-16" />
        <button className="bg-primary-orange text-base text-primary-gray-light font-bold py-4 px-6 rounded-20 font-montserrat">
          Seja motorista parceiro
        </button>
      </div>
      <div className="container mx-auto mb-20">
        <img className="" src="../src/assets/arrow.svg" alt="" />
      </div>
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="lg:w-52 sm:w-full">
          <ul>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Motorista</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Passageiro</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Empresas</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Frotas</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">99 Food</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">99 Pay</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Segurança</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Ajuda</a></li>
          </ul>
        </div>
        <div className="lg:w-52 sm:w-full">
          <ul>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">A 99</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Cidades</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Blog</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Newsroom</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Trabalhe com a gente</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Para onde vamos</a></li>
          </ul>
        </div>
        <div className="lg:w-52 sm:w-full">
          <ul>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Blog Corporativo</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Cartāo 99</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Programa Mais Ganhos 99</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Soluções para Veículos</a></li>
            <li className="mb-4"><a className="text-xl text-primary-gray-light font-montserrat font-semibold " href="#">Taxa Garantida</a></li>
          </ul>
        </div>
        <div>
          <div className="lg:w-48 sm:w-full">
            <p className="font-montserrat text-primary-gray-light text-xl">Baixe o app e viaje de maneira rápida, simples e segura. </p>
            <a className="flex mt-4 text-primary-orange font-montserrat text-xl text-bold" href="#">
              <img className="mr-2" src="../src/assets/appstore.svg" alt="Icone da App Store"/> 
              App Store
            </a>
            <a className="flex mt-4 text-primary-orange font-montserrat text-xl text-bold" href="#">
              <img className="mr-2" src="../src/assets/googleplay.svg" alt="Icone da App Store"/> 
              Google Play
            </a>
          </div>
          {!isMobile && (
            <div className="lg:w-48 sm:w-full mt-12">
              <p className="font-montserrat text-primary-gray-light text-xl">
                Acompanhe a  99 nas redes sociais 
              </p>
              <div className="flex gap-1 mt-4 items-center">
                <a href="#"><img src="../src/assets/facebook.svg" alt="" /></a>
                <a href="#"><img src="../src/assets/twitter.svg" alt="" /></a>
                <a href="#"><img src="../src/assets/linkedin.svg" alt="" /></a>
                <a href="#"><img src="../src/assets/youtube.svg" alt="" /></a>
                <a href="#"><img src="../src/assets/instagram.svg" alt="" /></a>
              </div>
            </div>
          )}
        </div>
      </div>
          {isMobile && (
      <div className="flex items-center justify-between">
      <p className="font-montserrat text-primary-gray-light text-sm w-28">
        Acompanhe a  99 nas redes sociais 
      </p>
      <div className="flex gap-2 items-center">
        <a href="#"><img src="../src/assets/facebook.svg" alt="" /></a>
        <a href="#"><img src="../src/assets/twitter.svg" alt="" /></a>
        <a href="#"><img src="../src/assets/linkedin.svg" alt="" /></a>
        <a href="#"><img src="../src/assets/youtube.svg" alt="" /></a>
        <a href="#"><img src="../src/assets/instagram.svg" alt="" /></a>
      </div>
    </div>
          )}


      <div className="text-center mx-auto mt-16 w-52">
        <div className="flex justify-center">
          <p className="text-base text-primary-gray-light font-montserrat">Brasil </p>
          <img className="ml-4" src="../src/assets/brasil.svg"/>
        </div>
        <p className="text-base text-primary-orange font-montserrat font-bold">DiDi Global</p>
        <p className="mt-4 text-sm text-primary-gray-light font-montserrat"> Termos de uso e Privacidade © 2022 99 Tecnologia Ltda</p>
      </div>
    </div>
  );
}

export default Footer;
