"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  const { user, isLoaded } = useUser();

  return (
    <div>
      <p>{user && isLoaded ? "Profile of " + user.emailAddresses : null}</p>
    </div>
  );
};

export default Profile;
