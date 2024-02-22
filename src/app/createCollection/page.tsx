import { getXataClient } from "@/xata";
import React from "react";
import CreateCollectionForm from "../components/CreateCollectionForm";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type Props = {};

export default async function CreateCollectionPage({}: Props) {
  return (
    <div>
      <CreateCollectionForm></CreateCollectionForm>
    </div>
  );
}
