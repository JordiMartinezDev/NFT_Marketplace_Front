import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type Props = {};

export default async function DashboardPage({}: Props) {
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
      {collections.map((collection) => (
        <p key={collection.id}>{collection.name}</p>
      ))}
    </div>
  );
}
