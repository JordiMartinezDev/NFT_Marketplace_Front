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
import CardContainer from "./CardContainer";

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
      }}
      className=""
    >
      <CarouselContent>
        {collections.map((collection) => (
          <CarouselItem
            key={collection.id}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <CollectionCard collection={collection}></CollectionCard>
            </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
