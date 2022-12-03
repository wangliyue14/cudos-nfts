import React, { useEffect, useState } from "react";
import chainInfo from "../config/chainInfo";

export default function useWallet() {
  const [account, setAccount] = useState({});
  const [offlineSigner, setOfflineSigner] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWallet = async () => {
      const { keplr } = window;
      if (!keplr) {
        setError("You need to install Keplr");
        return;
      }

      await keplr.experimentalSuggestChain(chainInfo);
      const offlineSigner = keplr.getOfflineSigner(chainInfo.chainId);

      const account = (await offlineSigner.getAccounts())[0];

      setOfflineSigner(offlineSigner);
      setAccount(account);
    };
    loadWallet();
    return () => {};
  }, []);

  return {
    account,
    offlineSigner,
    error,
  };
}
