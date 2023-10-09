import { useRouter } from 'next/router';

const CenterPage = () => {
  const router = useRouter();

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();

    // Navigate to the respective page based on the key pressed
    switch (key) {
      case 'h':
        router.push('/left');
        break;
      case 'j':
        router.push('/down');
        break;
      case 'k':
        router.push('/up');
        break;
      case 'l':
        router.push('/right');
        break;
      default:
        break;
    }
  };

  // Listen for key presses
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyNavigation);
  }

  return (
    <div>
      <h2>中央ページ</h2>
      <p>h: 左, j: 下, k: 上, l: 右</p>
    </div>
  );
};

export default CenterPage;

