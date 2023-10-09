import { useRouter } from 'next/router';

const RightPage = () => {
  const router = useRouter();

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

  return (
    <div>
      <h2>右ページ</h2>
      <p>h: 中央ページへ</p>
    </div>
  );
};

export default RightPage;

