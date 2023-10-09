import { useRouter } from 'next/router';

const UpPage = () => {
  const router = useRouter();

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();

    // Navigate to the respective page based on the key pressed
    if (key === 'j') {
      router.push('/center');
    }
    else {
      router.push('/up');
    }
  };

  // Listen for key presses
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyNavigation);
  }

  return (
    <div>
      <h2>上ページ</h2>
      <p>j: 中央ページへ</p>
    </div>
  );
};

export default UpPage;

