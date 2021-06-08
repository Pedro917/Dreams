import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Login from './pages/Autentication/Login'

import { ChakraProvider } from "@chakra-ui/react"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ToastContainer/>
      <Login />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
