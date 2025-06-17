import s from './TableCounter.module.css'
export type TableCounterPropsType = {
    count: number
    maxValue: number
    error: string | null
}

export const TableCounter = ({error,maxValue,count}:TableCounterPropsType) => {
    const displayValue = error ? error: count
    return <h1 className={count<maxValue ? s.table : s.tableRed}>{displayValue}</h1>
}