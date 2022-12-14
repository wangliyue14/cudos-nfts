import React, { useEffect, useState } from "react";
import useDenoms from "../hooks/useDenoms";
import useFields from "../hooks/useFields";
import Button from "./Button";
import ModalDialog from "./ModalDialog";
import TextField from "./TextField";
import SubmitButton from "./SubmitButton";
import { createNft } from "../services/nftService";
import chainInfo from "../config/chainInfo";
import { toast } from "react-toastify";

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

export default function MintNFT({
  open,
  setOpen,
  onSuccess,
  reloadDenoms,
  selectedDenomId,
}) {
  const { denoms } = useDenoms({ reload: reloadDenoms });
  const { data, invalids, onChange, validate, reset } = useFields({ fields });
  const [denomId, setDenomId] = useState(selectedDenomId);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setError(null);
    setSubmitting(false);
  }, [open]);

  useEffect(() => {
    if (selectedDenomId) {
      setDenomId(selectedDenomId);
    }
  }, [open, selectedDenomId]);

  const submit = () => {
    setError(null);
    if (validate()) {
      const keplr = window.keplr;
      if (keplr) {
        const offlineSigner = keplr.getOfflineSigner(chainInfo.chainId);
        setSubmitting(true);
        createNft(offlineSigner, { ...data, denomId: denomId })
          .then(() => {
            setSubmitting(false);
            setOpen(false);
            toast("Minted successfully", {
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
    <ModalDialog title="Mint NFT" open={open} setOpen={setOpen}>
      <label className="block mb-4">
        <span className="rounded-full after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pl-1">
          Denom ID
        </span>
        <select
          className="mt-1 px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full text-white bg-gray rounded-md sm:text-sm focus:ring-1"
          placeholder="Select Denom ID"
          onChange={(e) => setDenomId(e.target.value)}
          value={denomId}
        >
          {denoms.map((item, idx) => (
            <option key={idx} value={item.id}>
              {item.id}(
              {item.name.length < 8
                ? item.name
                : item.name.substr(0, 8) + "..."}
              )
            </option>
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
          label="Mint NFT"
        />
      </div>
    </ModalDialog>
  );
}
