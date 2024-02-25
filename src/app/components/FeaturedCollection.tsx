"use client";
import { Button } from "@material-tailwind/react";
import Image from "next/image";

const FeaturedCollection = () => {
  return (
    <div className="flex">
      <div className="bg-red-900 w-full h-full">
        <h1 className="text-8xl">Featured Collections</h1>
        <h2 className="text-xl">
          {" "}
          Discover, collect, buy and sell extraordinary NFTs
        </h2>
        <h2 className="text-xl"> No Blockchain/Crypto knowledge required</h2>
        <Button className="bg-blue-700" fullWidth placeholder="get started">
          Get Started
        </Button>
      </div>
      <div className="bg-green-900 w-full h-full">Imagesh</div>
    </div>
  );
};

export default FeaturedCollection;
