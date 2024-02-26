import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import CollectionCard2 from "../components/CollectionCard2";

import NFTCard from "../components/NFTCard";
import CardContainer from "./CardContainer";
import CardCreateNewCollection from "./CardCreateNewCollection";
type Props = {};

export default async function ShowUserCollections({}: Props) {
  const xataClient = getXataClient();
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const collections = await xataClient.db.CreatedCollections.filter({
    userId,
  }).getMany();

  return (
    <CardContainer>
      <CardCreateNewCollection></CardCreateNewCollection>
      {collections.map((collection) => (
        <CollectionCard2
          key={collection.id}
          collection={collection}
        ></CollectionCard2>
      ))}
    </CardContainer>
  );
}
