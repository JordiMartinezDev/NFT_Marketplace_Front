"use client";
import React, { useEffect, useState } from "react";
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
import { BrowserProvider, parseUnits } from "ethers";
type Props = {};

const AssetsCardCrypto = () => {
  const [wallet, setWallet] = useState() as any;
  const [balance, setBalance] = useState() as any;
  const [network, setNetwork] = useState() as any;

  useEffect(() => {
    const fetchWalletAddress = async () => {
      try {
        if (window.ethereum) {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = provider.getSigner();
          const address = (await signer).getAddress();
          var tempbalance: any = await provider.getBalance(address);
          tempbalance = ethers.formatUnits(tempbalance, 18);
          const network = await provider.getNetwork();
          console.log("Network:", network.name);
          console.log("ChainId:", network.chainId);

          setNetwork(network.name);
          setBalance(tempbalance);
          setWallet(address);
        } else {
          console.log("MetaMask not installed; using read-only defaults");
        }
      } catch (error) {
        console.error("Error getting address:", error);
      }
    };
    fetchWalletAddress();
  }, []);

  async function connectWallet() {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = provider.getSigner();
      const address = (await signer).getAddress();
      console.log("Wallet address:", address);
      setWallet(address);
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
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
            <div>
              <h2 className="text-lg font-semibold mb-2">Wallet</h2>
              <p> address: {wallet}</p>
              <p> balance: {balance} ETH</p>
              <p> network: {network}</p>
            </div>
          ) : (
            <Button className="w-full" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
        </CardContent>

        <CardFooter className="">
          {wallet ? (
            <div className="flex justify-between gap-4 w-full">
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
