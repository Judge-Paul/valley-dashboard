import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/icon.png" />
        <title>Valley Dashboard</title>
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}
