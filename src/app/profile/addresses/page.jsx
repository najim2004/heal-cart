"use client";
import AddressForm from "@/components/profile/address-form/AddressForm";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaShippingFast } from "react-icons/fa";

const Addresses = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3 className="text-lg font-semibold flex items-center gap-3 mb-5 text-primary">
        <CiLocationOn />
        Billing Address
      </h3>
      <AddressForm />
      <h3 className="text-lg font-semibold flex items-center gap-3 mb-5 mt-8 text-primary">
        <FaShippingFast /> Shipping Address
      </h3>
      <AddressForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default Addresses;
