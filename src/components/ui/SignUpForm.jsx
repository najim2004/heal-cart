"use client";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi"; // For password visibility icon
import { SlClose } from "react-icons/sl";
const SignUpForm = ({ isOpenSignUp, setIsOpenSignUp, setIsOpenLogin }) => {
  const axiosPublic = useAxiosPublic();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isOpenSignUp) reset();
  }, [isOpenSignUp, reset]);

  const onSubmit = async (data) => {
    try {
      const { data: response } = await axiosPublic.post("/api", data);
      if (response?.res?.insertedId) {
        reset();
        setIsOpenSignUp(false);
        toast.success("Successfully Registered!");
      }
      setLoading(false);
    } catch (err) {
      toast.error("Failed to register. Please try again.");
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <div className="w-[380px] overflow-x-hidden mx-auto p-6 bg-white rounded-lg shadow-md">
      <button
        onClick={() => setIsOpenSignUp(false)}
        className="text-secondary mb-2 ml-[calc(100%-24px)] text-xl active:scale-95"
      >
        <SlClose />
      </button>
      <h2 className="text-2xl font-bold mb-2">Sign Up</h2>
      <p className="text-gray-500 mb-6">
        Please register with your personal data
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full name</label>
          <input
            {...register("fullName", { required: true })}
            placeholder="yourname"
            className="w-full p-3 bg-transparent h-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.fullName && (
            <span className="text-red-500">Full name is required</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
            placeholder="yourname@gmail.com"
            className="w-full p-3 bg-transparent h-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <span className="text-red-500">Valid email is required</span>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <div className="relative">
            <input
              {...register("password", { required: true, minLength: 8 })}
              type={passwordVisible ? "text" : "password"}
              placeholder="********"
              className="w-full p-3 bg-transparent h-12 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform translate-y-[-50%] text-gray-600"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {errors.password && (
            <span className="text-red-500">
              Password must be at least 8 characters
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-transparent active:scale-95"
        >
          {loading ? (
            <span className="loading loading-dots loading-sm"></span>
          ) : (
            "Continue"
          )}
        </button>
      </form>
      <p className="mt-6 text-center">
        Already have an account?{" "}
        <button
          onClick={() => {
            setIsOpenLogin(true);
            setIsOpenSignUp(false);
          }}
          className="text-primary active:scale-95"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default SignUpForm;
