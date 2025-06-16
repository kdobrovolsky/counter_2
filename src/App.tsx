import { ChangeEvent, useEffect, useState } from "react";
import { Counter } from "./components/counter/Counter";
import './App.css'
import { SettingCounter } from "./components/settingCounter/SettingCounter";


export function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setStartValue] = useState(0);
  
  useEffect(()=> {
    let valueString = localStorage.getItem('maxValue')
    if(valueString){
      let newValue = JSON.parse(valueString)
      setMaxValue(newValue)
    }
  },[])

  useEffect(()=> {
    let valueString = localStorage.getItem('startValue')
    if(valueString){
      let newValue = JSON.parse(valueString)
      setStartValue(newValue)
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [maxValue]);
  
  useEffect(() => {
    localStorage.setItem('startValue', JSON.stringify(startValue));
  }, [startValue]);






  const handleButtonIncrement = () => {
    if(count<maxValue){
      setCount(prev => prev +1)
    }
  }
  const handleButtonReset = () => {
    setCount(startValue)
  }

  const onChangeMaxValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const value = +(e.target.value);
    setMaxValue(value);
  }

  const onChangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const value = +(e.target.value);
    setStartValue(value);
  }

  

  return(
    <div className="app">
      <Counter 
      count={count} 
      handleButtonIncrement = {handleButtonIncrement}
      handleButtonReset ={handleButtonReset}
      maxValue={maxValue}
      startValue = {startValue}
     
      />


      <SettingCounter 
      onChangeMaxValueHandler={onChangeMaxValueHandler} 
      maxValue={maxValue}  
      onChangeStartValueHandler = {onChangeStartValueHandler} 
      startValue={startValue}
     
      />
      
    </div>
  )

}