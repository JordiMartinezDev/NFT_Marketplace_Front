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

const AssetsCardCrypto = () => {
  return (
    <div className="flex gap-4 ">
      <Link href="createCollection">
        <Card>
          <CardHeader>
            <CardTitle>Balance</CardTitle>
            <CardDescription>Your current USD Balance</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4"></CardContent>

          <CardFooter>
            <Button className="w-full mx-2">Add funds</Button>
            <Button className="w-full ">Withdraw</Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
};

export default AssetsCardCrypto;
