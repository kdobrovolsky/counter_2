import { useState } from "react";
import { Counter } from "./components/counter/Counter";
import './App.css'
import { SettingCounter } from "./components/settingCounter/SettingCounter";


export function App() {
  const [count, setCount] = useState(0);
  // const [maxValue, setMaxValue] = useState(10);
  // const [startValue, setStartValue] = useState(0);

  // const ControlStartValue = (value: number) => {
  //   setStartValue(value)
  // }

  return(
    <div className="app">
    
      <Counter setCount={setCount} count={count}/>
      <SettingCounter/>
    </div>
  )

}