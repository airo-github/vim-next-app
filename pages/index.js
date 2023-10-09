import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Vim Navigation Game!</h1>
      <Link href="/center">
        Start Game
      </Link>
    </div>
  );
};

export default Home;
