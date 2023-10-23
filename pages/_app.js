import '@/styles/globals.css'
import '../styles/styles.css';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
