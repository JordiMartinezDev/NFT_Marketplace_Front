"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

type Props = {};

const Profile = (props: Props) => {
  const { user, isLoaded } = useUser();

  return (
    <div>
      <p>{user && isLoaded ? "Profile of " + user.emailAddresses : null}</p>
      {isLoaded && user && (
        // <UserButton afterSignOutUrl="/"></UserButton>
        <SignOutButton>
          <Link href={"/marketplace"}>
            <button className="text-white hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign out
            </button>
          </Link>
        </SignOutButton>
      )}
    </div>
  );
};

export default Profile;
