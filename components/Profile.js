import { useRouter } from "next/router";
import React from "react";

export default function ({}) {
  const router = useRouter();
  const { username } = { username: "David" };
  const onClick = () => {
    router.push("/signup");
  };
  return (
    <button
      className={"btn bg-blue-dark-2 rounded-full hover:bg-blue-light p-2 w-48"}
      onClick={onClick}
    >
      Hi, <b>{username}</b>
    </button>
  );
}
