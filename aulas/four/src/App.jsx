import React from "react";
import BoasVindas from "./components/BoasVindas";
import ButtonCss from "./components/ButtonCss";
import ButtonModule from "./components/ButtonModule";
import ButtonStyled from "./components/ButtonStyled";


export default function App() {
  return (
    <React.Fragment>
      <ButtonStyled text='button styled' secondary large/>
      {/* <ButtonCss bgColor='green' label='button css'/> */}
      {/* <ButtonModule text='button module' highlight={true} /> */}
      {/* // <BoasVindas name='Rapaz'/>
      // <BoasVindas name='Comparça'/>
      // <BoasVindas name='Meu chapa'/> */}
    </React.Fragment>
  )
}