import { useState, useEffect } from "react";
import { useModal } from "../src/context/ModalContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const { openModal } = useModal();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://infra.somos.local/api/home`, {
          headers: {
            Authorization: "Bearer 99s-b3d2f4a0-0b9a-11eb-9a03-0242ac130003",
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          setContent(jsonData.data);
        } else {
          console.error("Erro ao fazer a requisição:", response.status);
        }
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
      }
    };

    fetchData();
  }, []);


  const { header, text, parceiros } = content || {};


  return (
    <>
      {content ? (
        <>
        <div className="flex flex-col h-screen">
        <Navbar />
        <Hero
          className="flex-grow"
          title={header.titulo}
          description={header.texto}
        />
        </div>
          <section className="bg-primary-yellow">
            <div className="container mx-auto py-24 flex flex-col lg:flex-row items-start">
              <div className="lg:flex lg:flex-grow-1 lg:flex-basis-0 mx-auto lg:w-[336px] w-full sm:px-5">
                <p className="font-montserrat text-primary-black font-semibold text-4xl leading-10 px-5">
                  {text.titulo}
                </p>
              </div>

              <div className="hidden lg:flex lg:flex-grow-1 lg:flex-basis-0 mx-auto">
                <img src="./arrow2.svg" />
              </div>

              <div className="lg:flex lg:flex-grow-1 lg:flex-basis-0 mx-auto lg:w-[500px] w-full mt-4 px-5 lg:px-0 lg:mt-0">
                <div className="font-montserrat text-xl text-primary-black leading-7" 
                  dangerouslySetInnerHTML={{ __html: text.texto }}
                />                
              </div>
            </div>
          </section>
          <section className="container px-5 mx-auto">
            <h1>Conheça as parcerias nacionais em destaque</h1>
          {parceiros.map(parceiro => (
            <Card 
              key={parceiro.id}
              title={parceiro.nome}
              description={parceiro.descricao}
              buttonLabel={parceiro.link_titulo}
              warning={parceiro.aviso}
              pos={parceiro.pos}
              {...(parceiro.modal != null && { 
                showExtraButton: true,
                buttonLabelModal: parceiro.modal_titulo,
                modalTitle: parceiro.modal.titulo,
                modalContent: parceiro.modal.texto
              })}
            />
          ))}
          </section>
          <section className="bg-primary-gray">
            <div className="container mx-auto flex py-24 px-5 flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
              <img className="rounded-20" src="./info.png" alt="" />
              <div className="w-full lg:w-[450px] flex flex-col justify-between">
                <p className="font-montserrat-bold text-primary-black text-4xl mb-4">
                  Conheça a ação exclusiva para aluguel
                </p>
                <p className="font-montserrat text-xl text-primary-black leading-7 mb-4">
                  Alugando seu carro com um de nossos parceiros, você conta com
                  7%* de desconto na renovação do seu contrato de aluguel e mais
                  R$300*, realizando 300 corridas mensais.*
                </p>
                <p className="font-montserrat text-sm text-primary-black leading-7 mb-4">
                  *Válido por 3 meses.
                </p>
                <button
                  onClick={() => openModal("modal2", "Esta é a modal 2")}
                  className=" bg-primary-orange-light font-montserrat-bold text-primary-white px-6 py-4 rounded-20 lg:w-60 w-full text-center"
                  href=""
                >
                  Confira condições
                </button>
              </div>
            </div>
          </section>
          <section className="bg-primary-yellow">
            <div className="container mx-auto flex py-24 px-5 flex-col-reverse lg:flex-row justify-between items-center">
              <div className="lg:max-w-[360px] max-w-[312px] lg:items-start flex flex-col justify-center items-center">
                <p className="font-montserrat text-primary-black lg:text-4xl text-3xl  lg: mt-10 leading-10">
                  <strong className="font-montserrat-bold">
                    Ficou com dúvida?
                  </strong>
                  Fale com a gente!
                </p>
                <a
                  href="#"
                  className="mt-10 flex bg-primary-orange-light font-montserrat-bold text-primary-white px-6 py-4 rounded-20 lg:w-60 w-full justify-center"
                >
                  <img className="mr-2" src="./outline.svg" alt="" />
                  Fale conosco
                </a>
              </div>
              <img src="./contact1.png" alt="" />
            </div>
          </section>
          <Footer />
        </>
      ) : (
        <p>carregando</p>
      )}
    </>
  );
}

export default App;
