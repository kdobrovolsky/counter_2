import { ChangeEvent } from "react"
import { Button } from "../ui/button/Button"
import { TableSettingCounter } from "../ui/tableSettingCounter/TableSettingCounter"
import s from './SettingCounter.module.css'

export type SettingCounterPropsType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void

    onCounterSet: () => void
    isInvalid: boolean
    maxValue: number
    startValue:number
    isInit: boolean
}

export const SettingCounter = ({isInit,isInvalid,startValue,maxValue,onChangeMaxValueHandler,onChangeStartValueHandler, onCounterSet}:SettingCounterPropsType) => {
    
    
    
    return(
        <div className={s.settingCounterWrapper}>
            <TableSettingCounter 
            onChangeStartValueHandler={onChangeStartValueHandler} 
            onChangeMaxValueHandler={onChangeMaxValueHandler} 
            maxValue={maxValue}
            startValue= {startValue}
            isInvalid={isInvalid}/>
            
            
            <div className={s.buttonWrapper}>
            <Button title="set" onClick={onCounterSet} disabled = {!isInit} />
            </div>
        </div>
    )
}