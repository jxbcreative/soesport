import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { getProduct } from "../../utils/redux/slice/ProductSlice";
import { AppDispatch, RootState } from "../../utils/redux/store";
import React from 'react';
import { Product } from "../../utils/types";

interface PropProduct{
  openFilter: boolean;
  selectMerek: any;
  selectSorting: string;
  sorting: any;
}

const Products:React.FC<PropProduct> = ({openFilter, selectSorting, sorting, selectMerek}) => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product.products);
  const [showMore, setShowMore] = useState<boolean>(false)
  const [filteredProduct, setFilteredProduct] = useState<Product[]>([])
  

  const handleShowMore = () => {
    setShowMore(true)
  }

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  useEffect(() => {
    let filterProduct = [...product]
    // select product
    selectMerek.length === 0 ? product : filterProduct = filterProduct.filter((items) => selectMerek.includes(items.merek))

    // Sorting Product
    if(selectSorting !== ''){
        filterProduct = filterProduct.sort((a, b) => {
          if (selectSorting === sorting[0]) {
            return b.price - a.price;
          }
          else if (selectSorting === sorting[1]) {
            return a.price - b.price;
          }
          else if (selectSorting === sorting[2]) {
            return b.rating - a.rating;
          }
          else{
            return 0
          }
        })
    }
    setFilteredProduct(filterProduct)
  },[selectSorting, sorting, product, selectMerek])

  return (
    <div>
      <div className={`${openFilter? "grid-cols-3" : "grid-cols-4"} grid gap-10`}>
        {filteredProduct.slice(0, showMore ? filteredProduct.length : 8)?.map((items: any) => (
          <div key={items.id}>
            <div className={`${styles.product} w-72 rounded-xl`}>
              <Image
                src={items.thumbnail}
                alt={items.thumbnail}
                width={300}
                height={300}
                className="items-center"
              />
            </div>
            <div className="mt-3 space-y-1">
              <h4 className="text-[15px] font-medium">{items.name_product}</h4>
              <p className="text-[13px] text-gray-400">{items.merek}</p>
              <div className="flex items-center justify-between">
                <p className="text-[15px] ">$ {items.price}</p>
                <div className="bg-black p-2 rounded-md">
                  <Link href={"/cart"}>
                    <BsCart2 className="text-md text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-white">
        {
          showMore?  (<button onClick={() => setShowMore(false)} className="bg-blue-500 py-2.5 px-6 rounded-md font-medium">Hide more</button>) :(<button onClick={handleShowMore} className="bg-blue-500 py-2.5 px-6 rounded-md font-medium">Show more</button>) 
        }
      </div>
    </div>
  );
};

export default Products;
