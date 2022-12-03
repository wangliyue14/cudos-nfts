export const shortenAddress = (addr) =>
  addr && addr.substr(0, 8) + "..." + addr.substr(addr.length - 4);
