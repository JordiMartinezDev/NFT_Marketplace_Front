"use server";
import { getXataClient } from "@/xata";
import { z } from "zod";
import { auth } from "@clerk/nextjs";

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
  image: z.any(),
});

async function uploadToDB(formData: FormData) {
  const name = formData.get("collectionName");
  const numNFTs = Number(formData.get("numNFTs"));
  const creatorFee = Number(formData.get("creatorFee"));
  const image = formData.get("image") as File;

  const xataClient = getXataClient();

  const { userId } = auth();

  const fileObject = {
    name: name,
    mediaType: image.type,
    base64Content: "",
  };

  const parsedForm = schema.parse({
    total_NFTs: numNFTs,
    name: name,
    creator_fee: creatorFee,
    userId: userId,
    image: fileObject,
  });

  console.log("\nIMAGE: ", image);
  // Save the record to the database
  await xataClient.db.CreatedCollections.create(parsedForm);
}

export default uploadToDB;
