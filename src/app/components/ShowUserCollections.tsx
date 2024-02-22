import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import NFTCard from "../components/NFTCard";
import FeaturedCollection from "../components/FeaturedCollection";
type Props = {
  createNewCollectionCard: boolean;
};

export default async function ShowUserCollections({
  createNewCollectionCard,
}: Props) {
  const xataClient = getXataClient();
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const collections = await xataClient.db.CreatedCollections.filter({
    userId,
  }).getMany();

  return (
    <div>
      <div className="container mx-auto py-8  max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {createNewCollectionCard ? <CollectionCard></CollectionCard> : null}
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            ></CollectionCard>
          ))}
        </div>
      </div>
    </div>
  );
}
