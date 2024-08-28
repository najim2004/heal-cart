import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

import SSLCommerzPng from "../../assets/SSLCommerz-Pay-With-logo-All-Size-05.png";
import Image from "next/image";
const Footer = () => {
  const footerList = (
    <>
      <li>
        <Link href={"#"}>About us</Link>
      </li>
      <li>
        <Link href={"#"}>Contact us</Link>
      </li>
      <li>
        <Link href={"#"}>Terms & Conditions</Link>
      </li>
      <li>
        <Link href={"#"}>Privacy Policy</Link>
      </li>
    </>
  );
  return (
    <div className="mt-10 min-h-[400px] bg-black py-10">
      <Container>
        <div className="flex justify-between">
          <div className="text-white">
            <h2 className="text-white text-3xl font-bold">
              <Link href={"/"}>HealCart</Link>
            </h2>
            <ul className="text-sm font-semibold space-y-8  mt-8">
              {footerList}
            </ul>
          </div>
          <div className="">
            <ul className="text-white text-sm font-semibold *:flex *:items-center *:gap-2 space-y-8">
              <li>
                <FaLocationArrow /> Dhaka, Bangladesh
              </li>
              <li>
                <FaEnvelope /> support@healcart.com
              </li>
              <li>
                <FaPhone /> +880123457890
              </li>
            </ul>
          </div>
          <div className="">
            <Image
              src={SSLCommerzPng}
              width={400}
              height={250}
              alt=""
              className=""
            />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center text-white font-semibold text-sm space-y-6">
          <div className="flex justify-center items-center gap-5 text-3xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
          <h3>
            &copy;{new Date().getFullYear()} HealCart. All rights reserved.
          </h3>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
