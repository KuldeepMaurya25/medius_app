import React from 'react'
import { HomeLogo, MortageLogo, CashLogo, CustomLogo, OffersLogo } from '../components/Logos'

const Start = () => {
    return (
        <div className='bg-[#fffdfa] py-16'>
            <div className='lg:px-96 md:px-32 px-6'>


                <h2 className='w-full text-center text-textPrimary text-2xl md:text-3xl font-[630]'>
                    Hi, I'm Betsy!
                    <br />
                    What can I help you with?
                </h2>

                <div className=" flex flex-wrap flex-col gap-4 my-5">
                    <div className='border border-[#a4a8a4] rounded-md py-4 px-10 flex gap-4 items-center'>
                        <HomeLogo />
                        <p className='font-[650] text-textPrimary'>Buying a home</p>
                    </div>
                    <div className='border border-[#a4a8a4] rounded py-4 px-10 flex gap-4 items-center'>
                        <MortageLogo />
                        <p className='font-[650] text-textPrimary'>Refinance my mortgage</p>
                    </div>
                    <div className='border border-[#a4a8a4] rounded py-4 px-10 flex gap-4 items-center'>
                        <CashLogo />
                        <p className='font-[650] text-textPrimary'>Get cash from my home</p>
                    </div>
                </div>
                <div className='flex flex-wrap gap-6 my-10 justify-center'>
                    <div className=''>
                        <h2 className='text-center text-3xl font-[640] text-textPrimary'>
                            $100B
                        </h2>
                        <p className='text-textSecondary mt-4' >
                            home loans funded entirely online
                        </p>
                    </div>
                    <div>
                        <h2 className='text-center text-3xl font-[640] text-textPrimary'>
                            400K
                        </h2>
                        <p className='text-textSecondary mt-4'>
                            Customers who chose a Better Mortgage
                        </p>
                    </div>
                </div>
                <div className='bg-[#f0f7f1] flex flex-col    rounded-md p-4'>
                    <p className='text-textSecondary my-2 text-center'>
                        After a few questions, you'll unlock:
                    </p>
                    <div className='m-auto w-fit'>
                        <div className='flex gap-4 '>
                            <CustomLogo />
                            <p className='text-textSecondary'>Custom mortgage rates</p>
                        </div>
                        <div className='flex gap-4 my-3 '>
                            <OffersLogo />
                            <p className='text-textSecondary'>Exclusive offers</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Start