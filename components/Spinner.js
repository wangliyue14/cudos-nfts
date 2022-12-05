import React from "react";
import Image from "next/image";

export default function Spinner({ label, color, className }) {
  return (
    <div
      className={`flex flex-row justify-center ${color || "text-blue-dark"} ${
        className || ""
      }`}
    >
      <Image className="mr-2" src="/loading.svg" width={25} height={25} />{" "}
      {label || "Loading..."}
    </div>
  );
}
