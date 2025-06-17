import s from './TableCounter.module.css'
export type TableCounterPropsType = {
    count: number
    maxValue: number
    error: string | null
    isInit: boolean
}

export const TableCounter = ({isInit,error,maxValue,count}:TableCounterPropsType) => {
    const displayValue = error ? error: count && isInit? 'enter values and press "set"' : count
    return <h1 className={count<maxValue ? s.table : s.tableRed}>{displayValue}</h1>
}