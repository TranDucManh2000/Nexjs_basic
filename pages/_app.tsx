import "antd/dist/reset.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
