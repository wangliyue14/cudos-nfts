import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
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
  const [filterMine, setFilterMine] = useState(true);

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const denomsFiltered = useMemo(() => {
    if (denoms) {
      if (filterMine) {
        return denoms.filter((item) => item.creator === account.address);
      } else {
        return denoms;
      }
    }
    return null;
  }, [denoms, filterMine, account]);

  useEffect(() => {
    if (
      account &&
      account.address &&
      selectedDenom >= 0 &&
      selectedDenom < denomsFiltered.length
    ) {
      setLoading(true);
      queryNfts(denomsFiltered[selectedDenom].id)
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
          denoms={denomsFiltered}
          loading={loadingDenoms}
          error={denomsError}
          selectedDenom={selectedDenom}
          setSelectedDenom={setSelectedDenom}
          filterMine={filterMine}
          changeFilter={() => setFilterMine(!filterMine)}
        />
        <div className="w-4" />
        <NFTList items={items} loading={loading} error={error} />
      </div>
    </Layout>
  );
}
