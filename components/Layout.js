import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <div className="bg-gray p-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="flex flex-row items-center text-3xl font-bold">
          <img src="/logo.svg" width={30} height={30} className="mr-2" />
          <a href="/explorer">CUDOS NFTs Explorer</a>
        </h1>
        <Profile />
      </div>
      {children}
      <ToastContainer />
    </div>
  );
}
