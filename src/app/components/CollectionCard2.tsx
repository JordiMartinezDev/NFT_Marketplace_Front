import React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Image from "next/image";

type Props = {
  collection: any;
};

function CollectionCard2({ collection }: Props) {
  return (
    <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>{collection.name}</CardTitle>
        <CardDescription>Collection</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex mb-2 justify-center">
          <Image
            src={"https://" + collection.image_cid + ".ipfs.nftstorage.link/"}
            alt="nft image"
            width={1920}
            height={1080}
            className="rounded-lg w-full h-auto"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>price</p>
        <p>mint</p>
      </CardFooter>
    </Card>
  );
}

export default CollectionCard2;
