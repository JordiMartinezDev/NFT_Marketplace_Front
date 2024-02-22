import { getXataClient } from "@/xata";
import React from "react";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import CollectionForm from "../components/CollectionForm";

type Props = {};

export default async function CreateCollectionPage({}: Props) {
  return (
    <div>
      <CollectionForm></CollectionForm>
    </div>
  );
}
