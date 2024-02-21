import React from "react";
import Image from "next/image";

type Props = {
  collection: any;
};

export default function CollectionCard({ collection }: Props) {
  return (
    <div>
      <p key={collection.id}>{collection.name}</p>
      <Image
        src="https://bafybeiar6p52sbxvkcv5zne4pqmepjuv5xuwmdwu5o42pezb2jv5pxhlmu.ipfs.nftstorage.link/"
        alt="nft image"
        width={20}
        height={20}
      ></Image>
    </div>
  );
}
