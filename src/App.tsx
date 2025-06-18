import { ChangeEvent, useEffect, useState } from "react";
import { Counter } from "./components/counter/Counter";
import "./App.css";
import { SettingCounter } from "./components/settingCounter/SettingCounter";

export function App() {
  const [count, setCount] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [startValue, setStartValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isSettingMode, setIsSettingMode] = useState(false);
  const [showSetting, setShowSetting] = useState(()=> {
    const saved = localStorage.getItem("showSetting");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    const maxValueString = localStorage.getItem("maxValue");
    const valueString = localStorage.getItem("startValue");
    if (maxValueString) setMaxValue(JSON.parse(maxValueString));
    if (valueString) {
      setStartValue(JSON.parse(valueString));
      setCount(JSON.parse(valueString));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("showSetting", JSON.stringify(showSetting));
  }, [showSetting]);

  useEffect(() => {
    if (startValue < 0 || maxValue < 0) {
      setError("Values cannot be negative!");
    } else if (maxValue < startValue) {
      setError("Max value cannot be less than start value!");
    } else if (maxValue === startValue) {
      setError("Max value cannot equal start value!");
    } else if (isNaN(startValue) || isNaN(maxValue)) {
      setError("Values must be valid numbers!");
    } else {
      setError(null);
    }
  }, [maxValue, startValue]);

  const handleButtonIncrement = () => {
    if (count < maxValue) setCount((prev) => prev + 1);
  };

  const handleButtonReset = () => {
    setCount(startValue);
  };

  const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    localStorage.setItem("maxValue", JSON.stringify(value));
    setMaxValue(value);
    setIsSettingMode(true);
  };

  const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    localStorage.setItem("startValue", JSON.stringify(value));
    setStartValue(value);
    setIsSettingMode(true);
  };

  const onCounterSet = () => {
    setCount(startValue);
    setIsSettingMode(false);
    setShowSetting(true);
  };

  const onShowSettingSet = () => {
    setShowSetting(false);
  };

  const isInvalid =
    maxValue < startValue ||
    maxValue === startValue ||
    maxValue < 0 ||
    startValue < 0;

  return (
    <div className="app">
      {showSetting ? (
        <Counter
          count={count}
          handleButtonIncrement={handleButtonIncrement}
          handleButtonReset={handleButtonReset}
          maxValue={maxValue}
          startValue={startValue}
          error={error}
          isSettingMode={isSettingMode}
          onShowSettingSet={onShowSettingSet}
        />
      ) : (
        <SettingCounter
          onCounterSet={onCounterSet}
          onChangeMaxValueHandler={onChangeMaxValueHandler}
          maxValue={maxValue}
          onChangeStartValueHandler={onChangeStartValueHandler}
          startValue={startValue}
          isInvalid={isInvalid}
          isSettingMode={isSettingMode}
        />
      )}
    </div>
  );
}
