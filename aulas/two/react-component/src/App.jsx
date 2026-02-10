import React from "react";
import TextButton from "./components/TextButton";
import Header from "./components/Header";
import './index.css'

export default function App() {
  return (
    <>
      <Header />
      <h1>React.Component</h1>
      <TextButton 
      label="test"
      />
    </>

    // Outras formas de resolver o problea de uma função ter pelo menos um parente
    // <React.Fragment>
    //   <h1>React.Component</h1>
    //   <TextButton />
    // </React.Fragment>
    
    // <div>
    //   <h1>React.Component</h1>
    //   <TextButton />
    // </div>
  )
}