import {useState, useEffect} from 'react';
import axios from 'axios';
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Heroteste from "./components/Herotest";
import Navbar from "./components/Navbar";
import { useModal } from "../src/context/ModalContext"

function App() {
  const { openModal } = useModal();

  const [data, setData] = useState(null);

    useEffect(() => {
      axios.get('http://localhost/api/home', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 99s-b3d2f4a0-0b9a-11eb-9a03-0242ac130003',
        },
      })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, []);

  console.log(data)

  return (
    <>
      <Navbar />
      <Heroteste />
      <section className="bg-primary-yellow">
        <div className="container mx-auto py-24 flex flex-col lg:flex-row items-start">
          <div className="lg:flex lg:flex-grow-1 lg:flex-basis-0 mx-auto lg:w-[400px] w-full sm:px-5">
            <p className="font-montserrat text-primary-black font-semibold text-4xl leading-10 px-5">
              Sendo motorista parceiro da 99, você tem vantagens exclusivas.
            </p>
          </div>

          <div className="hidden lg:flex lg:flex-grow-1 lg:flex-basis-0 mx-auto">
            <img src="./arrow2.svg" />
          </div>

          <div className="lg:flex lg:flex-grow-1 lg:flex-basis-0 mx-auto lg:w-[500px] w-full mt-4 px-5 lg:px-0 lg:mt-0">
            <p className="font-montserrat text-xl text-primary-black leading-7">
              Conheça todas as parcerias e soluções que a 99 pode oferecer pra
              você. Conte com nossa ajuda para aumentar seus ganhos, reduzir
              seus custos, melhorar seu bem-estar e qualidade de vida como
              motorista parceiro(a) 99. Aqui você encontra diversas ofertas,
              nacionais e regionais, e pode escolher a que for melhor pra você!
            </p>
          </div>
        </div>
      </section>
      <section>
        <Card 
          showExtraButton
        />
      </section>
      <section className="bg-primary-gray">
        <div className="container mx-auto flex py-24 px-5 flex-col lg:flex-row justify-between space-y-5 lg:space-y-0">
          <img className="rounded-20" src="./info.png" alt="" />
          <div className="w-full lg:w-[450px] flex flex-col justify-between">
            <p className="font-montserrat-bold text-primary-black text-4xl mb-4">
              Conheça a ação exclusiva para aluguel
            </p>
            <p className="font-montserrat text-xl text-primary-black leading-7 mb-4">
              Alugando seu carro com um de nossos parceiros, você conta com 7%*
              de desconto na renovação do seu contrato de aluguel e mais R$300*,
              realizando 300 corridas mensais.*
            </p>
            <p className="font-montserrat text-sm text-primary-black leading-7 mb-4">
              *Válido por 3 meses.
            </p>
            <button
              onClick={() => openModal('modal2', 'Esta é a modal 2')}
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
  );
}

export default App;
