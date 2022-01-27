import "../styles/globals.scss";
import type { AppProps } from "next/app";
import useMediaQuery from "./components/Hooks/useMediaQuery";
function MyApp({ Component, pageProps }: AppProps) {
  const isMobile = useMediaQuery("(max-width: 460px)");
  return <>{isMobile && <Component {...pageProps} />}</>;
}

export default MyApp;
