"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

type Props = {
  collection: any;
};

export function CarouselTransition({ collection }: Props) {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-xl overflow-hidden"
    >
      <Image
        src={"https://" + collection.image_cid + ".ipfs.nftstorage.link/"}
        alt="image 1"
        className="h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <Image
        src={"https://" + collection.image_cid + ".ipfs.nftstorage.link/"}
        alt="image 2"
        className="h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <Image
        src={"https://" + collection.image_cid + ".ipfs.nftstorage.link/"}
        alt="image 3"
        className="h-full w-full object-cover"
        width={1920}
        height={1080}
      />
    </Carousel>
  );
}
