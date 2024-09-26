"use client";
import { GiMedicines } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import SignUpForm from "../ui/SignUpForm";
import { useState } from "react";
import LoginForm from "../ui/LoginForm";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa6";
import AvatarMenu from "../ui/AvatarMenu";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/lib/frontend/store/slices/sidebarSlice";
import Link from "next/link";
import CartButton from "../cart/CartButton";
import Container from "../ui/Container";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenAvatarMenu, setIsOpenAvatarMenu] = useState(false);
  const session = useSession();
  const loading = session?.status === "loading";
  const authenticated = session.status === "authenticated";
  const avatar = null;
  const pathname = usePathname();
  useEffect(() => {
    setIsOpenAvatarMenu(false);
    setIsOpenLogin(false);
    setIsOpenSignUp(false);
  }, [pathname]);
  console.log(pathname);
  return (
    <div className="bg-white sticky top-0 left-0 h-[100px] border-b-[5px] border-primary z-50">
      <div className="max-w-[1200px] mx-auto flex  items-center h-full relative">
        <div className="flex gap-5 items-center">
          <label className="swap swap-rotate size-10 bg-primary text-white rounded-lg p-2">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => dispatch(toggleSidebar())} type="checkbox" />

            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <Link
            href={"/"}
            className="flex items-center gap-2 text-secondary text-5xl font-bold"
          >
            <GiMedicines className="text-primary" />
            HealCart
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="h-12 border-2 border-primary rounded-lg flex">
            <input
              type="text"
              name=""
              className="bg-transparent h-full lg:w-[400px] outline-none px-5"
              placeholder="Search Your medicine / ঔষধ ও পণ্য সার্চ করুন"
            />
            <button className="bg-primary group text-white/90 w-[50px] flex justify-center items-center text-3xl">
              <IoIosSearch className="group-active:scale-95" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end gap-10">
          {loading ? (
            <span className="size-12 loading loading-ring loading-lg"></span>
          ) : !authenticated ? (
            <>
              <div>
                <button
                  onClick={() => setIsOpenAvatarMenu(!isOpenAvatarMenu)}
                  className="size-12 rounded-full border border-primary text-3xl flex justify-center items-center p-1 active:scale-95 duration-500"
                >
                  {avatar ? (
                    <Image src={avatar} alt="profile" width={48} height={48} />
                  ) : (
                    <FaRegUser />
                  )}
                </button>
              </div>
              {/* cart button */}
              <CartButton />
            </>
          ) : (
            <div className="h-12 px-6 bg-primary text-white text-lg font-semibold flex gap-1 items-center justify-center rounded-lg">
              <button
                className="active:scale-95"
                onClick={() => {
                  setIsOpenSignUp(false);
                  setIsOpenLogin(!isOpenLogin);
                }}
              >
                Login
              </button>{" "}
              /{" "}
              <button
                className="active:scale-95"
                onClick={() => {
                  setIsOpenLogin(false);
                  setIsOpenSignUp(!isOpenSignUp);
                }}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        <div
          className={`${
            isOpenLogin || isOpenAvatarMenu || isOpenSignUp
              ? "fixed bg-black/15 w-full h-[calc(100vh-100px)] top-[100px] right-0"
              : ""
          }`}
        >
          <Container className={"relative"}>
            <div className={`absolute top-2 right-0`}>
              <div className={`${isOpenAvatarMenu ? "flex" : "hidden"}`}>
                <AvatarMenu />
              </div>
              <div className={`${isOpenLogin ? "flex" : "hidden"}`}>
                <LoginForm
                  isOpenLogin={isOpenLogin}
                  setIsOpenLogin={setIsOpenLogin}
                  setIsOpenSignUp={setIsOpenSignUp}
                />
              </div>
              <div className={`${isOpenSignUp ? "flex" : "hidden"}`}>
                <SignUpForm
                  isOpenSignUp={isOpenSignUp}
                  setIsOpenSignUp={setIsOpenSignUp}
                  setIsOpenLogin={setIsOpenLogin}
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
