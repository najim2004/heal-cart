import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { TbHelpSquareRounded } from "react-icons/tb";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

const AvatarMenu = () => {
  const avatar = null;
  const menuList = (
    <>
      <li>
        <Link
          href={"/profile/personal-info"}
          className="flex items-center gap-2 hover:text-primary"
        >
          <IoSettingsOutline /> Profile setting
        </Link>
      </li>
      <li>
        <Link
          href={"/help"}
          className="flex items-center gap-2 hover:text-primary"
        >
          <TbHelpSquareRounded /> Help
        </Link>
      </li>
      <li>
        <Link
          href={"/language"}
          className="flex items-center gap-2 hover:text-primary"
        >
          <MdLanguage />
          Language
        </Link>
      </li>
    </>
  );
  return (
    <div className="max-w-[300px] min-w-[260px] overflow-x-hidden mx-auto p-6 bg-white rounded-2xl flex flex-col justify-center border">
      <div className="flex items-center gap-3">
        <div className="size-[40px] rounded-full flex justify-center items-center text-2xl border border-primary overflow-hidden">
          {avatar ? (
            <Image
              src={avatar}
              alt="profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <FaRegUser />
          )}
        </div>
        <div className="">
          <h3 className="text-sm font-semibold text-gray-800">
            Mohammad Najim
          </h3>
          <p className="text-xs font-normal text-gray-600">najim@gamil.com</p>
        </div>
      </div>
      {/* <button className="text-white bg-primary h-12 px-3 rounded-lg text-xl font-bold active:scale-95 duration-500 mx-auto mt-2">
        View Profile
      </button> */}

      <ul className="space-y-3 mt-6 text-gray-800">{menuList}</ul>
      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 mt-3 hover:text-primary text-gray-800"
      >
        <IoLogOutOutline />
        Logout
      </button>
    </div>
  );
};

export default AvatarMenu;
