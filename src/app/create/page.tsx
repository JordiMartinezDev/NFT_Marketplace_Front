import React from "react";
import CreateCollectionForm from "../components/CreateCollectionForm";
import Link from "next/link";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <div>
        <Link href={"/createCollection"}> Create Collection</Link>
      </div>
      <div>
        <Link href={"/createNFTs"}> Create NFT</Link>
      </div>
    </div>
  );
}

export default page;
