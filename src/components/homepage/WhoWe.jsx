import React from 'react'
import Label from '../common/Label'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'

const WhoWe = () => {
    return (
        <div className='container lg:max-w-[1188px] gap-6 lg:gap-4 flex items-center justify-between max-lg:flex-wrap my-16 md:my-20 lg:my-24'>
            <div className='max-lg:w-full'>
                <Label className='max-lg:text-center' text='WHO WE ARE?' />
                <Heading className='max-lg:text-center' text="BoldDesk by Syncfusion" />
                <Paragraph className='lg:!mx-0 lg:text-start max-w-[516px]' text='Syncfusion has been helping developers worldwide build powerful line-of-business software for over 22 years. Our flagship component suite includes over 1,800 UI widgets and frameworks that help reduce development time and complexity.' />
            </div>
            <div className='flex items-center justify-between gap-3 sm:gap-4 md:gap-6 max-lg:w-fit max-lg:mx-auto'>
                <div className='bg-[#FCE5F6] shadow-custom-xl w-[100px] sm:w-[140] md:w-[150px] lg:w-[132px] h-28 md:h-[114px] lg:h-[148px]   md:rounded-3xl rounded-xl flex flex-col gap-1 sm:gap-2 items-center justify-center p-3'>
                    <h2 className='text-center leading-125 font-bold text-lg lg:text-3xl text-blue-800'>100+</h2>
                    <p className='text-center leading-150 font-bold text-custom-sm text-blue-800'>Fortune 500
                        companies
                    </p>
                </div>
                <div>
                    <div className='bg-[#EBE9FE] shadow-custom-xl w-[100px] sm:w-[140] md:w-[150px] lg:w-[132px] h-28 md:h-[114px] lg:h-[148px]   md:rounded-3xl rounded-xl flex flex-col gap-1 sm:gap-2 items-center justify-center p-3'>
                        <h2 className='text-center leading-125 font-bold text-lg lg:text-3xl text-blue-800'>33K+</h2>
                        <p className='text-center leading-150 font-bold text-custom-sm text-blue-800'>Companies
                        </p>
                    </div>
                    <div className='bg-[#D8F6E3] shadow-custom-xl w-[100px] sm:w-[140] md:w-[150px] lg:w-[132px] h-28 md:h-[114px] lg:h-[148px]   md:rounded-3xl rounded-xl flex flex-col gap-1 sm:gap-2 items-center justify-center p-3 mt-3 sm:mt-4 md:mt-6'>
                        <h2 className='text-center leading-125 font-bold text-lg lg:text-3xl text-blue-800'>1M+</h2>
                        <p className='text-center leading-150 font-bold text-custom-sm text-blue-800'>Developers
                        </p>
                    </div>
                </div>
                <div className='bg-[#E2F8FD] shadow-custom-xl w-[100px] sm:w-[140] md:w-[150px] lg:w-[132px] h-28 md:h-[114px] lg:h-[148px]   md:rounded-3xl rounded-xl flex flex-col gap-1 sm:gap-2 items-center justify-center p-3 mt-6'>
                    <h2 className='text-center leading-125 font-bold text-lg lg:text-3xl text-blue-800'>23+</h2>
                    <p className='text-center leading-150 font-bold text-custom-sm text-blue-800'>Years in business
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhoWe