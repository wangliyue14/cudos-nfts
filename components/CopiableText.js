import React, { useState } from "react";
import { copyData } from "../helper";

export default function CopiableText({ text, textToCopy, label, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <p
      className={"flex flex-row w-48 items-center"}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      {text}
      {textToCopy && (
        <img
          src="/copy.svg"
          className="ml-2 cursor-pointer"
          onClick={() => copyData(textToCopy, label)}
          width="12px"
          height="14px"
        />
      )}
      {link && (
        <a href={link} className="ml-2" target="_blank">
          <img
            src="/link.svg"
            className="cursor-pointer"
            width="16px"
            height="16px"
          />
        </a>
      )}
    </p>
  );
}
