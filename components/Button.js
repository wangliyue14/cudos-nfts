import React from "react";

export default function ({ className, onClick, children }) {
  return (
    <button
      className={
        "btn bg-blue rounded-full hover:bg-blue-light p-2 " + className
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
