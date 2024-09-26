import React from "react";

const PersonalInfoAndForm = () => {
  return (
    <div className="flex mt-7">
      <form className="w-full flex flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-2 lg:gap-x-6">
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-2 block">
              Your Full Name
            </label>
            <input
              type="text"
              className=" p-2 bg-transparent rounded-md outline-none border border-primary w-full"
              value="Mohammad Najim"
            />
          </div>
          <div className="row-span-3 h-auto flex flex-col">
            <label htmlFor="" className="text-sm font-semibold mb-2">
              Your Bio
            </label>
            <textarea
              className="p-2 bg-transparent rounded-md outline-none border border-primary w-full flex-grow"
              value="I am a software engineer with 5 years of experience"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-2 block">
              Your Email Address
            </label>
            <input
              type="email"
              className=" p-2 bg-transparent rounded-md outline-none border border-primary w-full"
              value="najim@gmail.com"
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="text-sm font-semibold mb-2 block">
              Your Phone Number
            </label>
            <input
              type="number"
              className=" p-2 bg-transparent rounded-md outline-none border border-primary w-full"
              value="01234567891"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-2 py-1 rounded-md bg-transparent text-primary border border-primary">
            Cancel
          </button>
          <button className="px-2 py-1 rounded-md bg-primary text-white font-semibold">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfoAndForm;
