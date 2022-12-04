import React from "react";
import CloseButton from "./CloseButton";

export default function ModalDialog({ title, open, setOpen, children }) {
  return (
    <div className="modal" open={open} onClose={() => setOpen(false)}>
      <div className="modal-content">
        <div className="flex flex-col w-96 bg-blue-dark-2 p-4 rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-blue-dark text-lg mb-4">{title}</h2>
            <CloseButton close={() => setOpen(false)} />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
