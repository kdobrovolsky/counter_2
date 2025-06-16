import { ChangeEvent } from 'react'
import s from './TableSettingCounter.module.css'

export type TableSettingCounterType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>)=> void
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    maxValue: number
    startValue:number
}

export const TableSettingCounter = ({startValue,maxValue,onChangeMaxValueHandler,onChangeStartValueHandler}:TableSettingCounterType) => {
    return(
        <div className={s.tableWrapper}>
            <div className={s.inputWrapper}>
                <label className={s.label} >max value:</label>
                <input type="number" className={maxValue < 0 ? s.inputError: ''} onChange={onChangeMaxValueHandler}/>
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label} >min value:</label>
                <input type="number" className={startValue < 0 ? s.inputError: ''} onChange={onChangeStartValueHandler}/>
            </div>
        </div>
    )
}