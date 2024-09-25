import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

/*
data format
{
  quantity:3,
  unit:'pieces',
  price:999.99
  generic_name:"Latest model with A15 Bionic chip",
  medicine_image:"https://example.com/images/iphone14.jpg",
  medicine_name:"Apple iPhone 14",
  product_id:"66e7114d070d34787932b79c"
  }

*/
export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  const price = parseFloat(item?.price) * parseInt(item?.quantity);
  return (
    <div className="cart-item flex items-center justify-between mb-4 even:bg-primary/10 border rounded-md">
      <Image
        src={`https://api.medeasy.health${item?.medicine_image}`}
        alt={item?.medicine_name}
        width={100}
        height={100}
        className="size-[100px] object-cover rounded-l-md"
      />
      <div className="ml-4 flex-1 p-1">
        <h3 className="text-sm font-semibold line-clamp-1">
          {item?.medicine_name}
        </h3>
        <p className="text-xs text-primary line-clamp-1">
          {item?.generic_name}
        </p>
        <span className="font-medium text-sm">ট{price}</span>

        <div className="flex items-center justify-between">
          <div className="flex items-center mt-2">
            <button
              className="px-2 border rounded-md bg-primary text-white"
              onClick={() =>
                item?.quantity > 1 && onDecrement(item?.product_id, item?.unit)
              }
            >
              -
            </button>
            <span className="mx-4">{item?.quantity}</span>
            <button
              className="px-2 border rounded-md bg-primary text-white"
              onClick={() => onIncrement(item?.product_id, item?.unit)}
            >
              +
            </button>
          </div>
          <button
            className="text-red-500 text-xl"
            onClick={() => onRemove(item?.product_id, item?.unit)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
