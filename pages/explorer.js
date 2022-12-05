import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Explorer from "../components/Explorer";
import IssueDenom from "../components/IssueDenom";
import MintNFT from "../components/MintNFT";

export default function ExplorerPage({}) {
  const router = useRouter();
  const [openDenomIssue, setOpenDenomIssue] = useState(false);
  const [openNFTMint, setOpenNFTMint] = useState(false);
  const [reloadDenoms, setReloadDenoms] = useState(0);
  const [reloadNfts, setReloadNfts] = useState(0);
  const [selectedDenomId, setSelectedDenomId] = useState("");

  useEffect(() => {
    if (!window.keplr) {
      router.replace("/");
    }
  }, []);

  const onIssueDenom = () => {
    setOpenDenomIssue(true);
  };

  const onMintNFT = (denomId) => {
    setSelectedDenomId(denomId);
    setOpenNFTMint(true);
  };

  const onIssueSuccess = () => {
    setReloadDenoms((i) => i + 1);
  };

  const onMintSuccess = () => {
    setReloadNfts((i) => i + 1);
  };

  return (
    <div>
      <Head>
        <title>CUDOS NFTs Explorer</title>
        <meta name="description" content="Explorer for CUDOS NFTs" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Explorer
        onIssueDenom={onIssueDenom}
        onMintNFT={onMintNFT}
        reloadDenoms={reloadDenoms}
        reloadNfts={reloadNfts}
      />
      <IssueDenom
        open={openDenomIssue}
        setOpen={setOpenDenomIssue}
        onSuccess={onIssueSuccess}
      />
      <MintNFT
        open={openNFTMint}
        setOpen={setOpenNFTMint}
        onSuccess={onMintSuccess}
        reloadDenoms={reloadDenoms}
        selectedDenomId={selectedDenomId}
      />
    </div>
  );
}
