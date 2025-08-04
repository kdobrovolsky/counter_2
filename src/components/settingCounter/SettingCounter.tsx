import { ChangeEvent } from "react";
import { Button } from "../ui/button/Button";
import { TableSettingCounter } from "../ui/tableSettingCounter/TableSettingCounter";
import s from "./SettingCounter.module.css";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counterSelectors.ts";

export type SettingCounterPropsType = {
  onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeStartValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onCounterSet: () => void;
};

export const SettingCounter = ({
  onChangeMaxValueHandler,
  onChangeStartValueHandler,
  onCounterSet,
}: SettingCounterPropsType) => {

  const counter = useAppSelector(selectCounter);

  return (
    <div className={s.settingCounterWrapper}>
      <TableSettingCounter
        onChangeStartValueHandler={onChangeStartValueHandler}
        onChangeMaxValueHandler={onChangeMaxValueHandler}
      />

      <div className={s.buttonWrapper}>
        <Button
          title="set"
          onClick={onCounterSet}
          disabled={!counter.isSettingMode || counter.isInvalid}
        />
      </div>
    </div>
  );
};
