const chainInfo = {
  chainId: "cudos-testnet-public-3",
  chainName: "CudosTestnet-Public-v3",
  rpc: "https://rpc.explorer-v1.testnet.cudos.org/",
  rest: "https://rest.explorer-v1.testnet.cudos.org/",
  stakeCurrency: {
    coinDenom: "CUDOS",
    coinMinimalDenom: "acudos",
    coinDecimals: 18,
    coinGeckoId: "cudos",
  },
  walletUrlForStaking: "https://dashboard.testnet.cudos.org/staking",
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "cudos",
    bech32PrefixAccPub: "cudospub",
    bech32PrefixValAddr: "cudosvaloper",
    bech32PrefixValPub: "cudosvaloperpub",
    bech32PrefixConsAddr: "cudosvalcons",
    bech32PrefixConsPub: "cudosvalconspub",
  },
  currencies: [
    {
      coinDenom: "CUDOS",
      coinMinimalDenom: "acudos",
      coinDecimals: 18,
      coinGeckoId: "cudos",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "CUDOS",
      coinMinimalDenom: "acudos",
      coinDecimals: 18,
      gasPriceStep: {
        low: 5000000000000,
        average: 10000000000000,
        high: 20000000000000,
      },
    },
  ],
  features: ["ibc-transfer", "ibc-go", "cosmwasm"],
  coinType: 118,
  beta: true,
  accountExplorerUrl: "https://explorer.testnet.cudos.org/accounts/",
};

export default chainInfo;
