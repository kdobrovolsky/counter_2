
import s from  "@/common/components/counter/Counter.module.css"
import {selectCounter} from "@/model/counter-selector.ts";
import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {TableCounter} from "@/common/components/ui/tableCounter/TableCounter.tsx";
import {Button} from "@/common/components/ui/button/Button.tsx";




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
