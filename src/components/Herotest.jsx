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
        <div className="px-5 py-8 w-64">
          <h1 className="font-montserrat text-4xl text-primary-black font-bold leading-48 ">Soluções 99 feitas pra você!</h1>
          <p>Na 99 você conta com as melhores parcerias dentro e fora do carro.</p>
        </div>
        <img src="./src/assets/teste2.png" alt="Descrição da imagem" className="w-full h-96 object-cover bg-center" />
      </section>
    ) : (
      <section className="relative flex items-center h-screen">
        <img src="./src/assets/teste2.png" alt="Descrição da imagem" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: 'linear-gradient(212deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 1.87%, rgba(255,255,255,0) 100%)'
          }}
        />
        <div className="container mx-auto px-4 z-20">
          <h1 className="text-4xl md:text-6xl text-white">Seu título aqui</h1>

        </div>
      </section>
    )
  );
};
export default Hero;
