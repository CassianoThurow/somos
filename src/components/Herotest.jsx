import { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isMobile ? (
      <section className="mt-16 flex flex-col justify-center h-screen bg-primary-yellow">
        <div className="px-5 pt-9 w-64">
          <h1 className="font-montserrat-bold text-4xl text-primary-black font-bold leading-48 ">Soluções 99 feitas pra você!</h1>
          <p className="text-primary-black font-montserrat text-2xl mt-4">Na 99 você conta com as melhores parcerias dentro e fora do carro.</p>
        </div>
        <img src="/teste2.png" alt="Descrição da imagem" className="w-full h-96 object-cover bg-center mt-8" />
      </section>
    ) : (
      <section className="relative flex items-center h-screen">
        <img src="/teste2.png" alt="Descrição da imagem" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(212deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 1.87%, rgba(255,255,255,0) 100%)'
          }}
        />
        <div className="container mx-auto px-4 z-20">
          <h1 className="font-montserrat-bold text-4xl md:text-6xl text-white w-444 font-bold">Soluções 99 feitas pra você!</h1>
          <p className="text-white w-444 text-2xl mt-4">Na 99 você conta com as melhores parcerias dentro e fora do carro.</p>
        </div>
      </section>
    )
  );
};
export default Hero;
