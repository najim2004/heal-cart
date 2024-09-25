import React from "react";
import CartItem from "./CartItem";

const CartSidebar = ({
  isOpenCartSidebar,
  cart,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div
      className={`fixed ${
        isOpenCartSidebar ? "translate-x-0" : "translate-x-full"
      } top-[102px] right-0 h-[calc(100vh-104px)] duration-500 bg-white border-2 border-gray-500 shadow-lg rounded-md md:min-w-[400px] max-w-[400px] pt-6`}
    >
      <div className="flex flex-col h-full">
        <div className="flex-grow overflow-y-auto px-6">
          {cart?.items?.map((item) => (
            <CartItem
              key={item.product_id}
              item={item}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onRemove={onRemove}
            />
          ))}
        </div>
        <div className="flex justify-center gap-5 bg-primary/15 py-5 border-t border-primary">
          <button className="bg-white text-primary border border-primary py-1 px-4 rounded-md">
            View Cart
          </button>
          <button className="bg-primary text-white py-1 px-4 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
