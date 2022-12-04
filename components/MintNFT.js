import React, { useState } from "react";
import useDenoms from "../hooks/useDenoms";
import useFields from "../hooks/useFields";
import Button from "./Button";
import CloseButton from "./CloseButton";
import ModalDialog from "./ModalDialog";
import TextField from "./TextField";

const fields = [
  {
    name: "nft_id",
    label: "NFT ID",
    required: true,
  },
  {
    name: "name",
    label: "Name",
    required: true,
  },
  {
    name: "uri",
    label: "URI",
    required: true,
  },
  {
    name: "description",
    label: "Description",
  },
  {
    name: "data",
    label: "Data",
  },
];

export default function MintNFT({ open, setOpen }) {
  const { denoms } = useDenoms();
  const { data, invalids, onChange, validate, reset } = useFields({ fields });

  const submit = () => {
    if (validate()) {
    }
  };

  return (
    <ModalDialog title="Mint NFT" open={open} setOpen={setOpen}>
      <label className="block mb-4">
        <span className="rounded-full after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pl-1">
          Denom ID
        </span>
        <select
          className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full text-white bg-gray rounded-md sm:text-sm focus:ring-1"
          placeholder="Select Denom ID"
        >
          {denoms.map((item, idx) => (
            <option key={idx}>{item.id}</option>
          ))}
        </select>
      </label>
      {fields.map(({ name, label, required }) => (
        <div key={name} className="mb-4">
          <TextField
            name={name}
            label={label}
            onChange={onChange}
            value={data[name]}
            required={required}
          />
          {invalids[name] && (
            <span className="text-red-300 italic text-sm pl-1">
              {invalids[name]}
            </span>
          )}
        </div>
      ))}

      <div key="buttons" className="flex flex-row justify-around">
        <Button className="w-36" onClick={reset}>
          Reset fields
        </Button>
        <Button className="w-36" onClick={submit}>
          Mint NFT
        </Button>
      </div>
    </ModalDialog>
  );
}
