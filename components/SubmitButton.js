import React from "react";
import Button from "./Button";
import Spinner from "./Spinner";

export default function SubmitButton({ submit, submitting, label }) {
  return (
    <Button className="w-36" onClick={submit} disabled={submitting}>
      {submitting ? <Spinner label="Submitting..." color="white" /> : label}
    </Button>
  );
}
