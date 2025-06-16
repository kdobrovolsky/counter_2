import { Button } from "../ui/button/Button"
import { TableSettingCounter } from "../ui/tableSettingCounter/TableSettingCounter"
import s from './SettingCounter.module.css'

// export type SettingCounterPropsType = {
    
// }

export const SettingCounter = () => {
    return(
        <div className={s.settingCounterWrapper}>
            <TableSettingCounter/>
            <div className={s.buttonWrapper}>
            <Button title="set" onClick={()=> {}}/>
            </div>
        </div>
    )
}