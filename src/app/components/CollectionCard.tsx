import React from "react";
import Image from "next/image";

type Props = {
  collection: any;
};

const CollectionCard = ({ collection }: Props) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 ">
      <div className="flex justify-center">
        <Image
          src={"https://" + collection.image_cid + ".ipfs.nftstorage.link/"}
          alt="nft image"
          width={1920}
          height={1080}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="flex justify-between ">
        <p className="text-gray-800 text-xl font-semibold text-center mb-2 truncate">
          {collection.name}
        </p>
        <p className="flex-end">Price</p>
      </div>
    </div>
  );
};

export default CollectionCard;
