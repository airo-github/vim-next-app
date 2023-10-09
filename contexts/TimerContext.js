import { createContext, useState, useEffect } from 'react';

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TimerContext.Provider value={timer}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerProvider, TimerContext };

