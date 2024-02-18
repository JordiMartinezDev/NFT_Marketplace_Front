// Generated by Xata Codegen 0.29.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  { name: "MyNFTs", columns: [{ name: "NFTname", type: "string" }] },
  { name: "CreatedCollections", columns: [{ name: "name", type: "string" }] },
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
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};