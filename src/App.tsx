import { useState } from "react";
import { Counter } from "./components/Counter";
import './App.css'


export function App() {
  const [count, setCount] = useState(0);
  // const [maxValue, setMaxValue] = useState(10);
  // const [startValue, setStartValue] = useState(0);

  return(
    <div className="app">
    
      <Counter setCount={setCount} count={count}/>
    </div>
  )

}