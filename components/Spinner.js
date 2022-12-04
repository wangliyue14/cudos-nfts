import React from "react";

export default function Spinner({}) {
  return (
    <div className="flex flex-row text-blue-dark mt-4 justify-center">
      <img className="ml-4 mr-4" src="/processing.svg" width={25} height={25} />{" "}
      Loading...
    </div>
  );
}
