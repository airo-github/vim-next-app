import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { timerState } from './timerState';
import { useEffect } from 'react';

const DownPage = () => {
  const router = useRouter();
  const [timer, setTimer] = useRecoilState(timerState);

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();

    // Navigate to the respective page based on the key pressed
    if (key === 'k') {
      router.push('/center');
    }
    else {
      router.push('/down');
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
      <h2>下ページ</h2>
      <p>経過時間: {timer.time}</p>
      <p>k: 中央ページへ</p>
    </div>
  );
};

export default DownPage;

