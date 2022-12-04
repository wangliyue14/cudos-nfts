import React from "react";

export default function TextField({
  name,
  label,
  required,
  type = "text",
  placeholder = "",
  value,
  onChange,
}) {
  return (
    <label className="block">
      <span
        className={`block text-sm font-medium text-slate-700 pl-1${
          required ? " after:content-['*'] after:ml-0.5 after:text-red-500" : ""
        }`}
      >
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full text-white bg-gray rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
