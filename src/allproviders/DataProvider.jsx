"use client";

import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCategories } from "@/lib/frontend/store/slices/categoriesSlice";
import { useSession } from "next-auth/react";
import { setUser } from "@/lib/frontend/store/slices/userSlice";

const DataProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosPublic();
  const dispatch = useDispatch();

  const { data: userSession } = useSession();

  // ------------------------ fetch user data ------------------------
  const { data: userData } = useQuery({
    queryKey: ["user", userSession?.id, axiosSecure],
    enabled: !!userSession?.user?.id,
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/api/user/${userSession?.user?.id}`
      );
      return data;
    },
  });
  useEffect(() => {
    if (userData?.success) dispatch(setUser(userData?.user));
  }, [dispatch, userData]);
  // ------------------------ fetch user data -------------------------

  // ------------------------ fetch categories ------------------------
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("api/categories");
      return data;
    },
  });
  useEffect(() => {
    if (categories?.success) dispatch(setCategories(categories?.categories));
  }, [dispatch, categories]);
  // ------------------------ fetch categories ------------------------

  return <>{children}</>;
};

export default DataProvider;
