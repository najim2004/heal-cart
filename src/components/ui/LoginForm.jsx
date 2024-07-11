"use client";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi"; // For password visibility icon
import { SlClose } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
const LoginForm = ({ isOpenLogin, setIsOpenLogin, setIsOpenSignUp }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (!isOpenLogin) reset();
  }, [isOpenLogin, reset]);

  const onSubmit = async (data) => {
    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log(res);
      if (res.ok) {
        setIsOpenLogin(false);
        setIsOpenSignUp(false);
        toast.success("Login successful!");
      }
    } catch (error) {
      toast.error("Failed to login. Please try again.");
      console.log(error);
    }
  };
  return (
    <div className="w-[380px] overflow-x-hidden mx-auto p-6 bg-white rounded-lg shadow-md">
      <button
        onClick={() => setIsOpenLogin(false)}
        className="text-secondary mb-2 ml-[calc(100%-24px)] text-xl active:scale-95"
      >
        <SlClose />
      </button>
      <h2 className="text-2xl font-bold mb-2">Login</h2>
      <p className="text-gray-500 mb-6">Please login with your personal data</p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("password", { required: true, minLength: 6 })}
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
              Password must be at least 6 characters
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-transparent active:scale-95 mb-4"
        >
          Login
        </button>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center space-x-2 focus:outline-none active:scale-95"
          >
            <FcGoogle />
            <span>Login with Google</span>
          </button>
        </div>
      </form>
      <p className="mt-6 text-center">
        Don&#39;t have an account?{" "}
        <button
          onClick={() => {
            setIsOpenSignUp(true);
            setIsOpenLogin(false);
          }}
          className="text-primary active:scale-95"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
