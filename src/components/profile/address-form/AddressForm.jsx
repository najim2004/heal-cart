"use client";
import React, { useState } from "react";
import { LuFileEdit } from "react-icons/lu";

const AddressForm = ({ handleSubmit }) => {
  const [isEdit, setIsEdit] = useState(false);
  // Initial default values for the address fields
  const initialAddress = {
    house: "123",
    street: "Main St",
    city: "Dhaka",
    postal_code: "1212",
    district: "Mirpur",
    division: "Dhaka",
  };

  // State to manage form values
  const [address, setAddress] = useState(initialAddress);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form reset (optional)
  const handleReset = () => {
    setAddress(initialAddress); // Reset to default values
    setIsEdit(false);
  };

  return (
    <div className="relative">
      {!isEdit && (
        <button
          onClick={() => setIsEdit(true)}
          className="absolute top-0 right-0 text-lg text-primary"
        >
          <LuFileEdit />
        </button>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(address); // Pass the address data to handleSubmit
        }}
        className="grid grid-cols-3 gap-y-2 gap-x-4"
      >
        <div className="w-full">
          <label htmlFor="house" className="text-sm font-semibold mb-2 block">
            House
          </label>
          <input
            type="text"
            name="house"
            required
            disabled={!isEdit}
            className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
            value={address.house}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="street" className="text-sm font-semibold mb-2 block">
            Street
          </label>
          <input
            type="text"
            name="street"
            required
            disabled={!isEdit}
            className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
            value={address.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label htmlFor="city" className="text-sm font-semibold mb-2 block">
            City
          </label>
          <input
            type="text"
            name="city"
            required
            disabled={!isEdit}
            className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
            value={address.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="postal_code"
            className="text-sm font-semibold mb-2 block"
          >
            Postal Code
          </label>
          <input
            type="text"
            name="postal_code"
            required
            disabled={!isEdit}
            className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
            value={address.postal_code}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="district"
            className="text-sm font-semibold mb-2 block"
          >
            District
          </label>
          <input
            type="text"
            name="district"
            required
            disabled={!isEdit}
            className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
            value={address.district}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="division"
            className="text-sm font-semibold mb-2 block"
          >
            Division
          </label>
          <input
            type="text"
            name="division"
            required
            disabled={!isEdit}
            className="p-2 bg-transparent rounded-md outline-none border border-primary w-full"
            value={address.division}
            onChange={handleInputChange}
          />
        </div>
        {isEdit && (
          <div className="col-span-3 mt-4 flex justify-end gap-4">
            <button
              type="button"
              onClick={handleReset} // Reset form when Cancel is clicked
              className="px-2 py-1 rounded-md bg-transparent text-primary border border-primary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-2 py-1 rounded-md bg-primary text-white font-semibold"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddressForm;
