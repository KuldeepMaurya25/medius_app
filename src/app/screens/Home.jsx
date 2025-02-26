"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GoogleLogo, StarLogo, WatchLogo, GreenStarLogo, BorderArrow } from '../components/Logos'
import Image from 'next/image'
import BorderButton from '../components/BorderButton'
import homeData from '../data/home'

const HomeScreen = () => {

    const [imageName, setImageName] = useState('Arian');
    const [answerName, setAnswerName] = useState('Our_products');

    const changeImage = (item) => {
        setImageName(item)
    }
    const changeAnswer = (item) => {
        setAnswerName(item)
    }


    return (
        <div className='bg-[#fffdfa] text-textPrimary'>
            <section className='bg-primary  min-h-[40vw]' >
                <div className='m-auto max-w-screen-2xl px-6 md:px-10 lg:px-14 min-h-[40vw] overflow-hidden'>
                    <h1 className="font-[600] leading-heading m-0 p-0 w-auto  top-32 z-1 pt-12 leading-small text-center text-[50px] text-secondary md:relative md:top-[72px] lg:top-32 md:p-0 md:text-8xl lg:leading-[120px] lg:text-[118px] h-auto">
                        Mortgages
                        <br />
                        made simple
                    </h1>
                    <div className="md:static relative flex flex-col items-center justify-center md:flex-row">
                        <div className='w-80 md:w-auto'>
                            <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-secondary text-[#292b29] hover:bg-primary hover:text-white h-16 px-12 py-5 mt-lg w-full md:mt-none md:w-fit" href="#">Start my approval</Link>
                            <div className='mt-3 flex items-center justify-center gap-1 text-sm text-white'>
                                <WatchLogo /> <span className="mr-1">3 min</span><span>| No credit impact</span>
                            </div>

                        </div>
                        <div className='mt-5 md:mb-[-36px] md:mt-0'>
                            <Image src={`/hero-variant-c.webp`} width={510} height={810} alt={"hero-variant-c"}></Image>

                        </div>
                        <div className='rounded-lg absolute bottom-8 bg-[#073126] px-3 py-2.5 md:relative md:bg-transparent md:mt-[24px]'>
                            <div className='flex items-center gap-2'>
                                <GoogleLogo />
                                <StarLogo />
                                <StarLogo />
                                <StarLogo />
                                <StarLogo />
                            </div>
                            <div className="mt-1 text-xs text-white">
                                4.6
                                Stars | 3177
                                Google reviews
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section m-auto flex max-w-screen-2xl flex-col justify-between gap-x-[64px] px-[24px] p-[16px] py-[80px] md:px-10 md:flex-row-reverse xl:p-[120px]'>
                <div className="flex flex-col justify-center md:max-w-[507px]">
                    <h2 className="font-bold  m-0 p-0 w-auto tracking-tight md:tracking-tighter mb-4 text-3xl leading-[6rem]  lg:text-[88px]">Find out why we’re better.</h2>
                    <a className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-primary text-white hover:bg-secondary h-16 px-12 py-5 mb-[12px] w-full md:w-fit" href="/about-us/">See all our stories</a>
                    <div className="mb-10 flex items-end justify-center gap-2 leading-4  md:justify-start">
                        <GreenStarLogo />
                        <span><strong>Excellent</strong></span><span><strong>4.4</strong> out of 5</span>
                    </div>
                </div>
                <div className='flex flex-col gap-6 md:flex-col-reverse'>
                    <div className='flex gap-x-4 overflow-scroll [&::-webkit-scrollbar]:hidden'>
                        {
                            homeData['stories'].map((item, key) => {
                                return (
                                    <BorderButton onClick={changeImage} item={item} isBordered={item == imageName} key={key} />


                                )
                            })
                        }
                    </div>
                    <div className='flex justify-center gap-x-6 overflow-hidden rounded-lg'>
                        <Image src={`/still-quote-${imageName}.webp`} width={341} height={606} alt={imageName} loading='lazy'></Image>

                    </div>

                </div>
            </section>
            <section className='section w-full pb-6 lg:pb-12'>
                <div className='m-auto flex max-w-screen-2xl flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-[60px]'>
                    <div className='justify-left flex w-full max-w-lg flex-wrap gap-12 lg:gap-6 lg:max-w-none lg:items-end lg:justify-between'>
                        <h2 className="font-bold text-textPrimary leading-[3.5rem] m-0 p-0 text-[48px]  md:tracking-tight w-full max-w-lg  tracking-tight">
                            Got questions?<br />We've got answers
                        </h2>
                        <div className='flex gap-3 overflow-x-scroll lg:gap-6 [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0'>
                            {
                                Object.keys(homeData['answers']).map((item, key) => {
                                    return (
                                        <BorderButton onClick={changeAnswer} item={item} isBordered={item == answerName} key={key} />


                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='flex flex-row w-full flex-wrap justify-center gap-8 lg:gap-6'>
                        {
                            Object.keys(homeData['answers']).map((item) => {
                                return (
                                    homeData['answers'][item].map((val, key) => {
                                        return (
                                            <Link key={key} className={`flex w-full max-w-lg cursor-pointer flex-col gap-8 
                                        rounded-lg bg-[#f0f7f1] px-6 py-5 md:flex-row md:[&>img]:h-[100%] md:[&>img]:max-w-[285px] md:gap-10 md:max-w-full md:justify-between md:px-12 md:py-8 lg:flex-1 lg:flex-col lg:basis-1/4 lg:justify-between lg:gap-6 lg:px-12 lg:py-[35px] lg:max-w-lg lg:[&>img]:max-w-none 
                                        lg:[&:nth-child(2)>*]:flex-1 lg:[&:nth-child(2)>img]:h-[100%] lg:[&:nth-child(2)>img]:max-w-[285px] lg:[&:nth-child(2)]:max-w-none 
                                        lg:[&:nth-child(2)]:basis-3/5 lg:[&:nth-child(2)]:flex-row lg:[&:nth-child(2)]:gap-10 
                                        lg:[&:nth-child(3)>*]:flex-1 lg:[&:nth-child(3)>img]:h-[100%] lg:[&:nth-child(3)>img]:max-w-[285px] 
                                        lg:[&:nth-child(3)]:max-w-none lg:[&:nth-child(3)]:basis-3/5 lg:[&:nth-child(3)]:flex-row-reverse 
                                        lg:[&:nth-child(3)]:gap-10 
                                        lg:[&:nth-child(6)>*]:flex-1 lg:[&:nth-child(6)>img]:h-[100%] lg:[&:nth-child(6)>img]:max-w-[285px] 
                                        lg:[&:nth-child(6)]:max-w-none lg:[&:nth-child(6)]:basis-3/5 lg:[&:nth-child(6)]:flex-row 
                                        lg:[&:nth-child(6)]:gap-10
                                        lg:[&:nth-child(7)>*]:flex-1 lg:[&:nth-child(7)>img]:h-[100%] lg:[&:nth-child(7)>img]:max-w-[285px] 
                                        lg:[&:nth-child(7)]:max-w-none lg:[&:nth-child(7)]:basis-3/5 lg:[&:nth-child(7)]:flex-row-reverse 
                                        lg:[&:nth-child(7)]:gap-10
                                        ${item == answerName ? "" : 'hidden'}`} href='#' >
                                                <div className='flex flex-col gap-6' >
                                                    <h4 className='font-bold leading-3 m-0 p-0 w-auto md:text-3xl text-xl md:tracking-normal tracking-normal text-[#073126] lg:text-xl'>
                                                        {val['mainText']}
                                                    </h4>
                                                    <p className='hidden flex-1 md:flex-none text-sm text-[#073126] md:block'>
                                                        {val['subText']}
                                                    </p>
                                                    <div className='flex items-end justify-between'>
                                                        <div className='group'>
                                                            <BorderArrow />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Image src={`/${val['image']}`} width={200} height={200} alt={val['image']} loading='lazy' className="rounded-lg w-full  object-cover h-[160px] md:h-[130px]"></Image>

                                            </Link>

                                        )
                                    })
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeScreen