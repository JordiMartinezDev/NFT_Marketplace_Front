import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("dashboard");

  return (
    <main className="">
      <div>Hello world</div>
    </main>
  );
}
