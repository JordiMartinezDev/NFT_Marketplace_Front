import { getXataClient } from "@/xata";
import React from "react";
import CreateForm from "./createForm";

type Props = {};

const handleSubmit = (formData: FormData) => {
  // Handle form submission here
  console.log(formData);
};

export default async function DashboardPage({}: Props) {
  const xataClient = getXataClient();
  const folders = await xataClient.db.MyNFTs.getMany();
  return (
    <div>
      {folders.map((folder) => (
        <p key={folder.id}>{folder.NFTname}</p>
      ))}
      <CreateForm onSubmit={handleSubmit}></CreateForm>
    </div>
  );
}
