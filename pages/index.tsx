import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Amangoua Kacou Ange | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
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
        <meta
          property="og:description"
          content="Amangoua Kacou Ange, frontend developer based in Cote d'Ivoire"
        />
      </Head>
      <Home />
    </>
  );
}
