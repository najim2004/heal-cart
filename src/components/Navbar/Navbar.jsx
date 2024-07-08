import { GiMedicines } from "react-icons/gi";
import { CgMenuLeft } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingCartSolid } from "react-icons/lia";
const Navbar = () => {
  return (
    <div className="h-[100px] border-b-[5px] border-primary">
      <div className="max-w-[1400px] mx-auto flex  items-center h-full">
        <div className="flex gap-5 items-center">
          <button className="size-10 bg-primary text-white rounded-lg p-2">
            <CgMenuLeft className="size-full" />
          </button>
          <h2 className="flex items-center gap-2 text-secondary text-5xl font-bold">
            <GiMedicines className="text-primary" />
            HealCart
          </h2>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="h-12 border-2 border-primary rounded-lg flex">
            <input
              type="text"
              name=""
              className="bg-transparent h-full lg:w-[500px] outline-none px-5"
              placeholder="Search Your medicine / ঔষধ ও পণ্য সার্চ করুন"
            />
            <button className="bg-primary text-white/90 w-[50px] flex justify-center items-center text-3xl">
              <IoIosSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <button className="size-12 bg-primary text-white/90 text-3xl flex items-center justify-center rounded-full relative">
            <span className="size-5 rounded-full flex justify-center items-center absolute -top-[2px] -right-[2px] bg-secondary text-xs">
              4
            </span>
            <LiaShoppingCartSolid />
          </button>
          <div className="h-12 px-6 bg-primary text-white text-lg font-semibold flex items-center justify-center rounded-lg">
            <button>Login</button> / <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
