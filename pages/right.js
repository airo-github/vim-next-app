import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { timerState } from './timerState';
import { useEffect } from 'react';

const RightPage = () => {
  const router = useRouter();
  const [timer, setTimer] = useRecoilState(timerState);

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();

    // Navigate to the respective page based on the key pressed
    if (key === 'h') {
      router.push('/center');
    }
    else {
      router.push('/right');
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
      <h2>右ページ</h2>
      <p>経過時間: {timer.time}</p>
      <p>h: 中央ページへ</p>
    </div>
  );
};

export default RightPage;

