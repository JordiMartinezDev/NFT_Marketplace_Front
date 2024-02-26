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

function Create({}: Props) {
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
              src="/jpg/collection1.jpg"
              alt="image"
            ></Image>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create Collection</Button>
          </CardFooter>
        </Card>
      </Link>

      <Link href="createNFTs">
        <Card>
          <CardHeader>
            <CardTitle>Create NFT</CardTitle>
            <CardDescription>Launch your NFT collection</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Image
              width={400}
              height={400}
              src="/jpg/ape1.jpg"
              alt="image"
            ></Image>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Create NFT</Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}

export default Create;

/*
import React from "react";
import CreateCollectionForm from "../components/CollectionForm";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Page({}: Props) {
  const buttonStyle =
    "bg-gray-100 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 cursor-pointer hover:contrast-125 hover:shadow2xl mb-2";

  return (
    <div>
      <div className="bg-red-900 flex justify-center items-center w-full ">
        <div className="flex-grow flex-col justify-center items-center w-1/2  ">
          <Link href={"/createCollection"}>
            <div className={buttonStyle}>Create Collection</div>
          </Link>
          <Link href={"/createNFTs"}>
            <div className={buttonStyle}>Create NFT</div>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md w-1/2 h-full">
          <Image
            src="/jpg/nft2.jpg"
            alt="Your Image"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
*/
