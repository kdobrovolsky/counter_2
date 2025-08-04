import { Button } from "../ui/button/Button";
import s from "./Counter.module.css";
import { TableCounter } from "../ui/tableCounter/TableCounter";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectCounter} from "../../model/counterSelectors.ts";

export type CounterPropsType = {
  handleButtonIncrement: () => void;
  handleButtonReset: () => void;

};

export function Counter({
  handleButtonIncrement,
  handleButtonReset,
}: CounterPropsType) {


  const counter = useAppSelector(selectCounter);

  return (
    <div className={s.counterWrapper}>
      <TableCounter/>

      <div className={s.buttonWrapper}>
        <Button
          title="count"
          onClick={handleButtonIncrement}
          disabled={counter.count >= counter.maxValue}
        />
        <Button
          title="reset"
          onClick={handleButtonReset}
          disabled={counter.count <= counter.startValue}
        />
        {/*<Button title="set" onClick={onShowSettingSet} />*/}
      </div>
    </div>
  );
}
