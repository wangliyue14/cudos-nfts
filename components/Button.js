import React from "react";

export default function Button({ className, onClick, children, disabled }) {
  return (
    <button
      className={`btn rounded-full p-2 ${className} ${
        !disabled ? "bg-blue hover:bg-blue-light" : "bg-blue-dark"
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
