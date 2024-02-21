import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from "next/image";

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
        <div>
          <p key={collection.id}>{collection.name}</p>

          <Image
            src="https://bafybeiar6p52sbxvkcv5zne4pqmepjuv5xuwmdwu5o42pezb2jv5pxhlmu.ipfs.nftstorage.link/"
            alt="nft image"
            fill
          ></Image>
        </div>
      ))}
    </div>
  );
}
