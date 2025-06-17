import { ChangeEvent, useEffect, useState } from "react";
import { Counter } from "./components/counter/Counter";
import './App.css'
import { SettingCounter } from "./components/settingCounter/SettingCounter";


export function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setStartValue] = useState(0);


  // const [counterState, setCountState] = useState( {
  //   counter: 1,
  //   error: '',

  // })
  
  // const [settingsState, setState] = useState( {
  //   maxValue: 123,
  //   minValue: 2,
  //   err: '',
  //   isInit: false,
  // })

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
      setCount(newValue)
    }
  },[])
  
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
    localStorage.setItem('maxValue', JSON.stringify(value));
    setMaxValue(value);
  }

  const onChangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const value = +(e.target.value);
    localStorage.setItem('startValue', JSON.stringify(value));
    setStartValue(value);
  }

  

  const onCounterSet = () => {
    setCount(startValue)
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
      onCounterSet={onCounterSet}
      onChangeMaxValueHandler={onChangeMaxValueHandler} 
      maxValue={maxValue}  
      onChangeStartValueHandler = {onChangeStartValueHandler} 
      startValue={startValue}
     
      />
      
    </div>
  )

}