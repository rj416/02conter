import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter,setCounter] = useState(15); 


  const  Addme = () => {
    console.log("working");
    if(counter<=20){
setCounter(counter+1);
  }
  else{
    setCounter(counter);
  }}

const  Decrease = () => {
  if(counter>=1){
setCounter(counter-1);

  }
  else{
    setCounter(counter);
  }}

  return (
   <>
    <h1>Chai And React</h1>
    <h2>conter value is:{counter}</h2>
    <button onClick={Addme}>Add me</button>
    <br />
    <button onClick={Decrease}>Decrese Me</button>
    </>
  )
}


export default App
