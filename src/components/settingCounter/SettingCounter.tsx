import { ChangeEvent } from "react"
import { Button } from "../ui/button/Button"
import { TableSettingCounter } from "../ui/tableSettingCounter/TableSettingCounter"
import s from './SettingCounter.module.css'

export type SettingCounterPropsType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    isInvalid: boolean
    maxValue: number
    startValue:number
}

export const SettingCounter = ({startValue,maxValue,isInvalid,onChangeMaxValueHandler,onChangeStartValueHandler}:SettingCounterPropsType) => {
    return(
        <div className={s.settingCounterWrapper}>
            <TableSettingCounter 
            onChangeStartValueHandler={onChangeStartValueHandler} 
            onChangeMaxValueHandler={onChangeMaxValueHandler} 
            isInvalid = {isInvalid}
            maxValue={maxValue}
            startValue= {startValue}/>
            
            <div className={s.buttonWrapper}>
            <Button title="set" onClick={()=>{}}/>
            </div>
        </div>
    )
}