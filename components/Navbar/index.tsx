import { useState } from "react";
import { Navlink } from "../../utils/types";
import MediaQuery from "../MediaQuery";
import Link from "next/link";
import {BsCart2} from 'react-icons/bs'

const links: Navlink[] = [
  {page: 'Homepage', link: '/'},
  {page: 'Category', link: '/category'},
  {page: 'Blog', link: '/blog'},
  {page: 'Contact Us', link: '/contact'}
]


const Navbar = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [active, setActive] = useState('/')

  const handleActiveNav = (link: string) => {
    setActive(link)
  }
  return (
    <div>
      {isMobile ? (
        // Mobile View
        <div></div>
      ) : 
      // Desktop View
      ( <div>
          <div className="px-24 py-4 flex items-center">
            <h1 className="font-bold text-xl">Soe<span className="text-blue-500">Sport.</span></h1>
            {/* Link */}
            <ul className="flex items-center space-x-6 ml-20">
              {
                  links.map((val, idx) => (
                    <li onClick={() => handleActiveNav(val.link)} key={idx} className={`${active === val.link? "text-blue-500 font-medium" : "text-gray-500"}`}>
                      <Link href={val.link}>
                          {val.page}
                      </Link>
                    </li>
                  ))
              }
            </ul>
            {/* Cart and Sign Up */}
            <div className="flex items-center space-x-10 ml-auto">
              {/* Cart */}
              <div>
                <Link href={'/checkout'} className="relative">
                  <BsCart2 className="text-xl"/>
                  <div className="bg-red-500 py-0.5 px-1.5 text-white rounded-full text-[10px] absolute top-0 left-3 text-center">0</div>
                </Link>
              </div>
              {/* Sign Up */}
              <div>
                <button className="bg-blue-500 text-white py-2.5 px-7 rounded-full font-semibold">Signup</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
