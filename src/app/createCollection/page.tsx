import { getXataClient } from "@/xata";
import React from "react";
import CreateCollectionForm from "../components/CreateCollectionForm";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

type Props = {};

export default async function DashboardPage({}: Props) {
  return (
    <div>
      <CreateCollectionForm></CreateCollectionForm>
    </div>
  );
}
