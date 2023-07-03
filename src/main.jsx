import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Modal from "react-modal";
import { ModalProvider } from "../src/context/ModalContext.jsx";
import './index.css'

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
)
