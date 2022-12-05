import React, { useEffect, useState } from "react";
import chainInfo from "../config/chainInfo";
import useFields from "../hooks/useFields";
import { createDenom } from "../services/nftService";
import Button from "./Button";
import SubmitButton from "./SubmitButton";
import ModalDialog from "./ModalDialog";
import TextField from "./TextField";
import { toast } from "react-toastify";

const fields = [
  {
    name: "id",
    label: "ID",
    required: true,
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

export default function IssueDenom({ open, setOpen, onSuccess }) {
  const { data, invalids, onChange, validate, reset } = useFields({ fields });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setError(null);
    setSubmitting(false);
  }, [open]);

  const submit = () => {
    setError(null);
    if (validate()) {
      const keplr = window.keplr;
      if (keplr) {
        const offlineSigner = keplr.getOfflineSigner(chainInfo.chainId);
        setSubmitting(true);
        createDenom(offlineSigner, data)
          .then(() => {
            setSubmitting(false);
            setOpen(false);
            toast("Issued successfully", {
              type: "success",
              position: "top-right",
            });
            onSuccess();
          })
          .catch((err) => {
            setError(err.toString());
            setSubmitting(false);
          });
      } else {
        toast("Please install Keplr Wallet", {
          type: "error",
          position: "top-right",
        });
      }
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

      {error && (
        <div className="text-red-300 text-sm italic mb-4 font-bold">
          {error}
        </div>
      )}

      <div key="buttons" className="flex flex-row justify-around">
        <Button
          className="w-36"
          onClick={() => {
            reset();
            setError(null);
          }}
        >
          Reset fields
        </Button>
        <SubmitButton
          submit={submit}
          submitting={submitting}
          label="Issue denom"
        />
      </div>
    </ModalDialog>
  );
}
