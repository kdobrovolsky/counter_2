import { ChangeEvent, useEffect, useState } from "react";
import { Counter } from "./components/counter/Counter";
import './App.css'
import { SettingCounter } from "./components/settingCounter/SettingCounter";


export function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setStartValue] = useState(0);
  const [error,setError] = useState<string|null>(null)
  const [isInit, setIsInit] = useState(false);

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
    let maxValueString = localStorage.getItem('maxValue')
    if(maxValueString){
      let newValue = JSON.parse(maxValueString)
      setMaxValue(newValue)
    }
    let valueString = localStorage.getItem('startValue')
    if(valueString){
      let newValue = JSON.parse(valueString)
      setStartValue(newValue)
      setCount(newValue)
    }
  },[])

  useEffect(() => {
    if (startValue < 0 || maxValue < 0) {
      setError("Values cannot be negative");
    } else if (maxValue < startValue) {
      setError("Max value cannot be less than start value");
    } else if (maxValue === startValue) {
      setError("Max value cannot equal start value");
    } else {
      setError(null);
    }
  },[maxValue, startValue])
  
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
    setIsInit(false)
  }

  const onChangeStartValueHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const value = +(e.target.value);
    localStorage.setItem('startValue', JSON.stringify(value));
    setStartValue(value);
    setIsInit(true)
  }

  const onCounterSet = () => {
    setCount(startValue)
    setIsInit(false)
  }

  const isInvalid = maxValue < startValue || maxValue === startValue || maxValue < 0 || startValue < 0;
  
  return(
    <div className="app">
      <Counter 
      count={count} 
      handleButtonIncrement = {handleButtonIncrement}
      handleButtonReset ={handleButtonReset}
      maxValue={maxValue}
      startValue = {startValue}
      error={error}
      isInit = {isInit}
      />
      <SettingCounter 
      onCounterSet={onCounterSet}
      onChangeMaxValueHandler={onChangeMaxValueHandler} 
      maxValue={maxValue}  
      onChangeStartValueHandler = {onChangeStartValueHandler} 
      startValue={startValue}
      isInvalid={isInvalid}
      isInit = {isInit}
      />
      
    </div>
  )

}