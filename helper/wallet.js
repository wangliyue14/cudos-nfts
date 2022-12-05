import { toast } from "react-toastify";

export const shortenAddress = (addr) =>
  addr && addr.substr(0, 8) + "..." + addr.substr(addr.length - 4);

export const shortenURI = (addr) =>
  addr && addr.substr(0, 12) + "..." + addr.substr(addr.length - 4);

export const shortenData = (addr) =>
  addr && addr.substr(0, 12) + "..." + addr.substr(addr.length - 4);

export const copyData = (data, label) => {
  navigator.clipboard.writeText(data).then(() => {
    toast(label + " copied successfully", {
      type: "success",
      position: "top-right",
    });
  });
};
