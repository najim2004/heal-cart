"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiAddressBookThin } from "react-icons/pi";
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
          href="/profile/address"
          className={`${
            pathName === "/profile/address" ? "active" : ""
          } flex items-center text-sm font-medium gap-2`}
        >
          <PiAddressBookThin className="text-base" />
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
    <div className="min-w-[230px] lg:min-h-[500px] h-full bg-white rounded-2xl p-5">
      <h3 className="text-base font-semibold text-gray-700 mb-6">Settings</h3>
      <ul className="space-y-5 profile">{list}</ul>
    </div>
  );
};

export default LeftSide;
