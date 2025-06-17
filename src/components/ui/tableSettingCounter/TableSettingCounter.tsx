import { ChangeEvent } from 'react'
import s from './TableSettingCounter.module.css'

export type TableSettingCounterType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>)=> void
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    startValue:number
}

export const TableSettingCounter = ({startValue,maxValue,onChangeMaxValueHandler,onChangeStartValueHandler}:TableSettingCounterType) => {
    const getInputClassName = (isMaxInput: boolean) => {
        const isInvalid = 
          maxValue < startValue || 
          maxValue === startValue || 
          (isMaxInput ? maxValue < 0 : startValue < 0);
        
        return isInvalid ? s.inputError : '';
    }
    return(
        
        <div className={s.tableWrapper}>
            <div className={s.inputWrapper}>
                <label className={s.label} >max value:</label>
                <input type="number" value={maxValue} className={getInputClassName(true)} onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label} >min value:</label>
                <input type="number" value={startValue} className={getInputClassName(false)} onChange={onChangeStartValueHandler}/>
            </div>
        </div>
    )
}