import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Home.module.css";
import { getProduct } from "../../utils/redux/slice/ProductSlice";
import { AppDispatch, RootState } from "../../utils/redux/store";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-10">
        {product?.map((items: any) => (
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
                <div className="bg-blue-400 p-2 rounded-md">
                  <Link href={"/cart"}>
                    <BsCart2 className="text-md text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default Products;
