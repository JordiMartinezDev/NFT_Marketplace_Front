"use server";
import { getXataClient } from "@/xata";
import { z } from "zod";
import { auth } from "@clerk/nextjs";
import { NFTStorage } from "nft.storage";
require("dotenv");

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  total_NFTs: z.number().min(1),
  name: z.string().min(5),
  creator_fee: z.number(),
  userId: z.string(),
  image_cid: z.string(),
  minting_price: z.number(),
  description: z.string(), // Adjusted property name to match the variable name
});

async function uploadToDB(formData: FormData) {
  const nftStorageKey = process.env.NFT_STORAGE_KEY as string;

  const name = formData.get("name");
  const numNFTs = Number(formData.get("numNFTs"));
  const creatorFee = Number(formData.get("creatorFee"));
  const image = formData.get("image") as File;
  const description = formData.get("description");
  const price = Number(formData.get("mintingPrice"));
  const xataClient = getXataClient();

  const { userId } = auth();

  // Upload the image to IPFS
  const nftStorage = new NFTStorage({ token: nftStorageKey });
  const imageCid: string = await nftStorage.storeBlob(image);

  // Define the parsed form with the image CID included
  const parsedForm = schema.parse({
    total_NFTs: numNFTs,
    name: name,
    creator_fee: creatorFee,
    userId: userId,
    image_cid: imageCid,
    description: description,
    minting_price: price, // Use the image CID here
  });

  // Save the record to the database
  await xataClient.db.CreatedCollections.create(parsedForm);
  console.log("DB Upload SUCCESSFUL");
}

export default uploadToDB;
