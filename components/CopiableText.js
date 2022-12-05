import Image from "next/image";
import Link from "next/link";
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
        <Image
          src="/copy.svg"
          className="ml-2 cursor-pointer"
          onClick={() => copyData(textToCopy, label)}
          width={12}
          height={14}
        />
      )}
      {link && (
        <Link href={link} target="_blank" className="ml-2">
          <Image
            src="/link.svg"
            className="cursor-pointer"
            width={16}
            height={16}
          />
        </Link>
      )}
    </p>
  );
}
