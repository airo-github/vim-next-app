import '@/styles/globals.css'
import '../styles/styles.css';
import { createContext, useState } from 'react';

export const TimerContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [timerState, setTimerState] = useState({
    isActive: false,
    startTime: null,
  });

  const startTimer = () => {
    setTimerState({
      isActive: true,
      startTime: new Date(),
    });
  };

  return (
    <TimerContext.Provider value={{ timerState, startTimer }}>
      <Component {...pageProps} />
    </TimerContext.Provider>
  );
};

export default MyApp;

