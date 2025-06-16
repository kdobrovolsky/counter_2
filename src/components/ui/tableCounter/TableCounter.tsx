import s from './TableCounter.module.css'
export type TableCounterPropsType = {
    count: number
    maxValue: number
}

export const TableCounter = ({maxValue,count}:TableCounterPropsType) => {
    return <h1 className={count<maxValue ? s.table : s.tableRed}>{count}</h1>
}