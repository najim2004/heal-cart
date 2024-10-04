"use client";
import { useState } from "react";
import { LuFileEdit } from "react-icons/lu";

const PersonalInfoAndForm = () => {
  const initialData = {
    fullName: "Mohammad Najim",
    bio: "I am a software engineer with 5 years of experience",
    email: "najim@gmail.com",
    phone: "01234567891",
  };

  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState(initialData);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form reset when "Cancel" is clicked
  const handleCancel = () => {
    setFormData(initialData); // Reset form to default values
    setIsEdit(false); // Exit edit mode
  };

  // Handle form submission (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with: " + JSON.stringify(formData));
    setIsEdit(false); // Optionally, exit edit mode after saving
  };

  return (
    <div className="flex mt-7 relative">
      {!isEdit && (
        <button
          onClick={() => setIsEdit(true)}
          className="absolute top-0 right-0 text-lg text-primary"
        >
          <LuFileEdit />
        </button>
      )}
      <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-2 lg:gap-x-6">
          <div className="w-full">
            <label
              htmlFor="fullName"
              className="text-sm font-semibold mb-2 block"
            >
              Your Full Name
            </label>
            <input
              type="text"
              name="fullName"
              required
              disabled={!isEdit}
              className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="row-span-3 h-auto flex flex-col">
            <label htmlFor="bio" className="text-sm font-semibold mb-2">
              Your Bio
            </label>
            <textarea
              name="bio"
              disabled={!isEdit}
              className="p-2 bg-transparent rounded-md outline-none border border-primary w-full flex-grow"
              value={formData.bio}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="text-sm font-semibold mb-2 block">
              Your Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              disabled={!isEdit}
              className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="text-sm font-semibold mb-2 block">
              Your Phone Number
            </label>
            <input
              type="number"
              name="phone"
              required
              disabled={!isEdit}
              className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {isEdit && (
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="px-2 py-1 rounded-md bg-transparent text-primary border border-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-2 py-1 rounded-md bg-primary text-white font-semibold"
            >
              Update
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PersonalInfoAndForm;
