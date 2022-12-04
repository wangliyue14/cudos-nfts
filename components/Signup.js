import React from "react";
import Button from "./Button";

export default function Signup({ onSuccess }) {
  const onClick = () => {
    onSuccess();
  };
  return (
    <div className="bg-gray text-center mt-[20em]">
      <h1 className="text-3xl font-bold">Welcome to the CUDOS NFTs Explorer</h1>
      <p className="text-lg text-blue-dark mt-4 mb-[3em]">
        Register with your wallet to mint your NFTs
      </p>
      <Button className="text-lg w-64" onClick={onClick}>
        Connect Keplr Wallet
      </Button>
    </div>
  );
}
