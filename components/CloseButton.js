import React from "react";
import Button from "./Button";

export default function CloseButton({ close }) {
  return (
    <Button className="w-[40px] h-[40px]" onClick={close}>
      X
    </Button>
  );
}
