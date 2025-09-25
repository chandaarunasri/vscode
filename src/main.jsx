import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Header from './components/Header.jsx'
// import Herosection from './components/Herosection.jsx'
// import Product from './components/Product.jsx'
// import Button from './components/Button.jsx'


// import Login from './components/Login.jsx'
import Regform from './components/Regform.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    {/* <Herosection /> */}
    {/* <Product /> */}
    {/* <Login /> */}
    <Regform />
  </StrictMode>
)
