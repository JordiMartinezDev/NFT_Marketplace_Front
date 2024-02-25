import { getXataClient } from "@/xata";
import React from "react";
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";
import CollectionCard from "../components/CollectionCard";
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
    <div>
      <h1>{user ? "" + user.username : ""}</h1>
      <CardContainer>
        {collections.map((collection) => (
          <CollectionCard
            key={collection.id}
            collection={collection}
          ></CollectionCard>
        ))}
      </CardContainer>
    </div>
  );
}
