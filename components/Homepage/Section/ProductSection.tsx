import React, { useEffect, useState } from "react";
import { BiCheck } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/redux/store";
import Products from "../../Product";

interface PropProduct {
  isMobile?: boolean;
}

const sorting = ["Popular", "High price", "Low price"];

const ProductSection: React.FC<PropProduct> = ({ isMobile }) => {
  const [openFilter, setOpenFIlter] = useState<boolean>(false);
  // const [openSorting, setOpenSorting] = useState<boolean>(false);
  const products = useSelector((state: RootState) => state.product.products);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [selectSorting, setSelectSorting] = useState<string>("");
  // const [choosSelect, setChoosSelect] = useState<boolean>(false);
  const [selectMerek, setSelectMerek] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handlerOpenFilter = () => {
    setOpenFIlter(!openFilter);
  };

  const mereks = Array.from(
    new Set(products.map((product: any) => product.merek))
  );

  const handlerCheckFilter = (merek: any) => {
    if (selectMerek.includes(merek)) {
      setSelectMerek((prevSelected) =>
        prevSelected.filter((prevMerek) => prevMerek !== merek)
      );
    } else {
      setSelectMerek((prevSelected) => [...prevSelected, merek]);
    }
  };

  // multiple select merek
  const handlerSelectShorting = (val: any) => {
    setSelectSorting(val);
  };

  return (
    <div>
      {isMobile ? (
        // Mobile view
        <div className="mt-20 mb-20">
          <div className="flex items-center justify-between px-3">
            <h2 className="font-semibold text-2xl">New Arrival</h2>
            <div
              onClick={handlerOpenFilter}
              className="p-2 bg-gray-100 rounded-md shadow-lg shadow-gray-200"
            >
              <GoSettings className="text-lg rotate-90" />
            </div>
          </div>
          <div
            className={`${
              openFilter ? "bg-[#0808089f]" : "hidden"
            } w-screen h-screen fixed top-0`}
          >
            <div
              className={`${
                openFilter ? "bg-white" : "hidden"
              } w-screen absolute bottom-0 rounded-t-md`}
            >
              <div className="bg-gray-500 h-[2.3px] w-8 rounded-full my-2 mx-auto" />
              <div className="px-3 mt-5">
                <h4 className="font-semibold text-[18px]">Filter</h4>
                {/* Sorting and Filtering */}
                <div className="mt-5">
                  {/* Sorting */}
                  <div>
                    <h4 className="text-gray-500 font-semibold">Sorting</h4>
                    <div className="grid grid-cols-3 gap-3 mt-3 mr-10">
                      {sorting.map((sort: any) => (
                        <div
                          key={sort}
                          onClick={() => handlerSelectShorting(sort)}
                          className={` ${
                            selectSorting == sort
                              ? "bg-blue-500 text-white"
                              : "border-[1px] border-gray-400"
                          } py-2 px-3 rounded-full`}
                        >
                          <p className="text-center">{sort}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Filter */}
                  <div className="mt-10">
                    <h4 className="text-gray-500 font-semibold">Merek</h4>
                    <div className="grid grid-cols-3 gap-3 mt-3 mr-10">
                      {mereks.map((merek: any) => (
                        <div
                          key={merek}
                          onClick={() => handlerCheckFilter(merek)}
                          className={`${
                            selectMerek.includes(merek)
                              ? "bg-blue-500 text-white"
                              : "border-[1px] border-gray-400"
                          } py-2 px-3 rounded-full`}
                        >
                          <p className="text-center">{merek}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-2">
                  {selectMerek && selectSorting == "" ? (
                    ""
                  ) : (
                    <button
                      onClick={() => setOpenFIlter(false)}
                      className="bg-black text-white text-center py-3 w-full rounded-md font-semibold"
                    >
                      Show product
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Product */}
          <Products
            openFilter={openFilter}
            selectSorting={selectSorting}
            sorting={sorting}
            selectMerek={selectMerek}
          />
        </div>
      ) : (
        // Desktop view
        <div className="px-24 mt-32">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-[32px]">New Arrival</h2>
            {/* Sorting and filtering */}
            <div className="flex space-x-3">
              {/* Filter Category */}
              <div
                onClick={handlerOpenFilter}
                className="bg-gray-100 rounded-md p-2.5"
              >
                <GoSettings className="text-xl -rotate-90" />
              </div>
            </div>
          </div>
          {/* List Product and Filter Product */}
          <div className={`${openFilter ? "flex space-x-10" : null} mt-10`}>
            <div
              className={`${
                openFilter && isSticky
                  ? "border border-gray-200 bg-gray-100 p-4 rounded-md w-[18.5vw] h-[100%] sticky top-5 z-20"
                  : "hidden"
              }`}
            >
              {/* Merek */}
              <div className="space-y-3">
                <h4 className="font-semibold text-[18px] pb-3">Merek</h4>
                {mereks.map((merek: any) => (
                  <div
                    key={merek}
                    className="flex items-center space-x-3 w-full"
                  >
                    <div
                      onClick={() => handlerCheckFilter(merek)}
                      className={`${
                        selectMerek.includes(merek)
                          ? "bg-blue-500 p-1"
                          : "border border-gray-500 p-2.5"
                      } rounded-sm`}
                    >
                      <BiCheck
                        className={`${
                          selectMerek.includes(merek)
                            ? "text-white text-md"
                            : "hidden"
                        }`}
                      />
                    </div>
                    <p>{merek}</p>
                  </div>
                ))}
              </div>
              {/* Sorting */}
              <div className="space-y-3 mt-10">
                <h4 className="font-semibold text-[18px] pb-3">Sort</h4>
                {sorting.map((sorting: any) => (
                  <div
                    key={sorting}
                    className="flex items-center space-x-3 w-full"
                  >
                    <div
                      onClick={() => handlerSelectShorting(sorting)}
                      className={`${
                        selectSorting === sorting
                          ? "bg-blue-500 p-1"
                          : "border border-gray-500 p-2.5"
                      } rounded-full`}
                    >
                      <BiCheck
                        className={`${
                          selectSorting === sorting
                            ? "text-white text-md"
                            : "hidden"
                        }`}
                      />
                    </div>
                    <p>{sorting}</p>
                  </div>
                ))}
              </div>
            </div>
            <Products
              openFilter={openFilter}
              selectSorting={selectSorting}
              sorting={sorting}
              selectMerek={selectMerek}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;

// selectMerek.includes(merek)&& checkFilter === merek ?
