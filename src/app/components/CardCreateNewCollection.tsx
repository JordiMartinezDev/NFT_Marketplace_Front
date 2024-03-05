import React from "react";
import CreateCollectionForm from "../components/CollectionForm";
import Link from "next/link";
import Image from "next/image";
import { DivideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type Props = {};

const CardCreateNewCollection = (props: Props) => {
  return (
    <div className="flex gap-4 ">
      <Link href="createCollection">
        <Card>
          <CardHeader>
            <CardTitle>Create Collection</CardTitle>
            <CardDescription>Launch your NFT collection</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Image
              width={400}
              height={400}
              src="/png/multiple_apes.png"
              alt="image"
            ></Image>
          </CardContent>

          <CardFooter>
            <Button className="w-full">Create Collection</Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default CardCreateNewCollection;
