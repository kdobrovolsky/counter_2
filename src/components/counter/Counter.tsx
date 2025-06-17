import { Button } from "../ui/button/Button"
import s from './Counter.module.css'
import { TableCounter } from "../ui/tableCounter/TableCounter"


export type CounterPropsType = {
    count: number
    handleButtonIncrement: ()=> void
    handleButtonReset: ()=> void
    maxValue: number
    startValue: number
}


export function Counter({maxValue,startValue,count,handleButtonIncrement,handleButtonReset}:CounterPropsType) {

  
  return(
    <div className={s.counterWrapper}>
        <TableCounter count={count} maxValue={maxValue}/>
        
      <div className={s.buttonWrapper}>
      <Button title="count" onClick={handleButtonIncrement} disabled={count>=maxValue}/>
      <Button title="reset" onClick={handleButtonReset} disabled={count<=startValue || startValue< 0}/>
      </div>
    </div>
  )

}