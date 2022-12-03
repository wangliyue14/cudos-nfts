import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray">
      <Head>
        <title>CUDOS NFTs Explorer</title>
        <meta name="description" content="Explorer for CUDOS NFTs" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main>
        <h2 className="text-3xl font-bold">Welcome to CUDOS NFTs Explorer</h2>
      </main>

      <footer></footer>
    </div>
  );
}
