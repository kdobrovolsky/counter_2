import s from './TableCounter.module.css'
import {selectCounter} from "@/model/counter-selector.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";


export const TableCounter = () => {
    const counter = useAppSelector(selectCounter);
    const displayValue = counter.error ? counter.error: counter.count && counter.isSettingMode? 'enter values and press "set"' : counter.count
    return <h1 className={!counter.error ? s.table : s.tableRed}>{displayValue}</h1>
}