import { createContext, useState, useEffect, useCallback } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
  }, []);

  return (
    <TimerContext.Provider value={{ timer, isRunning, stopTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider, TimerContext };

