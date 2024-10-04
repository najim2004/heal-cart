import Image from "next/image";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuImage } from "react-icons/lu";
import PersonalInfoAndForm from "@/components/profile/personal-info/PersonalInfoAndForm";
import { FaRegUser } from "react-icons/fa6";
const PersonalInfo = () => {
  const avatar = null;
  return (
    <div className="px-2">
      <h1 className="text-lg font-semibold flex items-center gap-3 mb-5 text-primary">
        <FaRegUserCircle className="" />
        Personal info
      </h1>
      <div className="flex items-center gap-4">
        <div className="size-[100px] rounded-full overflow-hidden flex items-center justify-center border border-primary">
          {avatar ? (
            <Image
              src={avatar}
              alt=""
              height={100}
              width={100}
              className="rounded-full object-cover"
            />
          ) : (
            <FaRegUser className="text-6xl text-primary" />
          )}
        </div>
        <div className="flex flex-col justify-between gap-2">
          <label
            htmlFor="change-avatar"
            className="flex items-center gap-2 px-2 py-1 rounded-lg border hover:border-dashed font-medium border-primary text-primary cursor-pointer"
          >
            <LuImage />
            Change
          </label>
          <input type="file" name="" id="change-avatar" className="hidden" />
          <button className="flex items-center gap-2 px-2 py-1 rounded-lg border font-medium border-primary text-primary">
            <RiDeleteBin6Line />
            Remove
          </button>
        </div>
      </div>
      <PersonalInfoAndForm />
    </div>
  );
};

export default PersonalInfo;
