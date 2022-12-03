import Head from "next/head";
import React from "react";
import Explorer from "../components/Explorer";

export default function SignupPage({}) {
  return (
    <div>
      <Head>
        <title>CUDOS NFTs Explorer - Your NFTs</title>
        <meta name="description" content="Explorer for CUDOS NFTs" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Explorer />
    </div>
  );
}
