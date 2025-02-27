"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AllyLogo, AmericanLogo, GoldManLogo, SoftBankLogo, PinganLogo, CityLogo } from '../components/Logos'

const AboutUs = () => {
    return (
        <div className='bg-[#fffdfa] text-textPrimary'>
            <section className="m-auto flex h-screen max-w-screen-xl items-center md:px-20">
                <div>
                    <h1 className="font-[640]  m-0 p-0 tracking-normal w-auto text-2xl md:text-3xl  text-center text-[#017848]">
                        Our mission
                    </h1>
                    <h2 className="font-[640] text-textPrimary  m-0 p-0 w-auto text-3xl md:text-5xl mt-8 text-center">
                        We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
                    </h2>
                </div>
            </section>
            <section className='m-auto flex max-w-screen-xl flex-col-reverse gap-x-32 gap-y-4 px-20 pb-32 md:flex-row md:px-20'>
                <div className='w-full md:w-1/2'>
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        The status quo is broken
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base mt-6">The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO,
                        <Link href="#">Vishal Garg</Link>, set out to change that.
                    </p>
                    <Link className="rounded-lg text-base text-center font-bold select-none outline-none transition duration-300 ease-out focus:shadow-[0_0_0_4px_inset]  disabled:bg-primary disabled:shadow-none text-white bg-[#017848] hover:bg-primary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-4 h-16 w-auto inline-flex items-center justify-center mt-8" href="#">
                        Read Vishal’s story</Link>
                </div>
                <div className='relative w-full md:w-1/2'>
                    <Image src={`/vishal-mission.jpg`} width={1080} height={800} alt={'vishal-mission.jpg'} loading='lazy'></Image>

                </div>
            </section>
            <section className="bg-[#017848] px-20 py-20">
                <div className="m-auto max-w-screen-lg">
                    <h2 className="font-[640]  m-0 p-0 w-auto text-2xl md:text-5xl  text-white">
                        How we’re changing things
                    </h2>
                    <p className="font-normal m-0 p-0 text-left text-white text-base mt-8">
                        Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</p>
                    <p className="font-normal  m-0 p-0 text-left text-white text-base mt-4">That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</p>
                </div>
            </section>
            <section className='px-20 py-28'>
                <h2 className='font-bold text-textPrimary  m-0 p-0 tracking-normal w-auto text-2xl md:text-3xl md:tracking-tight text-center'>Backed By</h2>
                <div className='m-auto mt-20 flex max-w-screen-2xl flex-wrap justify-around'>
                    <Link href='#'><SoftBankLogo /></Link>
                    <Link href='#'><AllyLogo /></Link>
                    <Link href='#'><GoldManLogo /></Link>
                    <Link href='#'><CityLogo /></Link>
                    <Link href='#'><PinganLogo /></Link>
                    <Link href='#'><AmericanLogo /></Link>
                </div>
            </section>
            <section className="m-auto max-w-screen-xl pb-20 text-center">
                <h2 className="font-bold text-textPrimary  m-0 p-0 tracking-normal w-auto text-xl md:text-3xl md:tracking-tight mb-16">Company timeline
                </h2>
                <div className="relative m-auto w-1/3 before:absolute before:left-1/2 before:block before:h-full before:w-1 before:translate-x-2/4 before:bg-[#e8eae6]">
                    <div className="relative flex flex-col items-center"><div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                        <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2014</h3></div>
                        <div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 -ml-6 -translate-x-1/2 lg:-ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.</p>
                        </div></div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2015</h3>
                        </div><div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 ml-6 translate-x-1/2 lg:ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
                        </div></div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2016</h3>
                        </div>
                        <div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 -ml-6 -translate-x-1/2 lg:-ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
                        </div></div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2017
                            </h3></div>
                        <div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 ml-6 translate-x-1/2 lg:ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better expands into the real estate market with Better Real Estate.</p></div>
                    </div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2018</h3>
                        </div>
                        <div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 -ml-6 -translate-x-1/2 lg:-ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
                        </div></div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2019</h3>
                        </div><div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 ml-6 translate-x-1/2 lg:ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p></div>
                    </div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2021</h3>
                        </div><div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 -ml-6 -translate-x-1/2 lg:-ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base"
                            >Better acquires Trussle — The UK’s most innovative online mortgage broker.</p></div>
                    </div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">
                                2022</h3></div><div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 ml-6 translate-x-1/2 lg:ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</p></div>
                    </div><div className="relative flex flex-col items-center"><div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                        <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2023</h3>
                    </div><div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 -ml-6 -translate-x-1/2 lg:-ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to <Link href="/with/one-day-mortgage-terms/">
                                full mortgage Commitment Letter within 24 hours</Link> vs. typical industry process of 30+ days.</p>
                        </div>
                        <div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 ml-6 translate-x-1/2 lg:ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">Better Mortgage launches the fully digital 3-day HELOC².</p>
                        </div><div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 -ml-6 -translate-x-1/2 lg:-ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">Better Mortgage launches One Day Verified Approval Letter.</p>
                        </div></div><div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-[#017848] px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">Today</h3>
                        </div>
                        <div className="rounded-lg relative w-full bg-[#dfe0dc] my-4 p-8 lg:p-10 ml-6 translate-x-1/2 lg:ml-8">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                                <Link className="rounded-lg  text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-white bg-[#017848] hover:bg-primary focus:bg-accentPrimary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-5 h-14 items-center justify-center mt-4 flex w-fit" href="#">
                                    Get started
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs