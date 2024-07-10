import './App.css'
import { useState } from 'react'

function App() {

  const[count,setCount] = useState(0);

  function setCounter(){
    setCount(count + 1);
  }

  function decCounter(){
    setCount(count - 1);
  }

  function resetCounter(){
    setCount(0);
  }
  
  return (
   <>
      <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button className='btn1' onClick={setCounter}>Increment</button>
      <button className='btn2' onClick={resetCounter}>Reset</button>
      <button className='btn3' onClick={decCounter}>Decrement</button>
      </div>
   </>
  )
}

export default App
