import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import CardContainer from "../components/CardContainer";
import FeaturedCarousel from "../components/FeaturedCarousel";
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

  return (
    <div>
      <div className="container mx-auto py-8 max-w-7xl ">
        <FeaturedCarousel />
      </div>
      <CardContainer>
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
