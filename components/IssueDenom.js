import React, { useState } from "react";
import useFields from "../hooks/useFields";
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
    required: true,
  },
  {
    name: "schema",
    label: "Schema",
    required: true,
  },
  {
    name: "symbol",
    label: "Symbol",
    required: true,
  },
  {
    name: "traits",
    label: "Traits",
  },
  {
    name: "minter",
    label: "Minter",
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

export default function IssueDenom({ open, setOpen }) {
  const { data, invalids, onChange, validate, reset } = useFields({ fields });

  const submit = () => {
    if (validate()) {
    }
  };

  return (
    <ModalDialog title="Issue Denom" open={open} setOpen={setOpen}>
      {fields.map(({ name, label, required }) => (
        <div key={name} className="mb-4">
          <TextField
            name={name}
            label={label}
            required={required}
            onChange={onChange}
            value={data[name]}
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
          Issue denom
        </Button>
      </div>
    </ModalDialog>
  );
}
