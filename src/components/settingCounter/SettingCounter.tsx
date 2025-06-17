import { ChangeEvent } from "react"
import { Button } from "../ui/button/Button"
import { TableSettingCounter } from "../ui/tableSettingCounter/TableSettingCounter"
import s from './SettingCounter.module.css'

export type SettingCounterPropsType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void

    onCounterSet: () => void

    maxValue: number
    startValue:number
}

export const SettingCounter = ({startValue,maxValue,onChangeMaxValueHandler,onChangeStartValueHandler, onCounterSet}:SettingCounterPropsType) => {
    return(
        <div className={s.settingCounterWrapper}>
            <TableSettingCounter 
            onChangeStartValueHandler={onChangeStartValueHandler} 
            onChangeMaxValueHandler={onChangeMaxValueHandler} 
            maxValue={maxValue}
            startValue= {startValue}/>
            
            <div className={s.buttonWrapper}>
            <Button title="set" onClick={onCounterSet}/>
            </div>
        </div>
    )
}