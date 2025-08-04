import s from './TableCounter.module.css'
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {selectCounter} from "../../../model/counterSelectors.ts";

export const TableCounter = () => {
    const counter = useAppSelector(selectCounter);
    const displayValue = counter.error ? counter.error: counter.count && counter.isSettingMode? 'enter values and press "set"' : counter.count
    return <h1 className={!counter.error ? s.table : s.tableRed}>{displayValue}</h1>
}