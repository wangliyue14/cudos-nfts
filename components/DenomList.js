import React from "react";
import { shortenAddress } from "../helper/wallet";
import Spinner from "./Spinner";

export default function DenomList({
  denoms,
  loading,
  error,
  selectedDenom,
  setSelectedDenom,
}) {
  const copyData = (data) => {
    navigator.clipboard.writeText(data).then(() => {
      console.log("Copied data");
    });
  };

  return (
    <div className="bg-gray mt-4 mb-4 bg-blue-dark-2 rounded-lg p-4 lg:w-1/4">
      <div className="text-lg text-blue-dark mt-4 mb-4">
        <h3>Denom List</h3>
      </div>
      <div
        key={0}
        className="lg:flex flex-row bg-blue-dark-3 font-bold p-2 rounded-md text-blue-dark"
      >
        <p className="w-16">#</p>
        <p className="w-48">Name</p>
        <p className="w-32">Creator</p>
      </div>
      <div className="h-[40em] overflow-y-auto">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div>Error: {JSON.stringify(error)}</div>
        ) : (
          denoms.map((item, idx) => (
            <div
              key={idx + 1}
              className={`lg:flex flex-row p-2 hover:rounded-md ${
                idx % 2 === 0 ? "bg-blue-dark-2" : "bg-blue-dark-3 rounded-md"
              } ${idx === selectedDenom ? " bg-blue-dark-4" : ""}`}
              onClick={() => setSelectedDenom(idx)}
            >
              <p className="w-16 text-blue-dark">{idx + 1}</p>
              <p className="w-48 text-sm">{item.name}</p>
              <p
                className="w-32 text-sm cursor-pointer"
                onClick={() => copyData(item.creator)}
              >
                {shortenAddress(item.creator)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
