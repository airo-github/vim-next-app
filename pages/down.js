import { useRouter } from 'next/router';

const DownPage = () => {
  const router = useRouter();

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

  return (
    <div>
      <h2>下ページ</h2>
      <p>k: 中央ページへ</p>
    </div>
  );
};

export default DownPage;

