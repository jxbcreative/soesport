import React from 'react'
import {GoSettings} from 'react-icons/go'
import Products from '../../Product';

interface PropProduct{
    isMobile? : boolean;
}

const ProductSection: React.FC<PropProduct> = ({isMobile}) => {
  return (
    <div>
        {
            isMobile? 
            // Mobile view
            (<div></div>) : 
            // Desktop view
            (<div className='px-24 mt-32'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold text-[32px]'>New Arrival</h2>
                    <div className='bg-blue-500 rounded-md p-2'>
                        <GoSettings className='text-xl text-white -rotate-90'/>
                    </div>
                </div>
                {/* List Product */}
                <div className='mt-10'>
                    <Products/>
                </div>
            </div>)
        }
    </div>
  )
}

export default ProductSection