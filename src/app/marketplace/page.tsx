import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import CollectionCard2 from "../components/CollectionCard2";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="container">
      <div className="container mx-auto py-8  max-w-7xl ">
        <FeaturedCarousel />
      </div>
      <CardContainer>
        {collections.map((collection) => (
          <CardContent
            key={collection.id}
            className="flex aspect-square items-center justify-center p-6 w-[350px] "
          >
            <CollectionCard2
              key={collection.id}
              collection={collection}
            ></CollectionCard2>
          </CardContent>
        ))}
      </CardContainer>
    </div>
  );
}
