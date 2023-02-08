import { useEffect, useState } from "react";

export const useTimer = () => {
  const [input, setInput] = useState("");
  const [time, setTime] = useState();
  const [iscount, setCount] = useState(false);

  const result = input * 60;
  const changeInputHandler = (value) => {
    setInput(value);
  };
  const addHandler = () => {
    setTime(result);
    setInput("");
  };
  useEffect(() => {
    const interval = setInterval(() => {
      iscount &&
        setTime((time) => (time >= 1 ? time- 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [iscount]);

  const startHandler = () => {
    setCount(true);
  };
  const stopHandler = () => {
    setCount(false);
  };
  const resetHandler = () => {
    setCount(false);
    setTime(0);
  };

  return {
    time,
    iscount,
    startHandler,
    resetHandler,
    stopHandler,
    input,
    changeInputHandler,
    addHandler,
  };
};
