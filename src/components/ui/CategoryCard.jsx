import Image from "next/image";
import Link from "next/link";
const CategoryCard = ({ img, categoryName, to = "#" }) => {
  return (
    <>
      <Link
        className="flex flex-col gap-1 text-sm font-semibold justify-center items-center  py-5 border rounded-3xl"
        href={to}
      >
        <Image width={50} height={50} src={img || "/"} alt="" />
        <p>{categoryName}</p>
      </Link>
    </>
  );
};

export default CategoryCard;
