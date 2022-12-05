import React, { useEffect, useState } from "react";
import { queryDenoms } from "../services/nftService";

export default function useDenoms({ reload }) {
  const [denoms, setDenoms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    queryDenoms()
      .then((denoms) => {
        setDenoms(denoms);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [reload]);

  return {
    denoms,
    loading,
    error,
  };
}
