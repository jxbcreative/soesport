import Image from "next/image";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

interface PropSeach {
  openSearch: boolean;
  setOpenSearch: any;
  filterProduct: any;
  handlerInputQuery: any;
  searchQuery: string;
}

const SearchMobile: React.FC<PropSeach> = ({
  openSearch,
  setOpenSearch,
  filterProduct,
  handlerInputQuery,
  searchQuery,
}) => {
  return (
    <div
      className={`${
        openSearch ? "bg-white top-0" : "hidden bottom-0"
      } w-screen h-screen fixed z-30`}
    >
      <div className="flex items-center space-x-2 p-5">
        <IoMdClose onClick={() => setOpenSearch(false)} className="text-xl" />
        <div className="space-x-2 flex items-center py-2 px-3 bg-gray-100 w-full">
          <FiSearch className="text-md text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={handlerInputQuery}
            placeholder="Search product here"
            className="bg-transparent"
          />
        </div>
      </div>
      {/* Product */}
      <div className="mt-5 px-5 mb-10">
        {searchQuery !== "" && filterProduct.length == 0 && (
          <p>Product not found</p>
        )}
        {searchQuery == "" && filterProduct.length > 0 ? (
          <p>Please input query</p>
        ) : (
          <div
            className={`${
              searchQuery !== "" && filterProduct.length > 0
                ? "h-[38rem]"
                : "h-[5rem]"
            } space-y-5 overflow-y-scroll scroll-smooth`}
          >
            {filterProduct.map((product: any) => (
              <div key={product.id} className="flex space-x-3 items-center">
                <Image
                  src={product.thumbnail}
                  alt={product.thumbnail}
                  width={70}
                  height={70}
                />
                <div className="space-y-1">
                  <h4 className="font-semibold text-[14px]">
                    {product.name_product}
                  </h4>
                  <p className="text-gray-400">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMobile;
