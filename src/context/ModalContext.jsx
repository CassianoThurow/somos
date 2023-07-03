import { createContext, useState, useContext, useCallback } from "react";
import Modal from "react-modal";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState({});

  const openModal = useCallback((id, content) => {
    document.body.style.overflow = "hidden";
    setModals((prevModals) => ({
      ...prevModals,
      [id]: { isOpen: true, content },
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
        const { isOpen, content } = modals[id];

        return (
          <Modal
            key={id}
            isOpen={isOpen}
            onRequestClose={() => closeModal(id)}
            overlayClassName="flex items-center justify-center bg-black bg-opacity-50 fixed inset-0 z-100"
            className="relative bg-white rounded-lg overflow-auto shadow-lg max-w-md w-full px-10 py-5 m-auto sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
          >
            <button
              onClick={() => closeModal(id)}
              className="absolute top-4 right-4 text-2xl font-bold"
            >
              X
            </button>
            <div className="p-6 overflow-auto">
              {" "}
              {/* Adicionamos overflow-auto aqui */}
              <h2 className="text-2xl mb-4">{content}</h2>
              <p>
                {/* Exemplo de um texto longo */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
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
