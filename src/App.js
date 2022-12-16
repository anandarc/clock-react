import { useState } from 'react';
import './App.css';

function App() {
  let time=new Date().toLocaleTimeString()

  const [cTime, setCtime]=useState(time)

  const updateTime=()=>{
    time=new Date().toLocaleTimeString()
    setCtime(time)
  }
  setInterval(updateTime,1000)  

  return (
   <div>
   <h1>{cTime}</h1>
   </div>
   
  );
}

export default App;
