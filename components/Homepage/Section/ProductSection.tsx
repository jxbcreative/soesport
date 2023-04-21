import React, { useState } from "react";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import Products from "../../Product";

interface PropProduct {
  isMobile?: boolean;
}

const sorting = ["High to Low", "Low to High"];

const ProductSection: React.FC<PropProduct> = ({ isMobile }) => {
  const [openFilter, setOpenFIlter] = useState<boolean>(false);
  const [openSorting, setOpenSorting] = useState<boolean>(false);

  const handlerOpenFilter = () => {
    setOpenFIlter(!openFilter);
  };

  const handlerOpenSorting = () => {
    setOpenSorting(!openSorting);
  };
  return (
    <div>
      {isMobile ? (
        // Mobile view
        <div></div>
      ) : (
        // Desktop view
        <div className="px-24 mt-32">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[32px]">New Arrival</h2>
            {/* Sorting and filtering */}
            <div className="flex space-x-3">
                {/* Filter Category */}
              <div onClick={handlerOpenFilter} className="bg-gray-100 rounded-md p-2.5">
                <GoSettings className="text-xl -rotate-90" />
              </div>
              {/* Sorting */}
              <div className="relative">
                <div
                  onClick={handlerOpenSorting}
                  className="bg-gray-100 py-2.5 px-3 flex items-center justify-between rounded-md w-40 cursor-pointer"
                >
                  <p className="text-gray-400">Sorting by</p>
                  <BiChevronDown className="text-lg" />
                </div>
                <div
                  className={`${
                    openSorting ? "bg-gray-100" : "hidden"
                  } p-3 absolute top-12 rounded-md shadow-md w-full space-y-3`}
                >
                  {sorting.map((val) => (
                    <p key={val} onClick={() => setOpenSorting(false)} className="cursor-pointer">{val}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* List Product and Filter Product */}
            
          <div className={`${openFilter? "flex space-x-10" : null} mt-10`}>
            <div className={`${openFilter? "border border-gray-200 bg-gray-100 p-4 rounded-md w-[28vw] h-[100%]" : "hidden"}`}>
                <div className="mb-3 flex items-center space-x-3 bg-white py-2.5 px-3 rounded-md">
                    <BiSearch className="text-md text-gray-500"/>
                    <input type="text" placeholder="Search here" className="bg-transparent"/>
                </div>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
                <p>Hello world</p>
            </div>
            <div>
                <Products openFilter={openFilter}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;
