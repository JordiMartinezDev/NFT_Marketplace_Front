import { getXataClient } from "@/xata";
import React from "react";
import CreateForm from "./createForm";

type Props = {};

export default async function DashboardPage({}: Props) {
  const xataClient = getXataClient();
  const folders = await xataClient.db.MyNFTs.getMany();
  return (
    <div>
      {folders.map((folder) => (
        <p key={folder.id}>{folder.NFTname}</p>
      ))}
      <CreateForm></CreateForm>
    </div>
  );
}
