import Link from 'next/link';
import { useSetRecoilState } from 'recoil'
import { timerState } from './timerState'

const Home = () => {

  const setTimer = useSetRecoilState(timerState);

  const startTimer = () => {
    setTimer({
      isRunning: true,
      time: 0
    });
  }

  return (
    <div>
      <h1>ホームページ</h1>
      <Link href="/center" onClick={startTimer}>
        Game Start
      </Link>
    </div>
  );
};

export default Home;
