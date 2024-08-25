"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const count = useSelector((state) => state?.sidebar?.isOpen);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h3>this is home</h3>
      <h3>counter is : {count}</h3>
      <button className="bg-blue-500 text-white py-1 px-2">Increase</button>

      <button className="bg-blue-500 text-white py-1 px-2">Decrease</button>
      <Toaster />
    </div>
  );
};

export default Home;
