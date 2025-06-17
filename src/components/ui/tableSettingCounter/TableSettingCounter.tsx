import { ChangeEvent } from 'react'
import s from './TableSettingCounter.module.css'

export type TableSettingCounterType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>)=> void
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    startValue:number
    isInvalid: boolean
}

export const TableSettingCounter = ({isInvalid,startValue,maxValue,onChangeMaxValueHandler,onChangeStartValueHandler}:TableSettingCounterType) => {
    return(
        <div className={s.tableWrapper}>
            <div className={s.inputWrapper}>
                <label className={s.label} >max value:</label>
                <input value={maxValue} type="number" className={isInvalid ? s.inputError: ''} onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label} >min value:</label>
                <input value={startValue} type="number" className={isInvalid ? s.inputError: ''} onChange={onChangeStartValueHandler}/>
            </div>
        </div>
    )
}