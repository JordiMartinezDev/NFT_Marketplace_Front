import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/marketplace");

  return <main className=""></main>;
}
