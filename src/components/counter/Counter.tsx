import { Button } from "../ui/button/Button";
import s from "./Counter.module.css";
import { TableCounter } from "../ui/tableCounter/TableCounter";

export type CounterPropsType = {
  count: number;
  handleButtonIncrement: () => void;
  handleButtonReset: () => void;
  maxValue: number;
  startValue: number;
  error: string | null;
  isSettingMode: boolean;
};

export function Counter({
  isSettingMode,
  error,
  maxValue,
  startValue,
  count,
  handleButtonIncrement,
  handleButtonReset,
}: CounterPropsType) {
  return (
      <div className={s.counterWrapper}>
      
      <TableCounter
        count={count}
        maxValue={maxValue}
        error={error}
        isSettingMode={isSettingMode}
      />

      <div className={s.buttonWrapper}>
        <Button
          title="count"
          onClick={handleButtonIncrement}
          disabled={count >= maxValue}
        />
        <Button
          title="reset"
          onClick={handleButtonReset}
          disabled={count <= startValue}
        />
      </div>
    </div>
  );
}
