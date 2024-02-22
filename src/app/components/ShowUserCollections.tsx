import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import NFTCard from "../components/NFTCard";
import FeaturedCollection from "../components/FeaturedCollection";
import CardContainer from "./CardContainer";
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
      <CardContainer>
        {createNewCollectionCard ? <CollectionCard></CollectionCard> : null}
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
          ></CollectionCard>
        ))}
      </CardContainer>
    </div>
  );
}
