import React from "react";
import Button from "./Button";

export default function ({ items }) {
  return (
    <div className="bg-gray pt-4 pb-4">
      <p className="text-lg text-blue-dark mt-4 mb-4">NFT List</p>
      {items.map((item) => (
        <div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
