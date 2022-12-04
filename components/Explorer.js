import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useDenoms from "../hooks/useDenoms";
import useWallet from "../hooks/useWallet";
import { queryNfts } from "../services/nftService";
import Button from "./Button";
import DenomList from "./DenomList";
import Layout from "./Layout";
import NFTList from "./NFTList";

export default function ({ onIssueDenom, onMintNFT }) {
  const router = useRouter();
  const { account } = useWallet();
  const { denoms, loading: loadingDenoms, error: denomsError } = useDenoms();
  const [selectedDenom, setSelectedDenom] = useState(-1);

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (
      account &&
      account.address &&
      selectedDenom >= 0 &&
      selectedDenom < denoms.length
    ) {
      setLoading(true);
      queryNfts(denoms[selectedDenom].id)
        .then((nfts) => {
          console.log("nfts " + JSON.stringify(nfts));
          setItems(nfts);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(JSON.stringify(err));
          setLoading(false);
        });
    }
  }, [selectedDenom]);

  return (
    <Layout>
      <div className="flex flex-row items-center mt-4">
        <p className="text-lg text-blue-dark">Mint new NFTs</p>
        <Button className="w-36 ml-4 text-md" onClick={onIssueDenom}>
          Issue Denom
        </Button>
        <Button className="w-36 ml-4 text-md" onClick={onMintNFT}>
          Mint NFT
        </Button>
      </div>
      <div className="flex flex-row">
        <DenomList
          denoms={denoms}
          loading={loadingDenoms}
          error={denomsError}
          selectedDenom={selectedDenom}
          setSelectedDenom={setSelectedDenom}
        />
        <div className="w-4" />
        <NFTList items={items} loading={loading} error={error} />
      </div>
    </Layout>
  );
}
