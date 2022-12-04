import React from "react";
import { shortenAddress, shortenData, shortenURI } from "../helper/wallet";
import Spinner from "./Spinner";

export default function NFTList({ items, loading, error }) {
  const copyData = (data) => {
    navigator.clipboard.writeText(data).then(() => {
      console.log("Copied data");
    });
  };

  return (
    <div className="bg-gray mt-4 mb-4 bg-blue-dark-2 rounded-lg p-4 lg:w-[calc(75%-20px)]">
      <p className="text-lg text-blue-dark mt-4 mb-4">NFT List</p>
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
          <Spinner />
        ) : error ? (
          <div>Error: {JSON.stringify(error)}</div>
        ) : (
          items.map((item, idx) => (
            <div
              key={idx + 1}
              className={`lg:flex flex-row p-2 hover:bg-blue-dark hover:rounded-md ${
                idx % 2 === 0 ? "bg-blue-dark-2" : "bg-blue-dark-3 rounded-md"
              }`}
            >
              <p className="w-16 text-blue-dark">{idx + 1}</p>
              <p className="w-64">{item.name}</p>
              <p className="w-48">
                <a href={item.uri} target="_blank" className="hover:underline">
                  {shortenURI(item.uri)}
                </a>
              </p>
              <p
                className="w-48 cursor-pointer"
                onClick={() => copyData(item.owner)}
              >
                {shortenAddress(item.owner)}
              </p>
              <p
                className="w-48 cursor-pointer"
                onClick={() => copyData(item.data)}
              >
                {shortenData(item.data)}
              </p>
              <p className="w-64">{item.denom && item.denom.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
