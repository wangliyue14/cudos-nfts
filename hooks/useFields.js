import React, { useState } from "react";

export default function useFields({ fields }) {
  const [data, setData] = useState({});
  const [invalids, setInvalids] = useState({});

  const onChange = (event) => {
    setData((data) => ({ ...data, [event.target.name]: event.target.value }));
    setTimeout(() => validate(), 100);
  };

  const reset = () => {
    let d = {};
    fields.forEach((f) => (d[f.name] = ""));
    setData(d);
  };

  const validate = () => {
    let result = true;
    for (let i = 0; i < fields.length; i++) {
      const f = fields[i];
      if (f.required && !data[f.name]) {
        setInvalids((inv) => ({ ...inv, [f.name]: "Required field" }));
        result = false;
      } else {
        setInvalids((inv) => ({ ...inv, [f.name]: undefined }));
      }
    }
    return result;
  };

  return {
    data,
    invalids,
    onChange,
    reset,
    validate,
  };
}
