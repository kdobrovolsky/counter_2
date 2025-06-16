import { Button } from "../ui/button/Button"
import s from './Counter.module.css'
import { TableCounter } from "../ui/tableCounter/TableCounter"

export type CounterPropsType = {
    setCount: (count: number) => void
    count: number
}


export function Counter({setCount,count}:CounterPropsType) {

  
 const  onClickButtonHandlerIncrement = () => {
    setCount(count+1)
  }
  const onClickButtonHandlerReset = () => {
    setCount(0)
  }

  return(
    <div className={s.counterWrapper}>
        <TableCounter count={count} />
      <div className={s.buttonWrapper}>
      <Button title="count" onClick={onClickButtonHandlerIncrement} disabled={count>=5}/>
      <Button title="reset" onClick={onClickButtonHandlerReset} disabled={count<=0}/>
      </div>
    </div>
  )

}