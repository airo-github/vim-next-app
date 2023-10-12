import { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { TimerContext } from './_app';

const CenterPage = () => {
  const { timerState } = useContext(TimerContext);
  const router = useRouter();
  const [stoppedTime, setStoppedTime] = useState(null);
  const [stoppedTimerSeconds, setStoppedTimerSeconds] = useState(null);

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();

    switch (key) {
      case 'h':
        router.push('/left');
        break;
      case 'j':
        router.push('/down');
        break;
      case 'k':
        router.push('/up');
        break;
      case 'l':
        router.push('/right');
        break;
      default:
        break;
    }
  };

  const handleStopTimer = () => {
    if (timerState.isActive) {
      const currentTime = new Date();
      const elapsedMilliseconds = currentTime - timerState.startTime;
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      setStoppedTimerSeconds(elapsedSeconds);
      setStoppedTime(new Date());
    }
  };

  useEffect(() => {
    // タイマーが停止した時に停止ボタンを押すことで加算を停止する
    if (!timerState.isActive) {
      clearInterval(timerInterval);
    }
  }, [timerState.isActive]);

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyNavigation);
  }

  return (
    <div>
      <h2>中央ページ</h2>
      <p>h: 左, j: 下, k: 上, l: 右</p>
      <p>タイマーの秒数: {timerState.elapsedTime}</p>
      {timerState.isActive && <button onClick={handleStopTimer}>タイマー停止</button>}
      {stoppedTime && (
        <p>
          タイマー停止時の秒数: {stoppedTimerSeconds}, 停止した時間: {stoppedTime.toLocaleTimeString()}
        </p>
      )}
    </div>
  );
};

export default CenterPage;

