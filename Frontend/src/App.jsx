
import Items from "./Items"
import Form from "./Form"
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {

  return (

    <div className="App" >
      <h2>Todo App</h2>
      <ToastContainer position="top-center" />
      <Form />
      <Items />
    </div>

  )
}

export default App
