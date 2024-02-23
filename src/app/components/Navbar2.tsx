"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { SignOutButton, UserButton, useUser } from "@clerk/nextjs";

interface NavItem {
  href: string;
  label: string;
}

const style = {
  wrapper: `bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex justify-between`,
  logoContainer: `flex items-center cursor-pointer rounded-2xl pr-4`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  logoSearchbarWrapper:
    "bg-[#04111d] w-1/3 px-[1.2rem] py-[0.2rem] flex justify-start ",
  searchBar: `flex mx-[0.8rem] mx-[0.8rem] flex-1 items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c] `,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

const Navbar2 = () => {
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
    <div className={style.wrapper}>
      <div className={style.logoSearchbarWrapper}>
        <Link href="/">
          <div className={style.logoContainer}>
            <Image
              src="/png/PatonProfileNFT.png"
              height={40}
              width={40}
              alt="logo"
            />
            <div className={style.logoText}>BTokenized</div>
          </div>
        </Link>
        <div className={style.searchBar}>
          <div className={style.searchIcon}>
            <AiOutlineSearch />
          </div>
          <input className={style.searchInput} placeholder="Search..." />
        </div>
      </div>
      <div className={style.headerItems}>
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className={style.headerItem}>{item.label}</div>
          </Link>
        ))}
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
