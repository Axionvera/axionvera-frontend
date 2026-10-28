/**
 * Public AxionVera Stellar Testnet configuration.
 *
 * These values are public infrastructure identifiers,
 * not secrets.
 */

const DEFAULT_CAMPAIGN_CONTRACT_ID =
  "CAAXCSTGNQ6S73XRXYSKAEEWZNVS7XWA4EF67DRWDPS2XFSXXA3AC2C6";

const DEFAULT_RPC_URL =
  "https:" + "//soroban-testnet.stellar.org";

const DEFAULT_READ_SOURCE_PUBLIC_KEY =
  "GDGOJ2KHXL3BSWHDFQYIOTCGBYP5SE4NGPUJY7XUVQX75SYKIMPJG7BO";

const DEFAULT_USDC_CONTRACT_ID =
  "CBIELTK6YBZJU5UP2WWQEUCYKLPU6AUNZ2BQ4WWFEIE3USCIHMXQDAMA";

const TESTNET_NETWORK_PASSPHRASE =
  "Test SDF Network ; September 2015";

export const AXIONVERA_NETWORK = {
  name: "testnet",

  rpcUrl:
    process.env
      .NEXT_PUBLIC_AXIONVERA_RPC_URL ??
    DEFAULT_RPC_URL,

  campaignContractId:
    process.env
      .NEXT_PUBLIC_AXIONVERA_CAMPAIGN_CONTRACT_ID ??
    DEFAULT_CAMPAIGN_CONTRACT_ID,

  readSourcePublicKey:
    process.env
      .NEXT_PUBLIC_AXIONVERA_READ_SOURCE_PUBLIC_KEY ??
    DEFAULT_READ_SOURCE_PUBLIC_KEY,

  networkPassphrase:
    TESTNET_NETWORK_PASSPHRASE,

  rewardToken: {
    symbol: "USDC",

    contractId:
      process.env
        .NEXT_PUBLIC_AXIONVERA_USDC_CONTRACT_ID ??
      DEFAULT_USDC_CONTRACT_ID,

    decimals: 7,
  },
} as const;
