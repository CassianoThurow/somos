import { useModal } from "../context/ModalContext"

function Card({ image, title, description, showExtraButton }) {
  const { openModal } = useModal();

  return (
    <div className="container bg-white mx-auto overflow-hidden m-4 flex md:flex-row flex-col md:justify-between space-y-4 md:space-y-0 px-5">
      <img className="lg:h-96 h-auto w-full md:w-[480px] object-cover rounded-20" src="/gympass.png" alt="" />
      <div className="p-4 flex flex-col justify-between flex-grow space-y-4 max-w-lg">
        <div>
          <span className="">Bem-Estar</span>
          <h2 className="font-bold text-2xl mb-2">Gympass</h2>
          <p className="text-gray-700 text-sm">Tenha soluções de bem-estar por um preço que cabeno bolso! Planos de academia, estúdios e aplicativosde saúde a partir de $59,90 por mês.</p>
        </div>
        <div className="mt-4 flex flex-col md:flex-row lg:">
          <a href="#" className="w-full flex bg-primary-orange-light font-montserrat-bold text-primary-white px-6 py-4 rounded-20 justify-center">
            Contratar plano
            <img className="ml-2" src="/arrowup.svg" alt="" />
          </a>
          { showExtraButton &&
            <button href="#" onClick={() => openModal('modal1', 'Esta é a modal 1')} className="w-full ml-0 md:ml-5 bg-primary-orange-light font-montserrat-bold text-primary-white px-6 py-4 rounded-20 justify-center text-center">
              Saiba mais
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
