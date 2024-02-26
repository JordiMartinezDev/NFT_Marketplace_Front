import React from "react";
import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CollectionCard from "./CollectionCard";

type Props = {};

export default async function FeaturedCarousel(props: Props) {
  const xataClient = getXataClient();
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const collections = await xataClient.db.CreatedCollections.filter({
    userId,
  }).getMany();

  return (
    // 50% on small screens and 33% on larger screens.
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full  mx-auto"
    >
      <CarouselContent>
        {collections.map((collection) => (
          <CarouselItem key={collection.id} className="rounded-lg w-1/4">
            <CollectionCard collection={collection}></CollectionCard>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
