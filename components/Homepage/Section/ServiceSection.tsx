import React from 'react'
import { Service } from '../../../utils/types';
import Image from 'next/image';

interface PropService{
    isMobile: boolean;
}

const services:Service[] = [
    {
        title: "Free Shipping",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, illum.",
        icon: "free-shipping.png"
    },
    {
        title: "Free Return",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, illum.",
        icon: "free-return.png"
    },
    {
        title: "Good Quality",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, illum.",
        icon: "good-quality.png"
    }
]

const ServiceSection:React.FC<PropService> = ({isMobile}) => {
  return (
    <div>
        {
            isMobile? 
            // Mobile View
            (<div className='mt-20 px-3'>
                <div className='grid grid-cols-1 gap-5'>
                    {
                        services.map((service, idx) => (
                            <div key={idx} className='border border-black p-5 text-center rounded-md'>
                                <Image src={require('../../../public/assets/'+service.icon)} alt={service.icon} className='mx-auto w-10'/>
                                <div className='space-y-1 mt-2'>
                                    <h4 className='font-semibold'>{service.title}</h4>
                                    <p className='text-gray-400 text-[13px]'>{service.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>) : 
            // Desktop View
            (<div className='mt-32 mx-40'>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        services.map((service, idx) => (
                            <div key={idx} className='border border-black p-5 text-center rounded-md'>
                                <Image src={require('../../../public/assets/'+service.icon)} alt={service.icon} className='mx-auto w-10'/>
                                <h4 className='font-semibold pt-2'>{service.title}</h4>
                                <p className='text-gray-500'>{service.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>)
        }
    </div>
  )
}

export default ServiceSection