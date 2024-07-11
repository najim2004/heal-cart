import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { TbLogout2 } from "react-icons/tb";
const AvatarMenu = () => {
  const avatar = null;
  const menuList = (
    <>
      <li>
        <Link href={"/bookmarks"}>Bookmarks</Link>
      </li>
      <li>
        <Link href={"/bookmarks"}>Bookmarks</Link>
      </li>
      <li>
        <Link href={"/bookmarks"}>Bookmarks</Link>
      </li>
      <li>
        <Link href={"/bookmarks"}>Bookmarks</Link>
      </li>
    </>
  );
  return (
    <div className="w-[380px] overflow-x-hidden mx-auto p-8 bg-white rounded-lg shadow-md flex flex-col justify-center border border-primary/20">
      <div className="size-[80px] rounded-full flex justify-center items-center text-4xl border border-primary mx-auto">
        {avatar ? (
          <Image
            src={avatar}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full"
          />
        ) : (
          <FaRegUser />
        )}
      </div>
      <h3 className="text-2xl text-center mt-1 font-bold text-black">Najim</h3>
      <button className="text-white bg-primary h-12 px-3 rounded-lg text-xl font-bold active:scale-95 duration-500 mx-auto mt-2">
        View Profile
      </button>

      <ul className="text-black text-lg font-bold mt-6 *:pb-3 *:border-b *:border-primary/20">
        {menuList}
      </ul>
      <button
        onClick={() => signOut()}
        className="mt-2 h-10 bg-primary text-white font-bold text-xl rounded-md flex justify-center items-center gap-2 active:scale-95 duration-500"
      >
        Logout <TbLogout2 />
      </button>
    </div>
  );
};

export default AvatarMenu;
