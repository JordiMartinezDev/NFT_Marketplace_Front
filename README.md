Getting started:

run "npm install"
run "npm run dev"

To update xata schemas run
xata init

Please note that xata.ts will be created.
Make sure to have your .env file as detailed in the dotenv_example.txt with correct API keys for each platform

If you get any error, please make add/change the xata.ts file as follows:

// --------- CODE --------

// ------ IMPORTS --------
require("dotenv"); // to use process.env.XATA_API_KEY
// ------ IMPORTS --------

// ------ REPLACE AT THE END OF THE CODE -----
let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
if (instance) return instance;

const apiKey = process.env.XATA_API_KEY;
if (!apiKey) {
throw new Error("XATA_API_KEY environment variable is missing.");
}

instance = new XataClient({
enableBrowser: true,
apiKey: apiKey,
});
return instance;
};

// ------ REPLACE AT THE END OF THE CODE -----

// --------- CODE ----------

test commit


xata.ts example
// Generated by Xata Codegen 0.29.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
require("dotenv");
const tables = [
  { name: "MyNFTs", columns: [{ name: "NFTname", type: "string" }] },
  {
    name: "CreatedCollections",
    columns: [
      { name: "total_NFTs", type: "int", notNull: true, defaultValue: "1" },
      { name: "name", type: "text", notNull: true, defaultValue: "Collection" },
      { name: "creator_fee", type: "float", notNull: true, defaultValue: "0" },
      { name: "userId", type: "string", notNull: true, defaultValue: "0" },
      { name: "image_cid", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type MyNFTs = InferredTypes["MyNFTs"];
export type MyNFTsRecord = MyNFTs & XataRecord;

export type CreatedCollections = InferredTypes["CreatedCollections"];
export type CreatedCollectionsRecord = CreatedCollections & XataRecord;

export type DatabaseSchema = {
  MyNFTs: MyNFTsRecord;
  CreatedCollections: CreatedCollectionsRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Jordi-Martinez-s-workspace-q847ds.eu-central-1.xata.sh/db/nft-marketplace-db",
  enableBrowser: true,
  apiKey: process.env.XATA_API_KEY,
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super(
      {
        ...defaultOptions,
        ...options,
      },
      tables
    );
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  const apiKey = process.env.XATA_API_KEY;
  if (!apiKey) {
    throw new Error("XATA_API_KEY environment variable is missing.");
  }

  instance = new XataClient({
    enableBrowser: true,
    apiKey: apiKey,
  });
  return instance;
};

//test comit
