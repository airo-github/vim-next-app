import { useContext } from 'react';
import Link from 'next/link';
import { TimerContext } from './_app';

const Home = () => {
  const { startTimer } = useContext(TimerContext);

  const handleStartTimer = () => {
    startTimer();
  };

  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleStartTimer}>
        <Link href="/center">
          Game Start
        </Link>
      </button>
    </div>
  );
};

export default Home;
