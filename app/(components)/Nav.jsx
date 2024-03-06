"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./Nav.css";
function Nav() {
  const [dropDown, setDropDown] = useState(false);

  const handleMouseEnter = () => {
    setDropDown(true);
  };

  const handleMouseLeave = () => {
    setDropDown(false);
  };

  return (
    <header className="w-full h-20 bg-[#1B1A18]">
      <nav className="flex justify-between w-full h-full items-center">
        <Link href={"/"} className="ml-10">
          <Image src="/Images/logocar2.png" width={90} height={90} alt="logo" />
        </Link>
       
        <div className="flex gap-6 mr-10">
        <Link
            href={"/EspaceDeVente2"}
            className="text-white hover:bg-[#545454] py-1 px-4 ease-in-out duration-200 rounded text-lg"
          >
            edv2
          </Link>
        <Link
            href={"/Admin"}
            className="text-white hover:bg-[#545454] py-1 px-4 ease-in-out duration-200 rounded text-lg"
          >
            Admin
          </Link>
          <div
            className="relative d1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p
              className={`text-white cursor-pointer py-1 px-4 ease-in-out duration-200 rounded text-lg ${
                dropDown ? "bg-[#363636]" : ""
              }`}
            >
              Espace de vente
            </p>
            <div
              className={`absolute top-full left-0 bg-white rounded-md shadow-md opac w-full ${
                dropDown ? "" : "hidden"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul>
                <li>
                  <Link href="/EspaceDeVente" >
                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200 ease-in-out duration-200 rounded-md">
                      Du Magasin
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/EspaceDeVente">
                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200 ease-in-out duration-200 rounded-md">
                      Entre Particuliers
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            href={"/Blog"}
            className="text-white hover:bg-[#545454] py-1 px-4 ease-in-out duration-200 rounded text-lg"
          >
            Blog
          </Link>
          <Link
            href={"/"}
            className="text-white hover:bg-[#545454] py-1 px-4 ease-in-out duration-200 rounded text-lg"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
