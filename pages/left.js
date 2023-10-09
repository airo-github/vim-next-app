import { useRouter } from 'next/router';

const LeftPage = () => {
  const router = useRouter();

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();

    // Navigate to the respective page based on the key pressed
    if (key === 'l') {
      router.push('/center');
    }
    else {
      router.push('/left');
    }
  };

  // Listen for key presses
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyNavigation);
  }

  return (
    <div>
      <h2>左ページ</h2>
      <p>l: 中央ページへ</p>
    </div>
  );
};

export default LeftPage;

