import React, { useState } from "react";
import Button from "./Button";
import CloseButton from "./CloseButton";
import ModalDialog from "./ModalDialog";
import TextField from "./TextField";

const fields = [
  {
    name: "id",
    label: "ID",
  },
  {
    name: "name",
    label: "Name",
  },
  {
    name: "schema",
    label: "Schema",
  },
  {
    name: "symbol",
    label: "Symbol",
  },
  {
    name: "traits",
    label: "Traits",
  },
  {
    name: "minter",
    label: "Minter",
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

export default function IssueDenom({ open, setOpen }) {
  const [data, setData] = useState({});
  const onChange = (event) => {
    setData((data) => ({ ...data, [event.target.name]: event.target.value }));
  };

  return (
    <ModalDialog title="Issue Denom" open={open} setOpen={setOpen}>
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
        <Button className="w-36">Issue denom</Button>
        <Button className="w-36">Reset fields</Button>
      </div>
    </ModalDialog>
  );
}
