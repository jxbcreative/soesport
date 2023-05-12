import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { Navlink } from "../../utils/types";
import MediaQuery from "../MediaQuery";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import NavMobile from "./NavMobile";
import SearchMobile from "./SearchMobile";

const links: Navlink[] = [
  { page: "Homepage", link: "/" },
  { page: "Category", link: "/category" },
  { page: "Blog", link: "/blog" },
  { page: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const isMobile = MediaQuery("(max-width: 600px)");
  const [active, setActive] = useState("/");
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  // const dispatch = useDispatch<AppDispatch>()
  const { products } = useSelector((state: RootState) => state.product);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleActiveNav = (link: string) => {
    setActive(link);
  };

  const handleOpenNavMobile = () => {
    setOpenNav(!openNav);
  };

  // handler Open Search
  const handlerOpenSearch = () => {
    setOpenSearch(!openSearch);
    setSearchQuery("")
  };

  const filterProduct = products.filter((product: any) =>
    product.name_product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      {isMobile ? (
        // Mobile View
        <div>
          <div className="px-5 py-4 flex items-center justify-between">
            <h1 className="font-bold text-lg">
              Soe<span className="text-blue-500">Sport.</span>
            </h1>
            {/* Search, Cart and icon mobile nav */}
            <div className="flex items-center space-x-8">
              {/* Search Mobile */}
              <div onClick={handlerOpenSearch}>
                <FiSearch className="text-lg"/>
              </div>
              {/* Cart Mobile */}
              <div>
                <Link href={"/checkout"} className="relative">
                  <BsCart2 className="text-xl" />
                  <div className="bg-red-500 py-0.5 px-1.5 text-white rounded-full text-[10px] absolute top-0 left-3 text-center">
                    0
                  </div>
                </Link>
              </div>
              {/* Icon Mobile Nav */}
              <div onClick={handleOpenNavMobile}>
                <HiMenu className="text-2xl" />
              </div>
            </div>
          </div>
          {/* Search */}
          <SearchMobile openSearch={openSearch} setOpenSearch={setOpenSearch} filterProduct={filterProduct} handlerInputQuery={handleInputQuery} searchQuery={searchQuery}/>
          {/* Open Navbar Mobile */}
          <NavMobile
            handleActiveNav={handleActiveNav}
            openNav={openNav}
            setOpenNav={setOpenNav as any}
            links={links}
            active={active}
          />
        </div>
      ) : (
        // Desktop View
        <div>
          <div className="px-24 py-4 flex items-center">
            <h1 className="font-bold text-xl">
              Soe<span className="text-blue-500">Sport.</span>
            </h1>
            {/* Link */}
            <ul className="flex items-center space-x-6 ml-20">
              {links.map((val, idx) => (
                <li
                  onClick={() => handleActiveNav(val.link)}
                  key={idx}
                  className={`${
                    active === val.link
                      ? "text-blue-500 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  <Link href={val.link}>{val.page}</Link>
                </li>
              ))}
            </ul>
            {/* Search, Cart and Sign Up */}
            <div className="flex items-center space-x-10 ml-auto">
              {/* Search */}
              <div className="relative">
                <FiSearch onClick={handlerOpenSearch} className="text-lg" />
                <div
                  className={`${
                    openSearch
                      ? "bg-[#fdfdfd] shadow-md rounded-md p-3"
                      : "hidden"
                  } absolute top-8 w-96 right-0 z-30`}
                >
                  <div className="bg-gray-100 py-2 px-3 rounded-md flex items-center space-x-3">
                    <FiSearch className="text-md text-gray-400" />
                    <div className="bg-gray-300 w-[1.5px] h-6" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleInputQuery}
                      placeholder="Seach here"
                      className="bg-transparent w-full"
                    />
                  </div>
                  <div className="mt-5">
                    {
                      searchQuery  !== '' && filterProduct.length == 0&&
                      (<div>
                        <p>Product not found</p> 
                      </div>)
                    }
                    {
                    searchQuery === '' && filterProduct.length > 0 ? 
                      (<p>Please input data</p>) : 
                      (<div className={`${searchQuery !== '' && filterProduct.length == 0 ? "h-[50%]" : "h-[15rem]"} space-y-3 overflow-y-scroll scroll-smooth `}>
                        {
                          filterProduct.map((product: any) => (
                            <div key={product.id} className="flex items-center space-x-3">
                              <Image src={product.thumbnail} alt={product.thumbnail} width={70} height={70}/>
                              <div className="space-y-1">
                              <h4 className="font-semibold text-[14px]">{product.name_product}</h4>
                              <p>${product.price}</p>
                              </div>
                            </div>
                          ))
                        }
                      </div>) 
                    }
                  </div>
                </div>
              </div>
              {/* Cart */}
              <div>
                <Link href={"/checkout"} className="relative">
                  <BsCart2 className="text-xl" />
                  <div className="bg-red-500 py-0.5 px-1.5 text-white rounded-full text-[10px] absolute top-0 left-3 text-center">
                    0
                  </div>
                </Link>
              </div>
              {/* Sign Up */}
              <div>
                <button className="bg-blue-500 text-white py-2.5 px-7 rounded-full font-semibold">
                  <Link href={'/register'}>
                    Signup
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
