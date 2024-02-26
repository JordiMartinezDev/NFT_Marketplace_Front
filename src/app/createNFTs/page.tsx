import { getXataClient } from "@/xata";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import CollectionCard from "../components/CollectionCard";
import ShowUserCollections from "../components/ShowUserCollections";

type Props = {};

const createNFTs = async (props: Props) => {
  redirect;
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
      <ShowUserCollections></ShowUserCollections>
    </div>
  );
};

export default createNFTs;
