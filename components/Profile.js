import { useRouter } from "next/router";
import React, { useState } from "react";
import { shortenAddress } from "../helper";
import useWallet from "../hooks/useWallet";

export default function Profile({}) {
  const router = useRouter();
  const { account } = useWallet();
  const [hover, setHover] = useState(false);

  const onClick = () => {
    router.push("/");
  };

  const onHover = () => {
    setHover((h) => setHover(!h));
  };

  return (
    <button
      className={`btn bg-blue-dark-2 rounded-full hover:bg-blue-light p-2 ${
        hover ? "w-64" : "w-48"
      }`}
      onClick={onClick}
      onMouseOver={onHover}
      onMouseOut={onHover}
    >
      {hover ? "Sign out " : ""}
      <b>{shortenAddress(account.address)}</b>
    </button>
  );
}
