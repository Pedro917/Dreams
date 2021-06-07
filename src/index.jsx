import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Login from './pages/Autentication/Login'

import { ChakraProvider } from "@chakra-ui/react"


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
