"use client";
import React from "react";
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
type Props = {};

const AssetsCardFiat = () => {
  return (
    <div className="flex gap-4 w-full h-full">
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle>Balance</CardTitle>
          <CardDescription>Your current USD Balance</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <h2 className="text-lg font-semibold mb-2">0 $</h2>
        </CardContent>

        <CardFooter>
          <div className="flex justify-between gap-4 ">
            <Button className="w-full">Add funds</Button>
            <Button className="w-full ">Withdraw</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AssetsCardFiat;
