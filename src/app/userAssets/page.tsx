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
import AssetsCard from "../components/AssetsCardFiat";
import AssetsCardCrypto from "../components/AssetsCardCrypto";
type Props = {};

const UserAssets = () => {
  return (
    <div className="flex gap-9">
      <AssetsCard></AssetsCard>
      <AssetsCardCrypto></AssetsCardCrypto>
    </div>
  );
};

export default UserAssets;
