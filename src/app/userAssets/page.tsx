import React from "react";
import CreateCollectionForm from "../components/CollectionForm";
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
import AssetsCardFiat from "../components/AssetsCardFiat";
import AssetsCardCrypto from "../components/AssetsCardCrypto";
type Props = {};

const UserAssets = () => {
  return (
    <div className="flex justify-center gap-2 ">
      <div className="flex-1">
        <AssetsCardFiat />
      </div>
      <div className="flex-1">
        <AssetsCardCrypto />
      </div>
    </div>
  );
};

export default UserAssets;
