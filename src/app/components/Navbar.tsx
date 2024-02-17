"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

interface NavItem {
  href: string;
  label: string;
}

function NavBar() {
  const { user, isLoaded } = useUser();

  const items: NavItem[] = [
    { href: "/collections", label: "Collections" },
    { href: "/recent", label: "Recent" },
    { href: "/create", label: "Create" },
  ];

  if (isLoaded && user) {
    items.push({ href: "/dashboard", label: "Dashboard" });
  } else {
    items.push({ href: "/sign-in", label: "Sign-in" });
  }

  return <nav className="bg-gray-800"></nav>;
}

export default NavBar;
