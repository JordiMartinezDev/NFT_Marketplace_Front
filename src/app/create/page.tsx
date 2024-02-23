import React from "react";
import CreateCollectionForm from "../components/CollectionForm";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Page({}: Props) {
  const buttonStyle =
    "bg-gray-100 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 cursor-pointer hover:contrast-125 hover:shadow2xl mb-2";

  return (
    <div>
      <div className="bg-red-900 flex justify-center items-center w-full ">
        <div className="flex-grow flex-col justify-center items-center w-1/2  ">
          <Link href={"/createCollection"}>
            <div className={buttonStyle}>Create Collection</div>
          </Link>
          <Link href={"/createNFTs"}>
            <div className={buttonStyle}>Create NFT</div>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md w-1/2">
          {/* Displaying an image */}
          <Image
            src="/jpg/nft2.jpg"
            alt="Your Image"
            width={1600}
            height={720}
          />
        </div>
      </div>
    </div>
  );
}

export default Page;

/*
import React from "react";
import CreateCollectionForm from "../components/CollectionForm";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function Page({}: Props) {
  const buttonStyle =
    "bg-gray-100 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-200 cursor-pointer hover:contrast-125 hover:shadow2xl mb-2";

  return (
    <div>
      <div className="bg-red-900 flex justify-center items-center w-full ">
        <div className="flex-grow flex-col justify-center items-center w-1/2  ">
          <Link href={"/createCollection"}>
            <div className={buttonStyle}>Create Collection</div>
          </Link>
          <Link href={"/createNFTs"}>
            <div className={buttonStyle}>Create NFT</div>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md w-1/2 h-full">
          <Image
            src="/jpg/nft2.jpg"
            alt="Your Image"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
}
*/
