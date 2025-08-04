import {ChangeEvent} from "react";
import s from "./TableSettingCounter.module.css";
import {useAppSelector} from "../../../hooks/useAppSelector.ts";
import {selectCounter} from "../../../model/counterSelectors.ts";

export type TableSettingCounterType = {
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TableSettingCounter = ({
                                        onChangeMaxValueHandler,
                                        onChangeStartValueHandler,
                                    }: TableSettingCounterType) => {
    const counter = useAppSelector(selectCounter)
    return (
        <div className={s.tableWrapper}>
            <div className={s.inputWrapper}>
                <label className={s.label}>max value:</label>
                <input
                    value={counter.maxValue}
                    type="number"
                    className={counter.isInvalid ? s.inputError : ""}
                    onChange={onChangeMaxValueHandler}
                    autoFocus
                />
            </div>
            <div className={s.inputWrapper}>
                <label className={s.label}>min value:</label>
                <input
                    value={counter.startValue}
                    type="number"
                    className={counter.isInvalid ? s.inputError : ""}
                    onChange={onChangeStartValueHandler}
                    autoFocus
                />
            </div>
        </div>
    );
};
