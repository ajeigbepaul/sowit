"use client";

import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Badge } from "@mui/material";
function Header() {
  return (
    <div className="w-full bg-amber-200 py-2">
      <div className="w-full mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between ">
        <div className="flex items-center space-x-2 justify-center w-full md:w-1/4 ">
          <FaFacebook size={24}/>
          <FaInstagram size={24}/>
          <FaLinkedin size={24}/>
          <FaTwitter size={24}/>
        </div>
        <div className="flex flex-1  w-full md:w-2/4 items-center justify-center">
          <h2>S O W i T</h2>
        </div>
        <div className="flex items-center justify-center space-x-2 w-full md:w-1/4 ">
          <span>pdave4krist</span>
          <Image
            src="/profilepics.jpg"
            alt="profilepics"
            width={20}
            height={20}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <Badge badgeContent={4}>
              <HiOutlineShoppingBag size={36} />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
