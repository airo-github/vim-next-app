import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { timerState } from './timerState';
import { useEffect } from 'react';

const CenterPage = () => {
  const router = useRouter();
  const [timer, setTimer] = useRecoilState(timerState);

  const handleStop = () => {
    setTimer(prev => ({
      isRunning: false,
      time: prev.time
    }));
  }

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();

    // Navigate to the respective page based on the key pressed
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

  // Listen for key presses
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyNavigation);
  }

  useEffect(() => {

    if (!timer.isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => ({
        ...prev,
        time: prev.time + 1
      }));
    }, 1000);

    return () => clearInterval(interval);

  }, [timer.isRunning]);

  return (
    <div>
      <h2>中央ページ</h2>
      <p>経過時間: {timer.time}</p>
      <button onClick={handleStop}>
        停止
      </button>
      <p>h: 左, j: 下, k: 上, l: 右</p>
    </div>
  );
};

export default CenterPage;

