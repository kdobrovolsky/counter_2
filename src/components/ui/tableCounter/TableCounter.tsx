import s from './TableCounter.module.css'
export type TableCounterPropsType = {
    count: number
}

export const TableCounter = ({count}:TableCounterPropsType) => {
    return <h1 className={count<5 ? s.table : s.tableRed}>{count}</h1>
}