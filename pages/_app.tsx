import '../styles/globals.css';
import type { AppProps } from 'next/app'; // Importamos los tipos correctos

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
