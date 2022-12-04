import { StargateClient } from "cudosjs";
import chainInfo from "../config/chainInfo";

export const queryBalance = async () => {
  const queryClient = await StargateClient.connect(chainInfo.rpc);
  const balance = await queryClient.getBalance(cudosAddress, "acudos");
  return balance;
};
