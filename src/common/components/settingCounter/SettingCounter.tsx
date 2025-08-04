import { ChangeEvent } from "react";
import s from "./SettingCounter.module.css";
import {selectCounter} from "@/model/counter-selector.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {TableSettingCounter} from "@/common/components/ui/tableSettingCounter/TableSettingCounter.tsx";
import {Button} from "@/common/components/ui/button/Button.tsx";


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
