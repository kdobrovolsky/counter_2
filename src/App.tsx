import { ChangeEvent, useEffect, useState } from "react";
import { Counter } from "./components/counter/Counter";
import './App.css'
import { SettingCounter } from "./components/settingCounter/SettingCounter";


export function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setStartValue] = useState(0);
  
  useEffect(()=> {
    const startValueString = localStorage.getItem('startValue')
    const maxValueString = localStorage.getItem('maxValue')
    if(maxValueString){setStartValue(JSON.parse(maxValueString))}
    if(startValueString){setStartValue(JSON.parse(startValueString))}
  },[])

  
  useEffect(() => {
   return localStorage.setItem('maxValue', JSON.stringify(maxValue));
  }, [maxValue]);
  
  useEffect(() => {
    return localStorage.setItem('startValue', JSON.stringify(startValue));
  }, [startValue]);

  // const setToLocalStorageHandler = () => {
  //   return (
  //      localStorage.setItem('startValue', JSON.stringify(startValue)),
  //      localStorage.setItem('maxValue', JSON.stringify(maxValue))
  //   )
  // }

  // const getToLocalStorageHandler = () => {
  //   const startValueString = localStorage.getItem('startValue')
  //   if(startValueString){setStartValue(JSON.parse(startValueString))}
  // }



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