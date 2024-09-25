"use client";
import favoriteIcon from "../../assets/add-favorite-marked-svgrepo-com.svg";
import Image from "next/image";
import CategoryAccordion from "./CategoryAccordion";
import { useSelector } from "react-redux";
import useAxiosPublic from "@/hooks/useAxiosPublic";

const Sidebar = () => {
  const axiosPublic = useAxiosPublic();
  const toggleSidebar = useSelector((state) => state?.sidebar?.isOpen);
  const categoriesData = useSelector((state) => state?.categories?.categories);
  const userinfo = useSelector((state) => state?.user?.userData);
  console.log(userinfo);
  return (
    <div
      className={`${
        toggleSidebar ? "translate-x-0" : "-translate-x-full"
      } duration-500 fixed top-[100px] left-0 w-[380px] h-[calc(100vh-100px)] border-r-[3px] border-black px-5 py-5 bg-white z-50`}
    >
      <button className="flex gap-3 items-center text-lg font-medium mx-4">
        <Image
          src={favoriteIcon}
          alt=""
          width={30}
          height={30}
          className="size-[30px]"
        />
        Favourites
      </button>
      <div className="mt-6 bg-primary/15 px-2 py-3 flex gpx-1 items-start rounded-xl">
        <div className="flex-grow">
          <CategoryAccordion categories={categoriesData} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
