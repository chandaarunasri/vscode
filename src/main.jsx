import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Header from './components/Header.jsx'
// import Herosection from './components/Herosection.jsx'
// import Product from './components/Product.jsx'
// import Button from './components/Button.jsx'
// import Events from './comp/Events.jsx'
// import Login from './components/Login.jsx'
import Regform from './components/Regform.jsx'


// import Form from './components/Forms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    {/* <Herosection /> */}
    {/* <Product /> */}
    {/* <Login /> */}
    <Regform />
    
    {/* <Form isLoggedIn ={true} /> */}
    {/* <Form isLoggedIn ={false} /> */}
    {/* <Events /> */}

  

  </StrictMode>
)
