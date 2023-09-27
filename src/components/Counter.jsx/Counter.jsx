import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (

    <div>
        <button onClick={()=> setCount(count +1)}> Sumar</button>
        <p>Valor: {count}</p>
        <button onClick={()=> setCount(count -1)}> Restar</button>

    </div>
  )
}

export default Counter