import React from "react";
import Button from "./Button";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import chainInfo from "../config/chainInfo";

export default function Signup({ onSuccess }) {
  const onClick = () => {
    if (!window.keplr) {
      toast("Please install the Keplr wallet", {
        type: "error",
        position: "top-right",
      });
    } else {
      keplr
        .experimentalSuggestChain(chainInfo)
        .then(() => {
          onSuccess();
        })
        .catch((err) => {
          toast("Failed to connect to your Keplr wallet", {
            type: "error",
            position: "top-right",
          });
        });
    }
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
      <ToastContainer />
    </div>
  );
}
