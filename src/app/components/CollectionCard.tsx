import React from "react";
import Image from "next/image";

type Props = {
  collection: any;
};

const CollectionCard: React.FC<Props> = ({ collection }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4 transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-200">
      <div className="flex justify-center mb-4">
        <Image
          src="https://bafybeiar6p52sbxvkcv5zne4pqmepjuv5xuwmdwu5o42pezb2jv5pxhlmu.ipfs.nftstorage.link/"
          alt="nft image"
          width={1920}
          height={1080}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <p className="text-gray-800 text-xl font-semibold text-center mb-2 truncate">
        {collection.name}
      </p>
    </div>
  );
};

export default CollectionCard;
