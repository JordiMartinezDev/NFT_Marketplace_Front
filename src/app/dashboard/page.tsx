import { getXataClient } from "@/xata";
import React from "react";
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
import CollectionCard2 from "../components/CollectionCard2";

import CardContainer from "../components/CardContainer";

type Props = {
  user: any;
};

export default async function DashboardPage({}: Props) {
  const xataClient = getXataClient();
  const { userId } = auth();
  if (!userId) {
    redirect("/");
  }
  const user = await clerkClient.users.getUser(userId);

  const collections = await xataClient.db.CreatedCollections.filter({
    userId,
  }).getMany();
  return (
    <div className="container justify-center gap-4">
      <div className="container mx-auto py-8  max-w-7xl ">
        <h1>{user ? "" + user.username : ""}</h1>
        <CardContainer>
          {collections.map((collection) => (
            <CollectionCard2
              key={collection.id}
              collection={collection}
            ></CollectionCard2>
          ))}
        </CardContainer>
      </div>
    </div>
  );
}
