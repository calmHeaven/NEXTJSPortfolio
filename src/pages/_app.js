import { Analytics } from '@vercel/analytics/next';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
        <Analytics />
      </Theme>
    </>
  );
}
 