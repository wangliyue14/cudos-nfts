import React, { useState } from "react";
import Button from "./Button";
import NFTList from "./NFTList";
import Profile from "./Profile";

export default function ({}) {
  const [items, setItems] = useState([{ id: "test123", name: "test123" }]);

  const mintNew = () => {
    const newItem = { name: "test new" };
    setItems((items) => [
      ...items,
      {
        id: `${items.length + 1}`,
        description: `extra ${items.length + 1}`,
        ...newItem,
      },
    ]);
  };

  return (
    <div className="bg-gray p-4">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">CUDOS NFTs</h1>
        <Profile />
      </div>
      <div className="flex flex-row items-center mt-4">
        <p className="text-lg text-blue-dark">Mint new NFTs</p>
        <Button className="w-36 ml-4 text-md" onClick={mintNew}>
          Mint NFT
        </Button>
      </div>
      <NFTList items={items} />
    </div>
  );
}
