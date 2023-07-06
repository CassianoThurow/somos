import { createContext, useState, useContext, useCallback } from "react";
import Modal from "react-modal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = useCallback((id, title, content) => {
    document.body.style.overflow = "hidden";
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { isOpen: true, title, content },
    }));
  }, []);

  const closeModal = useCallback((id) => {
    document.body.style.overflow = "auto";
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { ...prevModals[id], isOpen: false },
    }));
  }, []);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {Object.keys(modals).map((id) => {
        const { isOpen, title, content } = modals[id];

        return (
<Modal
  key={id}
  isOpen={isOpen}
  onRequestClose={() => closeModal(id)}
  overlayClassName="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 z-[100]"
  className="relative bg-white rounded-lg overflow-auto shadow-lg px-10 py-5 m-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-[794px]"
>
  <button
    onClick={() => closeModal(id)}
    className="absolute top-4 right-4 text-2xl font-bold"
  >
    X
  </button>
  <div className="p-6 overflow-auto custom-scroll h-[60vh]">
    <div dangerouslySetInnerHTML={{ __html: title }} className="text-2xl mb-4" />
    <div dangerouslySetInnerHTML={{ __html: content }}/>
  </div>
</Modal>

        );
      })}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};
