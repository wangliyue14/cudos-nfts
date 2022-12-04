import React, { useEffect, useState } from "react";
import Profile from "./Profile";

export default function Layout({ children }) {
  return (
    <div className="bg-gray p-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">
          <a href="/explorer">CUDOS NFTs Explorer</a>
        </h1>
        <Profile />
      </div>
      {children}
    </div>
  );
}
