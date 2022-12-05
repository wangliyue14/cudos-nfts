import React, { useMemo, useState } from "react";
import chainInfo from "../config/chainInfo";
import {
  copyData,
  shortenAddress,
  shortenData,
  shortenURI,
} from "../helper/wallet";
import useWallet from "../hooks/useWallet";
import CopiableText from "./CopiableText";
import Spinner from "./Spinner";

export default function NFTList({ items, loading, error, denomId }) {
  const { account } = useWallet();
  const [filterMine, setFilterMine] = useState(true);

  const filteredItems = useMemo(() => {
    if (items) {
      if (filterMine) {
        return items.filter((item) => item.owner === account.address);
      } else {
        return items;
      }
    }
    return null;
  }, [items, filterMine, account]);

  return (
    <div className="bg-gray mt-4 mb-4 bg-blue-dark-2 rounded-lg p-4 lg:w-[calc(75%-20px)]">
      <div className="flex flex-row justify-between text-blue-dark">
        <p className="text-lg mt-4 mb-4">NFT List</p>
        <button
          className="underline italic"
          onClick={() => setFilterMine(!filterMine)}
        >
          {filterMine ? "Show all" : "Show my NFTs"}
        </button>
      </div>
      <div
        key={0}
        className="lg:flex flex-row bg-blue-dark-3 font-bold p-2 rounded-md text-blue-dark"
      >
        <p className="w-16">#</p>
        <p className="w-64">Name</p>
        <p className="w-48">URI</p>
        <p className="w-48">Owner</p>
        <p className="w-48">Data</p>
        <p className="w-64">Denom</p>
      </div>
      <div className="h-[40em] overflow-y-auto">
        {loading ? (
          <Spinner className="mt-2" />
        ) : error ? (
          <div>Error: {JSON.stringify(error)}</div>
        ) : (
          <>
            {filteredItems.map((item, idx) => (
              <div
                key={idx + 1}
                className={`lg:flex flex-row p-2 hover:bg-blue-dark hover:rounded-md ${
                  idx % 2 === 0 ? "bg-blue-dark-2" : "bg-blue-dark-3 rounded-md"
                }`}
              >
                <p className="w-16 text-blue-dark">{idx + 1}</p>
                <p className="w-64">{item.name}</p>
                <p className="w-48">
                  <a
                    href={item.uri}
                    target="_blank"
                    className="hover:underline"
                  >
                    {shortenURI(item.uri)}
                  </a>
                </p>
                <CopiableText
                  text={shortenAddress(item.owner)}
                  textToCopy={item.owner}
                  label="Address"
                  link={chainInfo.accountExplorerUrl + item.owner}
                />
                <CopiableText
                  text={shortenData(item.data)}
                  textToCopy={item.data}
                  label="Data"
                />
                <p className="w-64">{item.denom && item.denom.name}</p>
              </div>
            ))}

            {denomId && filterMine && filteredItems.length === 0 && (
              <p className="mt-4 italic text-blue-dark text-center">
                There is no NFTs you owned yet.
                <br />
                Mint new NFTs or click 'Show all' to see all NFTs.
              </p>
            )}
            {!denomId && items.length === 0 && (
              <p className="mt-4 italic text-blue-dark text-center">
                Please select denom in the left panel.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
