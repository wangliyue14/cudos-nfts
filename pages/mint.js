import Head from "next/head";
import React, { useState } from "react";
import IssueDenom from "../components/IssueDenom";
import Layout from "../components/Layout";
import MintNFT from "../components/MintNFT";

export default function MintPage({}) {
  return (
    <div>
      <Head>
        <title>CUDOS NFTs Explorer - Mint NFT</title>
        <meta name="description" content="Explorer for CUDOS NFTs - Mint NFT" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Layout>
        <div className="flex flex-row">
          <div>
            <IssueDenom />
          </div>
          <div className="ml-4">
            <MintNFT />
          </div>
        </div>
      </Layout>
    </div>
  );
}
