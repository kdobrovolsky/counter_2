import { ChangeEvent, useState } from 'react'
import s from './TableSettingCounter.module.css'

// export type TableSettingCounterType = {
    
// }

export const TableSettingCounter = () => {


//    const  onChangeInputMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) =>{
//     const value = parseInt(e.target.value)
//     setMaxValue(value)
//     }

    return(
        <div className={s.tableWrapper}>
            <div className={s.inputWrapper}>
                <label className={s.label} >max value:</label>
                <input type="number" className={startValue < 0 ? s.inputError: ''} onChange={onChangeInputMaxValueHandler}/>
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label} >min value:</label>
                <input type="number" className={startValue < 0 ? s.inputError: ''} onChange={onChangeInputMaxValueHandler}/>
            </div>
        </div>
    )
}