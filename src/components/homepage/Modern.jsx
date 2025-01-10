import React from 'react'
import { MODERN_DATA } from '../common/Helper'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../common/Heading'

const Modern = () => {
    return (
        <div className='bg-blue-700 py-16 md:py-20 lg:py-[120px]'>
            <div className="container lg:max-w-[1188px]">
                <Heading className='max-w-[968px] text-white text-center mx-auto' text='Modern, Fast, Simple – an all-in-one platform for your support needs' />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items-center mt-6 md:mt-8 lg:mt-16'>
                    {MODERN_DATA.map((obj, index) => (
                        <div className='shadow-modern hover:shadow-custom-modern rounded-3xl border border-blue-600 pt-6 hover:border-[#362c63] duration-300 lg:min-h-[420px] flex flex-col justify-between' key={index}>
                            <div className='flex items-center gap-3 px-6'>
                                <Image width={54} height={54} src={obj.svg} alt={obj.title} />
                                <h2 className='text-lg sm:text-xl md:text-2xl leading-125 text-white font-medium'>{obj.title}</h2>
                            </div>
                            <p className='text-light-white mt-5 mb-5 px-6 max-sm:text-sm'>{obj.description}</p>
                            <Image className='mx-auto max-w-[360px] w-full' width={360} height={229} src={obj.path} alt={obj.title} />
                        </div>
                    ))}
                </div>
                <Link href="/"
                    className="text-lg leading-150 text-white font-medium uppercase flex items-center gap-1 justify-center mt-5 sm:mt-6 md:mt-8 lg:mt-16 transition-all duration-300 group">Explore all features
                    <Image width={20} height={18} src="/images/svg/arrow.svg" alt="arrow" className="transition-all duration-300 transform group-hover:translate-x-2" />
                </Link>
            </div>
        </div>
    )
}

export default Modern