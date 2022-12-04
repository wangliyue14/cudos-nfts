import Head from "next/head";
import React, { useState } from "react";
import Explorer from "../components/Explorer";
import IssueDenom from "../components/IssueDenom";
import MintNFT from "../components/MintNFT";

export default function SignupPage({}) {
  const [openDenomIssue, setOpenDenomIssue] = useState(false);
  const [openNFTMint, setOpenNFTMint] = useState(false);

  const onIssueDenom = () => {
    setOpenDenomIssue(true);
  };

  const onMintNFT = () => {
    setOpenNFTMint(true);
  };

  return (
    <div>
      <Head>
        <title>CUDOS NFTs Explorer - Your NFTs</title>
        <meta name="description" content="Explorer for CUDOS NFTs" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Explorer onIssueDenom={onIssueDenom} onMintNFT={onMintNFT} />
      <IssueDenom open={openDenomIssue} setOpen={setOpenDenomIssue} />
      <MintNFT open={openNFTMint} setOpen={setOpenNFTMint} />
    </div>
  );
}
