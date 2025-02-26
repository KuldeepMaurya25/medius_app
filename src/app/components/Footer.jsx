import React from 'react'
import { BrandLogo } from './Logos'
import Link from 'next/link'
import footer from '../data/footer'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='font-sans text-textPrimary bg-[#fffdfa]'>
            <hr className="border-[#c7c9c5] pb-6 my-0 border-t-1"></hr>
            <div className='md:px-20 px-5'>
                <div className='my-7'>
                    <BrandLogo style={'text-primary w-[85px] h-[35px]'} />
                </div>
                <div className="my-7">
                    <div className="grid md:grid-cols-5 grid-cols-1 md:gap-16 gap-y-8">
                        <div className=' md:col-span-2'>
                            <p>Better is a family of companies serving all your homeownership needs.</p>
                            <ul className='mt-6 space-y-6'>
                                {
                                    Object.keys(footer['leftData'])?.map((item, key) => {
                                        return (
                                            <li className='mt-4' key={key}>
                                                <Link className="font-[550] font-sans flex flex-row items-center my-0" href='#'>
                                                    <Image src={`/${item}.svg`} width={item == 'better-settlement-services-logo' ? 220 : (item == 'better-real-estate-logo' || item == 'better-mortgage-logo' ? 150 : 120)} height={21} alt={item}></Image>
                                                </Link>
                                                <p className='text-[14px] m-0 mt-3'>{footer['leftData'][item]}</p>
                                            </li>
                                        )

                                    })
                                }

                            </ul>
                        </div>
                        <div className=''>
                            <h4 className='font-[700] md:text-lg text-[#292b29]'>Resources</h4>
                            <ul className='mt-6 space-y-4'>
                                {
                                    footer['Resources']?.map((item, key) => {
                                        return (
                                            <li className='' key={key}>
                                                <Link className=" text-[#222222] font-sans  my-0 inline relative pt-[5px] pb-[5px] bg-no-repeat bg-[right_bottom] bg-[length:0_2px] bg-gradient-to-b from-current to-transparent transition-[background-size] duration-300  hover:bg-[length:100%_2px] hover:bg-left-bottom" href='#'>
                                                    {item}
                                                </Link>

                                            </li>
                                        )

                                    })
                                }
                            </ul>

                        </div>
                        <div className=''>
                            <h4 className='font-[700] md:text-lg text-[#292b29]'>Company</h4>
                            <ul className='mt-6 space-y-4'>
                                {
                                    footer['Company']?.map((item, key) => {
                                        return (
                                            <li className='' key={key}>
                                                <Link className=" text-[#222222] font-sans  my-0 inline relative pt-[5px] pb-[5px] bg-no-repeat bg-[right_bottom] bg-[length:0_2px] bg-gradient-to-b from-current to-transparent transition-[background-size] duration-300  hover:bg-[length:100%_2px] hover:bg-left-bottom" href='#'>
                                                    {item}
                                                </Link>

                                            </li>
                                        )

                                    })
                                }
                            </ul>
                        </div>
                        <div className=''>
                            <h4 className='font-[700] md:text-lg text-[#292b29]'>Contact Us</h4>
                            <ul className='mt-6 space-y-4'>
                                {
                                    footer['Contact_Us']?.map((item, key) => {
                                        return (
                                            <li className='' key={key}>
                                                <Link className=" text-[#222222] font-sans  my-0 inline relative pt-[5px] pb-[5px] bg-no-repeat bg-[right_bottom] bg-[length:0_2px] bg-gradient-to-b from-current to-transparent transition-[background-size] duration-300  hover:bg-[length:100%_2px] hover:bg-left-bottom" href='#'>
                                                    {item}
                                                </Link>

                                            </li>
                                        )

                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer