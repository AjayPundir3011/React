import { useCallback, useEffect, useState } from 'react'
import './App.css';
import Card from './components/Card.jsx';


function App() {
   
  const [length, setLength] = useState(8);
  const [numberEnabled, setNumberEnabled] = useState(false);
  const [charEnabled, setCharEnabled] = useState(false);
  const [password, setPassword] = useState("");
  
  const passwordGenerator = useCallback(() => {        
           let pass ="";
           let str ="abcdefghijklmnopqrstopqrstuvwxyz";
           if(numberEnabled)str+="1234567890";
           if(charEnabled)str+="~!#$%^&*(){}";
           for(let i=1;i<length;i++){
                  let char = Math.floor(Math.random() * (str.length +1));
                  console.log(char);
                  pass += str.charAt(char); 
           }
           setPassword(pass);
  },[length,setPassword,numberEnabled,charEnabled]);

  useEffect(() => {
         passwordGenerator();
  },[length,passwordGenerator,numberEnabled,charEnabled])

  return (
    
    <>
    <h1 className="text-4xl text-center text-white bg-gray-800 py-4">
      Password Generator
    </h1>
  
    <div className="flex justify-center items-center h-screen bg-gray-300">
  <div className="flex flex-col gap-4 bg-gray-100 p-6 rounded shadow">
    
    <div className="flex flex-wrap gap-2">
      <input
        type="text"
        value={password}
        className="border bg-white border-gray-300 rounded px-3 py-2 w-64"
        readOnly
        
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Copy
      </button>
    </div>
    <div className="flex flex-col gap-2">
      <input type="range" value = {length} className="w-64" min={6} maxLength={100} 
         onChange={(e) => {setLength(e.target.value)}}/>
        <label>length: {length}</label>
      <div className="flex gap-4">
        <label className="flex items-center gap-1">
          <input type="checkbox" onChange={(e) => {setNumberEnabled((prev) => !prev)}} />
          Number Allowed 
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox"  onChange={(e) => {setCharEnabled((prev) => !prev)}}/>
          Character Allowed
        </label>
      </div>
    </div>
    
  </div>
</div>

    
  </>
  
  )
}

export default App
