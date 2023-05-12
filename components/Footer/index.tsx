import Image from "next/image";
import Link from "next/link";
import { Navlink, SocialMedia } from "../../utils/types";
import MediaQuery from "../MediaQuery";
import { useState } from "react";

const links: Navlink[] = [
  { page: "Home", link: "/" },
  { page: "Blog", link: "/blog" },
  { page: "Contact", link: "/contact" },
];

const socialMedia: SocialMedia[] = [
  { icon: "instagram.svg", link: "https://istagram.com" },
  { icon: "facebook.svg", link: "https://facebook.com" },
  { icon: "twitter.svg", link: "https://twitter.com" },
];

const Footer = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [active, setActive] = useState<string>('/')

  const handlerActiveNav = (link: string) => {
    setActive(link)
  }

  return (
    <div>
      {isMobile ? (
        // Mobile view
        <div className="mt-20">
          <div className="bg-[#202020] w-screen h-auto px-3 py-5">
            {/* Logo with about */}
            <div className="space-y-3">
              <h2 className="font-bold text-lg text-white">
                Soe<span className="text-blue-500">Sport.</span>
              </h2>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cupiditate, et? Autem tempore porro obcaecati quo, quaerat nisi
                iusto illo maxime!
              </p>
            </div>
            {/* Quicklink, authentication, and social media */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              {/* Quicklink */}
              <div className="text-white space-y-3">
                <h4 className="font-semibold">Quicklink</h4>
                {links.map((val, idx) => (
                  <li key={idx} onClick={() => handlerActiveNav(val.link)} className={`${active == val.link ? "text-blue-500" : "text-gray-400"} `}>
                    <Link href={val.link}>{val.page}</Link>
                  </li>
                ))}
              </div>
              {/* Authentication */}
              <div className="text-white space-y-3">
                <h4 className="font-semibold">Account</h4>
                <ul className="space-y-3">
                  <li className="text-gray-400">
                    <Link href={"/login"}>Login</Link>
                  </li>
                  <li className="text-gray-400">
                    <Link href={"/register"}>Register</Link>
                  </li>
                </ul>
              </div>
              {/* Social Media */}
              <div className="text-white space-y-3">
                <h4 className="font-semibold">Social media</h4>
                <ul className="flex space-x-3 items-center">
                  {socialMedia.map((val, idx) => (
                    <li key={idx}>
                      <Link href={val.link}>
                        <Image
                          src={require("../../public/assets/" + val.icon)}
                          alt={val.icon}
                          className="w-8"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Copyright */}
            <footer className="text-white text-[14px] text-center mt-10">
              Copyright ©2022. Soe Sport
            </footer>
          </div>
        </div>
      ) : (
        // Desktop view
        <div className="mt-40">
          <div className="bg-[#202020] w-screen h-56 px-24 py-10">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-3">
                <h2 className="font-bold text-lg text-white">
                  Soe<span className="text-blue-500">Sport.</span>
                </h2>
                <p className="text-gray-400 w-[60%]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate, et? Autem tempore porro obcaecati quo, quaerat
                  nisi iusto illo maxime!
                </p>
              </div>
              <div className="grid grid-cols-3 gap-10 mr-20">
                <div className="text-white space-y-3">
                  <h4 className="font-semibold">Quicklink</h4>
                  {links.map((val, idx) => (
                    <li key={idx} className="text-gray-400">
                      <Link href={val.link}>{val.page}</Link>
                    </li>
                  ))}
                </div>
                <div className="text-white space-y-3">
                  <h4 className="font-semibold">Account</h4>
                  <ul className="space-y-3">
                    <li className="text-gray-400">
                      <Link href={"/login"}>Login</Link>
                    </li>
                    <li className="text-gray-400">
                      <Link href={"/register"}>Register</Link>
                    </li>
                  </ul>
                </div>
                {/* Social media */}
                <div className="text-white space-y-3">
                  <h4 className="font-semibold">Social media</h4>
                  <ul className="flex space-x-5 items-center">
                    {socialMedia.map((val, idx) => (
                      <li key={idx}>
                        <Link href={val.link}>
                          <Image
                            src={require("../../public/assets/" + val.icon)}
                            alt={val.icon}
                            className="w-10"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Copyright */}
            <footer className="text-white text-[14px] mt-5">
              ©2022. Soe Sport
            </footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
