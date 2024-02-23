import React from "react";
import CreateCollectionForm from "../components/CollectionForm";
import Link from "next/link";

type Props = {};

function Page({}: Props) {
  const cardStyle = "bg-white border-lg rounded-lg w-1/2";

  return (
    <div>
      <Link href={"/createCollection"}>
        <p className="bg-gray-100 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 cursor-pointer hover:contrast-125 hover:shadow2xl mb-2">
          Create Collection
        </p>
      </Link>

      <Link href={"/createNFTs"}>
        <p className="bg-gray-100 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 cursor-pointer hover:contrast-125 hover:shadow2xl">
          Create NFT
        </p>
      </Link>
    </div>
  );
}

export default Page;
// <div>
//   <div>
//     <Link href={"/createCollection"}> Create Collection</Link>
//   </div>
//   <div>
//     <Link href={"/createNFTs"}> Create NFT</Link>
//   </div>
// </div>
