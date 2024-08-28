"use client";
import favoriteIcon from "../../assets/add-favorite-marked-svgrepo-com.svg";
import medicineIcon from "../../assets/medicine-bottle-svgrepo-com.svg";
import Image from "next/image";
import CategoryAccordion from "./CategoryAccordion";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const toggleSidebar = useSelector((state) => state?.sidebar?.isOpen);
  console.log(toggleSidebar);
  const categoriesData = [
    {
      id: 1,
      name: "OTC Medicine",
      slug: "otc-medicine",
      meta_description:
        "Looking for over-the-counter (OTC) medication and health products? Look no further than MedEasy Pharmacy. Our wide selection of OTC products includes everything from pain relief and allergy medication to vitamins and supplements, providing safe and effective options for every need.",
      image:
        "https://pics.freeicons.io/uploads/icons/png/539070181643732123-512.png",

      order: 15,
    },
    {
      id: 2,
      name: "Women's Choice",
      slug: "womens-choice",
      meta_description:
        "Looking for a reliable pharmacy product that caters to women's health needs? Look no further than Medeasy - your go-to source for quality women's health products. Trust Women's Choice for all your women's health needs - shop now and experience the difference.",
      image:
        "https://pics.freeicons.io/uploads/icons/png/5002254161644315238-512.png",

      order: 14,
    },
    {
      id: 3,
      name: "Sexual Wellness",
      slug: "sexual-wellness",
      meta_description:
        "Prioritize your sexual wellness with our expertly curated selection of products at Sextual Wellness. From top-quality vibrators to sensual lubricants, we offer everything you need to enhance your pleasure and satisfaction.",
      image: "https://www.svgrepo.com/show/247121/condom.svg",

      order: 13,
    },
    {
      id: 4,
      name: "Diabetic Care",
      slug: "diabetic-care",
      meta_description:
        "At MedEasy Pharmacy, we offer a wide range of Diabetic Care products to help you manage your condition and maintain optimal health. Shop now for glucose meters, test strips, insulin pens, and syringes. Trust MedEasy Pharmacy for all your Diabetic Care needs.",
      image:
        "https://pics.freeicons.io/uploads/icons/png/17878098841684048567-512.png",

      order: 12,
    },
    {
      id: 5,
      name: "Baby Care",
      slug: "baby-care",
      meta_description:
        "Find high-quality baby care products at MedEasy Pharmacy - your trusted source for safe and effective solutions to keep your baby healthy and happy. From diapers and wipes to gentle lotions and creams, we offer your baby care products. Shop now from MedEasy Pharmacy",
      image: "https://www.svgrepo.com/show/493390/baby.svg",

      order: 11,
    },
    {
      id: 6,
      name: "Dental Care",
      slug: "dental-care",
      meta_description:
        "Maintain a healthy smile with our dental care products. From toothbrushes and toothpaste to dental floss and mouthwash, we offer a wide range of products to help you achieve optimal oral health. Shop now at Medeasy Pharmacy and discover the dental care difference.",
      image: "https://www.svgrepo.com/show/318573/tooth.svg",

      order: 9,
    },
    {
      id: 7,
      name: "Supplement",
      slug: "supplement",
      meta_description: "",
      image:
        "https://pics.freeicons.io/uploads/icons/png/118422867516297304203943-512.png",

      order: 1,
    },
    {
      id: 8,
      name: "Diapers",
      slug: "diapers",
      meta_description: "",
      image:
        "https://pics.freeicons.io/uploads/icons/png/8108146151636885449-512.png",

      order: 1,
    },
  ];
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
