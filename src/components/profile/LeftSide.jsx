"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const LeftSide = () => {
  const pathName = usePathname();
  const list = (
    <>
      <li>
        <Link
          href="/profile/personal-info"
          className={`${
            pathName === "/profile/personal-info" ? "active" : ""
          } flex items-center text-sm font-medium gap-2`}
        >
          <FaRegUserCircle className="text-base" />
          Personal info
        </Link>
      </li>
      <li>
        <Link
          href="/profile/addresses"
          className={`${
            pathName === "/profile/addresses" ? "active" : ""
          } flex items-center text-sm font-medium gap-2`}
        >
          <CiLocationOn className="text-base" />
          Address
        </Link>
      </li>
      <li>
        <Link
          href="/profile/orders"
          className={`${
            pathName === "/profile/orders" ? "active" : ""
          } flex items-center text-sm font-medium gap-2`}
        >
          <MdOutlineShoppingBag className="text-base" /> Orders
        </Link>
      </li>
    </>
  );
  return (
    <div className="min-w-[230px] lg:min-h-[500px] h-full bg-primary/90 rounded-2xl p-5 !text-gray-100">
      <h3 className="text-base font-semibold text-gray-50 mb-6">Settings</h3>
      <ul className="space-y-5 profile">{list}</ul>
    </div>
  );
};

export default LeftSide;
