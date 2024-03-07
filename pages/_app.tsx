import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('#nav-bar');
      if (navBar) {
        if (window.scrollY > 0) {
          navBar.classList.add('opaque-nav');
        } else {
          navBar.classList.remove('opaque-nav');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Component {...pageProps} />
  )
}

export default App;
