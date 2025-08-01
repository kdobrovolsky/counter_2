import {ChangeEvent} from "react";
import {Counter} from "../components/counter/Counter.tsx";
import "./App.css";
import {SettingCounter} from "../components/settingCounter/SettingCounter.tsx";
import {RootState} from "./store.ts";
import {useAppSelector} from "../hooks/useAppSelectore.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {
  incrementAC,
  maxValueAC,
  resetAC,
  setCounterAC,
  startValueAC,
  validateValuesAC
} from "../model/counter-reducer.ts";

export function App() {

  const dispatch = useAppDispatch();
  const counter = useAppSelector((state: RootState) => state.counter);

  // const [showSetting, setShowSetting] = useState(()=> {
  //   const saved = localStorage.getItem("showSetting");
  //   return saved !== null ? JSON.parse(saved) : true;
  // });

  // useEffect(() => {
  //   const maxValueString = localStorage.getItem("maxValue");
  //   const valueString = localStorage.getItem("startValue");
  //   if (maxValueString) setMaxValue(JSON.parse(maxValueString));
  //   if (valueString) {
  //     setStartValue(JSON.parse(valueString));
  //     setCount(JSON.parse(valueString));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("showSetting", JSON.stringify(showSetting));
  // }, [showSetting]);

  // useEffect(() => {
  //   if (startValue < 0 || maxValue < 0) {
  //     setError("Values cannot be negative!");
  //   } else if (maxValue < startValue) {
  //     setError("Max value cannot be less than start value!");
  //   } else if (maxValue === startValue) {
  //     setError("Max value cannot equal start value!");
  //   } else if (isNaN(startValue) || isNaN(maxValue)) {
  //     setError("Values must be valid numbers!");
  //   } else {
  //     setError(null);
  //   }
  // }, [maxValue, startValue]);

  const handleButtonIncrement = () => {
    dispatch(incrementAC())
  };

  const handleButtonReset = () => {
    dispatch(resetAC())
  };

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    localStorage.setItem("maxValue", JSON.stringify(value));
    // setIsSettingMode(true);
    dispatch(maxValueAC(value));
  };

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    localStorage.setItem("startValue", JSON.stringify(value));
    dispatch(startValueAC(value));
  };

  const onCounterSet = () => {
    dispatch(setCounterAC());
  };

  const onShowSettingSet = () => {
    // setShowSetting(false);
  };

  dispatch(validateValuesAC())

  return (
    <div className="app">
      {/*{showSetting ? (*/}
        <Counter
          count={counter.count}
          handleButtonIncrement={handleButtonIncrement}
          handleButtonReset={handleButtonReset}
          maxValue={counter.maxValue}
          startValue={counter.startValue}
          error={counter.error}
          isSettingMode={counter.isSettingMode}
          onShowSettingSet={onShowSettingSet}
        />
      ) : (
        <SettingCounter
          onCounterSet={onCounterSet}
          onChangeMaxValueHandler={onChangeMaxValueHandler}
          maxValue={counter.maxValue}
          onChangeStartValueHandler={onChangeStartValueHandler}
          startValue={counter.startValue}
          isInvalid={counter.isInvalid}
          isSettingMode={counter.isSettingMode}
        />
      {/*)}*/}
    </div>
  );
}
