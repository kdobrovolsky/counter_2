import { ChangeEvent } from 'react'
import s from './TableSettingCounter.module.css'

export type TableSettingCounterType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>)=> void
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    isInvalid: boolean
    maxValue: number
    startValue:number
}

export const TableSettingCounter = ({startValue,maxValue,isInvalid,onChangeMaxValueHandler,onChangeStartValueHandler}:TableSettingCounterType) => {
    

    return(
        
        <div className={s.tableWrapper}>
            <div className={s.inputWrapper}>
                <label className={s.label} >max value:</label>
                <input type="number" value={maxValue} className={isInvalid? s.inputError: ''} onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label} >min value:</label>
                <input type="number" value={startValue} className={isInvalid? s.inputError: ''} onChange={onChangeStartValueHandler}/>
            </div>
        </div>
    )
}