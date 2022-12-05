import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Signup from "../components/Signup";

export default function SignupPage({}) {
  const router = useRouter();

  const onSignupSuccess = () => {
    router.push("/explorer");
  };

  return (
    <div>
      <Head>
        <title>CUDOS NFTs Explorer - Signup</title>
        <meta name="description" content="Explorer for CUDOS NFTs - Signup" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Signup onSuccess={onSignupSuccess} />
    </div>
  );
}
