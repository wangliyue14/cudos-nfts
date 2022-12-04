import React, { useState } from "react";
import Button from "./Button";
import CloseButton from "./CloseButton";
import ModalDialog from "./ModalDialog";
import TextField from "./TextField";

const fields = [
  {
    name: "denom_id",
    label: "Denom ID",
  },
  {
    name: "nft_id",
    label: "NFT ID",
  },
  {
    name: "name",
    label: "Name",
  },
  {
    name: "uri",
    label: "URI",
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
  const [data, setData] = useState({});
  const onChange = (event) => {
    setData((data) => ({ ...data, [event.target.name]: event.target.value }));
  };

  return (
    <ModalDialog title="Mint NFT" open={open} setOpen={setOpen}>
      {fields.map(({ name, label }) => (
        <div key={name} className="mb-4">
          <TextField
            name={name}
            label={label}
            onChange={onChange}
            value={data[name]}
          />
        </div>
      ))}

      <div key="buttons" className="flex flex-row justify-around">
        <Button className="w-36">Mint NFT</Button>
        <Button className="w-36">Reset fields</Button>
      </div>
    </ModalDialog>
  );
}
