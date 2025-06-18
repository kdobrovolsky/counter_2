import s from './TableCounter.module.css'
export type TableCounterPropsType = {
    count: number
    maxValue: number
    error: string | null
    isSettingMode: boolean
}

export const TableCounter = ({isSettingMode,error,count}:TableCounterPropsType) => {
    const displayValue = error ? error: count && isSettingMode? 'enter values and press "set"' : count
    return <h1 className={!error ? s.table : s.tableRed}>{displayValue}</h1>
}