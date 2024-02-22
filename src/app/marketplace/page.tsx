import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import FeaturedCollection from "../components/FeaturedCollection";
import CardContainer from "../components/CardContainer";
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
