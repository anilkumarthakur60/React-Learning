import { useState } from 'react'
import {useSelector} from "react-redux";
import NavbarComponent from "./component/NavbarComponent.jsx";
import {CartContainer} from "./component/CartContainer.jsx";

function App() {

    const  {data}=useSelector((state)=>state.cart)

  return (
    <>
      <NavbarComponent/>
        <CartContainer/>
    </>
  )
}

export default App
