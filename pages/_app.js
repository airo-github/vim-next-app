import '@/styles/globals.css'
import '../styles/styles.css';
import { createContext, useState, useEffect } from 'react';

export const TimerContext = createContext();

const MyApp = ({ Component, pageProps }) => {
  const [timerState, setTimerState] = useState({
    isActive: false,
    startTime: null,
    elapsedTime: 0, // 新たに追加: 経過時間を保持する
  });

  const startTimer = () => {
    setTimerState((prevState) => ({
      ...prevState,
      isActive: true,
      startTime: new Date(),
    }));
  };

  const updateElapsedTime = () => {
    if (timerState.isActive) {
      const currentTime = new Date();
      const elapsedMilliseconds = currentTime - timerState.startTime;
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

      setTimerState((prevState) => ({
        ...prevState,
        elapsedTime: elapsedSeconds,
      }));
    }
  };

  useEffect(() => {
    const timerInterval = setInterval(updateElapsedTime, 1000);
    return () => clearInterval(timerInterval);
  }, [timerState.isActive, timerState.startTime]);

  return (
    <TimerContext.Provider value={{ timerState, startTimer }}>
      <Component {...pageProps} />
    </TimerContext.Provider>
  );
};

export default MyApp;
