import { useModal } from "../context/ModalContext";

function Card({
  tag,
  title,
  description,
  buttonLabel,
  buttonLabelModal,
  showExtraButton,
  modalTitle,
  modalContent,
  pos,
  warning
}) {
  const { openModal } = useModal();

  const isPosEven = pos % 2 === 0;

  return (
    <div
      className={`container bg-white mx-auto overflow-hidden m-4 flex  flex-col md:justify-between space-y-4 md:space-y-0 mt-[136px] ${
        isPosEven ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        className="lg:h-96 h-auto w-full md:w-[480px] object-cover rounded-20"
        src="/gympass.png"
        alt=""
      />
      <div className="flex flex-col justify-between flex-grow space-y-4 max-w-lg">
        <div className="flex-grow flex flex-col justify-between">
          <span className="text-primary-orange px-4 py-2 border rounded-20 border-primary-orange justify-center w-[190px] text-center">teste</span>
          <h2 className="font-bold lg:text-4xl text-3xl mb-2 font-montserrat-bold text-primary-orange">{title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: description }}
            className="font-montserrat text-primary-black text-lg"
          />
          <p
            dangerouslySetInnerHTML={{ __html: warning }}
            className="font-montserrat text-black text-sm"
          />
        </div>
        <div className="mt-4 flex flex-col md:flex-row lg:">
          <a
            href="#"
            className={`w-full flex bg-primary-orange-light font-montserrat-bold text-primary-white px-6 py-4 rounded-20 justify-center ${
              !showExtraButton ? "w-auto" : ""
            }`}
          >
            {buttonLabel}
            <img className="ml-2" src="/arrowup.svg" alt="" />
          </a>
          {showExtraButton && (
            <button
              href="#"
              onClick={() =>
                openModal("idDoSeuModal", modalTitle, modalContent)
              }
              className="w-full ml-0 md:ml-5 bg-primary-orange-light font-montserrat-bold text-primary-white px-6 py-4 rounded-20 justify-center text-center lg:mt-0 mt-4"
            >
              {buttonLabelModal}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
