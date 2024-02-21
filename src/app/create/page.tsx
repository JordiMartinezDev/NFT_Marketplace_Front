import React from "react";
import CreateCollectionForm from "../components/CreateCollectionForm";
import Link from "next/link";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Link href={"/createCollection"}> Create Collection</Link>
    </div>
  );
}

export default page;
