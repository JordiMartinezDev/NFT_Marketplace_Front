import React, { useState } from "react";
import CreateCollectionForm from "./CollectionForm";
import Link from "next/link";
import Image from "next/image";
import { DivideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ethers } from "ethers";
type Props = {};

const AssetsCardCrypto = () => {
  const [wallet, setWallet] = useState(null);

  async function connectWallet() {
    const provider = await new ethers.BrowserProvider(window.ethereum);
  }
  return (
    <div className="flex justify-items-center">
      <Card>
        <CardHeader>
          <CardTitle> Crypto Balance</CardTitle>
          <CardDescription>Your current Balance in ETH</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {wallet ? (
            <h2 className="text-lg font-semibold mb-2">0 $</h2>
          ) : (
            <Button className="w-full">Connect Wallet</Button>
          )}
        </CardContent>

        <CardFooter>
          {wallet ? (
            <div className="flex justify-between gap-4">
              <Button className="w-full">Add funds</Button>
              <Button className="w-full ">Withdraw</Button>
            </div>
          ) : null}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AssetsCardCrypto;
