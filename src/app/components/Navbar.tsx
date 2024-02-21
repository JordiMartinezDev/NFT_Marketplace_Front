"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

interface NavItem {
  href: string;
  label: string;
}

function NavBar() {
  const { user, isLoaded } = useUser();

  const items: NavItem[] = [
    { href: "/marketplace", label: "Marketplace" },
    { href: "/giveaways", label: "Giveaways" },
    { href: "/auction", label: "Auction" },
    { href: "/create", label: "Create" },
  ];

  if (isLoaded && user) {
    items.push({ href: "/dashboard", label: "Dashboard" });
  } else {
    items.push({ href: "/dashboard", label: "Sign-in" });
  }

  return (
    <nav className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="text-white text-xl font-bold">Your App Name</div>
            </Link>
          </div>
          <div className="flex">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {items.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <div className="text-white hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                      {item.label}
                    </div>
                  </Link>
                ))}
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
