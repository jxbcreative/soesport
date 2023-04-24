import React, { useEffect, useState } from "react";
import { BiCheck, BiChevronDown } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/redux/store";
import Products from "../../Product";

interface PropProduct {
  isMobile?: boolean;
}

const sorting = ["Popular", "High to Low", "Low to High"];

const ProductSection: React.FC<PropProduct> = ({ isMobile }) => {
  const [openFilter, setOpenFIlter] = useState<boolean>(false);
  const [openSorting, setOpenSorting] = useState<boolean>(false);
  // const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.product.products);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [selectSorting, setSelectSorting] = useState<string>("");
  const [selectMerek, setSelectMerek] = useState<string[]>([]);
  // const [searchType, setSearchType] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // const handlerSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchType(e.target.value)
  //   dispatch(searchProduct(e.target.value))
  // }

  const handlerOpenFilter = () => {
    setOpenFIlter(!openFilter);
  };

  const handlerOpenSorting = () => {
    setOpenSorting(!openSorting);
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
        <div></div>
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
              {/* Sorting */}
              {/* <div className="relative">
                <div
                  onClick={handlerOpenSorting}
                  className="bg-gray-100 py-2.5 px-3 flex items-center justify-between rounded-md w-40 cursor-pointer"
                >
                  {selectSorting ? (
                    selectSorting?.length > 7 ? (
                      selectSorting?.substring(0, 7) + "..."
                    ) : (
                      selectSorting
                    )
                  ) : (
                    <p className="text-gray-400">Sorting by</p>
                  )}

                  <BiChevronDown
                    className={`${openSorting && "-rotate-180"} text-lg`}
                  />
                </div>
                <div
                  className={`${
                    openSorting ? "bg-gray-100" : "hidden"
                  } p-3 absolute top-12 rounded-md shadow-md w-full space-y-3`}
                >
                  {sorting.map((val) => (
                    <p
                      key={val}
                      onClick={() => handlerSelectShorting(val)}
                      className="cursor-pointer"
                    >
                      {val}
                    </p>
                  ))}
                </div>
              </div> */}
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
            <div>
              <Products
                openFilter={openFilter}
                selectSorting={selectSorting}
                sorting={sorting}
                selectMerek={selectMerek}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSection;

// selectMerek.includes(merek)&& checkFilter === merek ?
