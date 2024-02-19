"use server";

import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import { z } from "zod";

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
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

async function uploadToDB(formData: FormData) {
  const name = formData.get("collectionName");
  const numNFTs = Number(formData.get("numNFTs")); // Convert string to number
  const creatorFee = Number(formData.get("creatorFee")); // Convert string to number
  const image = formData.get("image");
  const xataClient = getXataClient();

  const { userId } = auth();

  const fileObject = { content: image };
  const parsedForm = schema.parse({
    total_NFTs: numNFTs,
    name: name,
    creator_fee: creatorFee,
    image: image,
    userId: userId,
  });

  await xataClient.db.CreatedCollections.create(parsedForm);
}

export default uploadToDB;

// Above code working without correct file upload

// Following code with security concerns but seems not to have any errors
/*
import { getXataClient } from "@/xata";
import { z } from "zod";

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
  image: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

async function uploadToDB(formData: FormData) {
  const name = formData.get("collectionName");
  const numNFTs = Number(formData.get("numNFTs"));
  const creatorFee = Number(formData.get("creatorFee"));
  const image = formData.get("image");

  const xataClient = getXataClient();
  const fileObject = { content: image };

  const parsedForm = schema.parse({
    total_NFTs: numNFTs,
    name: name,
    creator_fee: creatorFee,
    image: fileObject, // Use the fileObject as the image field
  });

  await xataClient.db.CreatedCollections.create(parsedForm);
}

export default uploadToDB;
*/
