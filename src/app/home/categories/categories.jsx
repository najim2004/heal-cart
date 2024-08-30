import CategoryCard from "@/components/ui/CategoryCard";
import { useSelector } from "react-redux";

const Categories = () => {
  const categoriesData = useSelector((state) => state?.categories?.categories);
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold mb-5">Product Categories</h3>
      <div className="grid grid-cols-8 gap-4">
        {categoriesData.map((category) => (
          <CategoryCard
            key={category?.id}
            categoryName={category?.name}
            img={category?.image}
            slug={category?.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
