import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <div className="bg-gray p-4">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="flex flex-row items-center text-3xl font-bold">
          <Image src="/logo.svg" width={30} height={30} className="mr-2" />
          <Link href="/explorer">CUDOS NFTs Explorer</Link>
        </h1>
        <Profile />
      </div>
      {children}
      <ToastContainer />
    </div>
  );
}
