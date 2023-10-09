import { useRouter } from 'next/router';
import Link from 'next/link';

const DirectionPage = ({ direction }) => {
  const router = useRouter();

  const handleKeyNavigation = (event) => {
    const key = event.key.toLowerCase();
    let oppositeDirection = '';

    // Determine opposite direction based on the key pressed
    switch (key) {
      case 'h':
        oppositeDirection = 'right';
        break;
      case 'j':
        oppositeDirection = 'up';
        break;
      case 'k':
        oppositeDirection = 'down';
        break;
      case 'l':
        oppositeDirection = 'left';
        break;
      default:
        oppositeDirection = '';
    }

    // Navigate to the opposite direction or center if no opposite direction
    if (oppositeDirection) {
      router.push(`/${oppositeDirection}`);
    } else {
      router.push('/');
    }
  };

  // Listen for key presses
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyNavigation);
  }

  return (
    <div>
      <h2>{direction}のページ</h2>
      <p>Vimライクなキー（h、j、k、l）で移動してください。逆方向キーで中央に戻ります。</p>
      <ul>
        <li>
          <Link href="/left">
            左へ移動 (h)
          </Link>
        </li>
        <li>
          <Link href="/down">
            下へ移動 (j)
          </Link>
        </li>
        <li>
          <Link href="/up">
            上へ移動 (k)
          </Link>
        </li>
        <li>
          <Link href="/right">
            右へ移動 (l)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DirectionPage;
