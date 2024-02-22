import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import NFTCard from "../components/NFTCard";
import FeaturedCollection from "../components/FeaturedCollection";
type Props = {};

export default async function Marketplace({}: Props) {
  const xataClient = getXataClient();
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const collections = await xataClient.db.CreatedCollections.filter({
    userId,
  }).getMany();

  const imageUrl =
    "https://bafybeiar6p52sbxvkcv5zne4pqmepjuv5xuwmdwu5o42pezb2jv5pxhlmu.ipfs.nftstorage.link/";
  return (
    <div>
      <FeaturedCollection imageUrl={imageUrl}></FeaturedCollection>
      <div className="container mx-auto px-4 py-8  max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {collections.map((collection) => (
            <NFTCard key={collection.id} collection={collection}></NFTCard>
          ))}
        </div>
        F
      </div>
    </div>
  );
}
