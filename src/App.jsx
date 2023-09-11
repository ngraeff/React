import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

/* Componentes */
/* props = propiedades */
const Button = (props) =>{
  return <button >{props.text}</button>
}



function App() {
  const [count, setCount] = useState(0)
/* abrienso y cerrando llaves puedo escrivir js */
/* Cada una de las cosaas q se crean con un map, debe tener una key */
  return (
  
    <div >
      <Navbar/>
      <ItemListContainer greeting ="Bienvenidos a mi Web"/>
    </div>
    
  )
}

export default App
