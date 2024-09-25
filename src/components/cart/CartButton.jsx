"use clint";
import { useState } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";
import CartSidebar from "./CartSidebar";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  decrementItem,
  fetchCart,
  incrementItem,
  removeItem,
} from "@/utils/cartHelper";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useSession } from "next-auth/react";

const CartButton = () => {
  const [isOpenCartSidebar, setIsOpenCartSidebar] = useState(false);
  const { data } = useSession();
  const axiosSecure = useAxiosPublic();
  const queryClient = useQueryClient();

  // Fetch cart data using React Query
  const {
    data: cart,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["cart", data?.user?.id, axiosSecure],
    enabled: !!data?.user?.id,
    queryFn: () => fetchCart(data?.user?.id, axiosSecure),
  });
  // Mutation for incrementing quantity
  const incrementMutation = useMutation({
    mutationFn: ({ productId, unit }) =>
      incrementItem(data?.user?.id, productId, unit, axiosSecure),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cart", data?.user?.id, axiosSecure]);
    },
  });

  // Mutation for decrementing quantity
  const decrementMutation = useMutation({
    mutationFn: ({ productId, unit }) =>
      decrementItem(data?.user?.id, productId, unit, axiosSecure),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cart", data?.user?.id, axiosSecure]);
    },
  });

  // Mutation for removing an item
  const removeMutation = useMutation({
    mutationFn: ({ productId, unit }) =>
      removeItem(data?.user?.id, productId, unit, axiosSecure),
    onSuccess: (data) => {
      queryClient.invalidateQueries(["cart", data?.user?.id, axiosSecure]);
    },
  });
  return (
    <>
      <button
        onClick={() => setIsOpenCartSidebar(!isOpenCartSidebar)}
        className="group size-12 bg-primary text-white/90 text-3xl flex items-center justify-center rounded-full relative"
      >
        {cart?.cart?.items?.length > 0 && (
          <span className="size-5 rounded-full flex justify-center items-center absolute -top-[2px] -right-[2px] bg-secondary text-xs">
            {cart?.cart?.items?.length}
          </span>
        )}
        <LiaShoppingCartSolid className="group-active:scale-95" />
      </button>
      <CartSidebar
        cart={cart?.cart}
        onIncrement={(productId, unit) =>
          incrementMutation?.mutate({ productId, unit })
        }
        onDecrement={(productId, unit) =>
          decrementMutation?.mutate({ productId, unit })
        }
        onRemove={(productId, unit) =>
          removeMutation?.mutate({ productId, unit })
        }
        isOpenCartSidebar={isOpenCartSidebar}
      />
    </>
  );
};

export default CartButton;
