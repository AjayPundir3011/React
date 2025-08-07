import { useState } from 'react'
import './App.css';
import './index.css'
import Card from './components/Card.jsx';


function App() {

  const [color, setColor] = useState("olive");

  return (

    <div
    className="w-full h-screen duration-200 flex items-center justify-center"
    style={{ backgroundColor: color }}
  >
    <h1 className="text-white text-3xl font-bold">Background is changing!</h1>
  
    <div className="fixed bottom-1 left-0 right-0 flex justify-center gap-4">
      <button className="rounded-full bg-red-600 px-4 py-2 text-white shadow-lg"
        style ={{background:"red"}} onClick={() => setColor("red")}>red</button>
      <button className="rounded-full bg-red-600 px-4 py-2 text-white shadow-lg"
        style ={{background:"green"}} onClick={() => setColor("green")}>green</button>
        <button className="rounded-full bg-red-600 px-4 py-2 text-white shadow-lg"
        style ={{background:"blue"}} onClick={() => setColor("blue")}>blue</button>
    </div>
  </div>
  
  

  )
}

export default App
