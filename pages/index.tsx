import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Amangoua Kacou Ange | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="description"
          content="Amangoua Kacou Ange | Frontend Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Amangoua Kacou Ange | Frontend Developer"
        />
        <meta name="description" content="Amangoua Kacou Ange." />

        <meta
          property="og:title"
          content="Amangoua Kacou Ange | Frontend Developer"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://deverajc.com/" />
        <meta
          property="og:image"
          content="https://deverajc.com/screenshot.png"
        />
        <meta property="og:description" content="Amangoua Kacou Ange." />

        <meta
          name="twitter:title"
          content="Amangoua Kacou Ange | Frontend Developer"
        />
      </Head>
      <Home />
    </>
  );
}
