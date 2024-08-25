"use client";
import favoriteIcon from "../../assets/add-favorite-marked-svgrepo-com.svg";
import medicineIcon from "../../assets/medicine-bottle-svgrepo-com.svg";
import Image from "next/image";
import CategoryAccordion from "./CategoryAccordion";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const toggleSidebar = useSelector((state) => state?.sidebar?.isOpen);
  console.log(toggleSidebar);
  const categories = [
    {
      id: 1,
      name: "Category 1",
      subcategories: [
        {
          id: 1,
          name: "Subcategory 1-1",
          image: "https://via.placeholder.com/40",
        },
        {
          id: 2,
          name: "Subcategory 1-2",
          image: "https://via.placeholder.com/40",
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      subcategories: [],
    },
    {
      id: 3,
      name: "Category 3",
      subcategories: [
        {
          id: 3,
          name: "Subcategory 3-1",
          image: "https://via.placeholder.com/40",
        },
      ],
    },
  ];
  return (
    <div
      className={`${
        toggleSidebar ? "translate-x-0" : "-translate-x-full"
      } duration-500 fixed top-[100px] left-0 w-[380px] h-[calc(100vh-100px)] border-r-[3px] border-black pl-5 py-5 pr-1`}
    >
      <button className="flex gap-3 items-center text-xl font-medium">
        <Image src={favoriteIcon} alt="" width={30} height={40} /> Favourites
      </button>
      <div className="mt-6 bg-primary/15 px-2 py-3 flex gpx-1 items-start rounded-xl">
        <Image src={medicineIcon} alt="" width={30} height={40} />
        <div className="flex-grow">
          <CategoryAccordion categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
