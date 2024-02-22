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
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fHww";
  return (
    <div>
      <FeaturedCollection imageUrl={imageUrl}></FeaturedCollection>
      <div className="container mx-auto py-8  max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {collections.map((collection) => (
            <NFTCard key={collection.id} collection={collection}></NFTCard>
          ))}
        </div>
      </div>
    </div>
  );
}
