import React from 'react'
import Image from 'next/image';
import BgHero from '../../../public/assets/bg-hero.webp'
import BgHeroMobile from '../../../public/assets/bg-hero.webp'
import styles from '../../../styles/Home.module.css'

interface HeroProps{
    isMobile ? : boolean;
}

const HeroSection: React.FC<HeroProps> = ({isMobile}) => {
  return (
    <div>
        {
            isMobile? 
            // Mobile view
            (<div className={styles.BgHeroMobile}>
                  {/* Content */}
                 <div className='pt-32 px-3'>
                 <h1 className='text-[24px] text-center mx-auto text-white font-bold'>Browse our collection now and find your perfect pair of sneakers!</h1>
                 <div className='text-center mt-5'>
                    <button className='bg-blue-500 py-2.5 px-6 rounded-md text-white font-semibold'>Find Now</button>
                    </div>
                 </div>
            </div>) : 
            // Desktop view
            (<div className='relative'>
                <div className='w-screen'>
                    <Image src={BgHero} alt='bg-hero'/>

                </div>
                 {/* Content */}
                <div className='absolute inset-0 justify-center'>
                    <h1 className='text-[52px] text-center mx-auto w-[50%] mt-40 text-white font-bold'>Browse our collection now and find your perfect pair of sneakers!</h1>
                    <div className='text-center mt-5'>
                        <button className='bg-blue-500 py-2.5 px-6 rounded-md text-white font-semibold'>Find Now</button>
                    </div>
                </div>
            </div>)
        }
    </div>
  )
}

export default HeroSection