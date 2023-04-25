import React from 'react'
import Image from 'next/image';

interface PropServices{
    isMobile ? : boolean;
}

const brandImage = [
    "nike-logo.svg", "adidas-logo.svg", "converse-logo.svg", "vans-logo.svg"
]

const BrandSection:React.FC<PropServices> = ({isMobile}) => {
  return (
    <div>
        {
            isMobile? 
            // Mobile View
            (<div>
                <div className='flex items-center px-3 overflow-x-scroll space-x-20 scrollbar-hide scroll-smooth mt-20'>
                  {
                    brandImage.map((item) => (
                      <Image key={item} src={require('../../../public/assets/' + item)} alt={item} className='w-20'/>
                    ))
                  }
                </div>
            </div>) : 
            // Desktop View
            (<div className='mt-24'>
              <div className='flex items-center px-3  space-x-40 justify-center'>
                  {
                    brandImage.map((item) => (
                      <Image key={item} src={require('../../../public/assets/' + item)} alt={item} className='w-32'/>
                    ))
                  }
                </div>
            </div>)
        }
    </div>
  )
}

export default BrandSection