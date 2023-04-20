import React from "react";
import { IoMdClose } from "react-icons/io";
import { Navlink } from "../../utils/types";
import Link from "next/link";

interface Props {
  links: Navlink[];
  openNav: boolean;
  setOpenNav: any;
  handleActiveNav: any;
  active: string;
}

const NavMobile: React.FC<Props> = ({
  links,
  openNav,
  setOpenNav,
  handleActiveNav,
  active,
}) => {
  return (
    <div
      className={`${
        openNav ? "bg-white top-0 " : "hidden bottom-0"
      } w-screen h-screen fixed`}
    >
      <div className="flex items-center space-x-4 p-5">
        <IoMdClose onClick={() => setOpenNav(false)} className="flex text-xl" />
        <h4 className="font-semibold">Menu Utama</h4>
      </div>
      <div className="bg-gray-300 w-full h-[1px]"/>
      {/* Authentication */}
      <div className="flex space-x-5 justify-center my-5">
        <button className="border border-blue-500 py-2.5 px-7 rounded-md font-semibold text-blue-500">Login</button>
        <button className="bg-blue-500 py-2.5 px-7 rounded-md font-semibold text-white">Sign Up</button>
      </div>
      <div className="bg-gray-300 w-full h-[1px]"/>
      {/* Navlink */}
      <ul className="p-5 space-y-5">
        {
          links?.map((val, idx) => (
            <li key={idx} onClick={() => handleActiveNav(val.link)} className={`${active === val.link? "text-blue-500" : "text-gray-400"}`}>
              <Link href={val.link}>
                {val.page}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default NavMobile;
