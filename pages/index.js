import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>ホームページ</h1>
      <Link href="/center">
        Game Start
      </Link>
    </div>
  );
};

export default Home;
