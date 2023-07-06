import { useState, useEffect } from "react";

const Hero = ({title, description}) => {
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
        <div className="px-5 pt-9 w-80">
          <h1 className="font-montserrat-bold text-4xl text-primary-black font-bold leading-48 ">{title}</h1>
          <div 
            className="text-primary-black font-montserrat text-2xl mt-4"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <img src="/hero.png" alt="Descrição da imagem" className="w-full h-96 object-cover bg-center mt-8" />
      </section>
    ) : (
      <section className="relative flex items-center h-screen">
        <img src="/hero.png" alt="Descrição da imagem" className="absolute inset-0 w-full h-full object-contain z-0" />
        <div 
          className="absolute inset-0 z-10" 
        />
        <div className="container mx-auto px-4 z-20">
          <h1 className="font-montserrat-bold text-4xl md:text-6xl text-black w-[500px] font-bold">{title}</h1>
          <div 
            className="text-black w-444 text-2xl mt-4" 
            dangerouslySetInnerHTML={{ __html: description }}  
          />
        </div>
      </section>
    )
  );
};
export default Hero;
