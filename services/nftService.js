import {
  GasPrice,
  SigningCosmWasmClient,
  SigningStargateClient,
  StargateClient,
} from "cudosjs";
import chainInfo from "../config/chainInfo";

export const queryDenoms = async () => {
  const queryClient = await StargateClient.connect(chainInfo.rpc);
  const response = await queryClient.nftModule.getNftDenoms();
  return response.denoms;
};

export const queryNfts = async (denomId) => {
  const queryClient = await StargateClient.connect(chainInfo.rpc);
  const response = await queryClient.nftModule.getNftCollection(denomId);
  console.log("denoms " + JSON.stringify(response.collection.nfts));
  return response.collection.nfts.map((item) => ({
    ...item,
    denom: response.collection.denom,
  }));
};

export const queryAllNfts = async ({ address, denomId }) => {
  const queryClient = await StargateClient.connect(chainInfo.rpc);
  const response = await queryClient.nftModule.getNftDenoms();
  const denoms = response.denoms;
  let allNfts = [];
  for (let i = 5; i < 10; i++) {
    const res = await queryClient.nftModule.getNftCollection(denoms[i].id);
    allNfts = allNfts.concat(
      res.collection.nfts.map((item) => ({ ...item, denom: denoms[i] }))
    );
  }
  allNfts = allNfts.filter((item) => item.name && item.uri);
  if (address) {
    allNfts = allNfts.filter((item) => item.creator === address);
  }
  console.log("loaded " + JSON.stringify(allNfts[10]));
  return allNfts;
};

export const createDenom = async (signer, data) => {
  const signingClient = await SigningStargateClient.connectWithSigner(
    chainInfo.rpc,
    signer
  );
  const sender = signer.address;
  const response = await signingClient.nftIssueDenom(
    sender,
    data.id,
    data.name,
    data.schema,
    data.symbol,
    data.traits,
    sender,
    data.description,
    data.data,
    GasPrice.fromString("1stake")
  );
  return response.transactionHash;
};

export const createNft = async (signer, data) => {
  const signingClient = await SigningStargateClient.connectWithSigner(
    chainInfo.rpc,
    signer
  );
  const sender = signer.address;
  const response = await signingClient.nftMintToken(
    sender,
    data.denomId,
    data.name,
    data.uri,
    data.data,
    sender,
    GasPrice.fromString("1stake")
  );
  return response.transactionHash;
};
