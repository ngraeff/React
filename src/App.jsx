import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Route , Routes} from 'react-router'
import Home from './pages/Home'
import Hombre from './pages/Hombre'
import Prenda from './pages/Prenda'
import Electronica from './pages/Electronica'
import Joyeria from './pages/Joyeria'
import Mujer from './pages/Mujer'




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
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hombre' element={<Hombre/>}></Route>
        <Route path='/electronica' element={<Electronica/>}></Route>
        <Route path='/joyeria' element={<Joyeria/>}></Route>
        <Route path='/mujer' element={<Mujer/>}></Route>
        <Route path='/prenda/:id' element={<Prenda/>}></Route>

        

      </Routes>

      
    </div>
    
  )
}

export default App
