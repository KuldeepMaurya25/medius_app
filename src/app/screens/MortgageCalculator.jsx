"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { Slider, Input, Select, SelectItem } from '../lib/heroui'
import Image from 'next/image'

const MortgageCalculator = () => {
    const [value, setValue] = useState(143000);
    const [stateObj, setStateObj] = useState({
        zipCode: '201301',
        downPayment: 14300 / 2,
        dpPercent: 20,
        rate: 6.5,
        timeLabel: "30 years",
        time: 30,
        homePrice: 143000,
        monthlyPay: Math.round(((143000 - (14300 / 2)) * ((6.5 / 1200) * (Math.pow((1 + (6.5 / 1200)), 30 * 12)))) / ((Math.pow((1 + (6.5 / 1200)), 30 * 12)) - 1))

    })

    const handleHomePriceChange = (val) => {

        let monthlyPay = calculateMonthlyPay(val - ((val * stateObj.dpPercent) / 100), stateObj.rate, stateObj.time);

        setStateObj({ ...stateObj, monthlyPay: monthlyPay, downPayment: Math.round((val * stateObj.dpPercent) / 100), homePrice: val });


    }
    const handleDownPaymentChange = (val) => {
        if (val > stateObj.homePrice)
            return;
        let monthlyPay = calculateMonthlyPay(stateObj.homePrice - val, stateObj.rate, stateObj.time);

        setStateObj({ ...stateObj, monthlyPay: monthlyPay, downPayment: val, dpPercent: val ? Math.round((val * 100) / stateObj.homePrice) : 0 });

    }

    const handleDpPercentChange = (val) => {

        let monthlyPay = calculateMonthlyPay(stateObj.homePrice - ((val * stateObj.homePrice) / 100), stateObj.rate, stateObj.time);

        setStateObj({ ...stateObj, monthlyPay: monthlyPay, downPayment: Math.round((val * stateObj.homePrice) / 100), dpPercent: val });

    }

    const handleRateChange = (val) => {

        if (val > 15)
            return;
        let monthlyPay = calculateMonthlyPay(stateObj.homePrice - stateObj.downPayment, val, stateObj.time);
        setStateObj({ ...stateObj, monthlyPay: monthlyPay, rate: val });

    }
    const handleTimeChange = (timeLabel, val) => {

        let monthlyPay = calculateMonthlyPay(stateObj.homePrice - stateObj.downPayment, stateObj.rate, val);
        setStateObj({ ...stateObj, monthlyPay: monthlyPay, time: val, timeLabel: timeLabel });

    }

    const calculateMonthlyPay = (principle, rate, time) => {
        let monthlyPay = Math.round(((principle) * ((rate / 1200) * (Math.pow((1 + (rate / 1200)), time * 12)))) / ((Math.pow((1 + (rate / 1200)), time * 12)) - 1));
        return monthlyPay;
    }

    return (
        <div>
            <section className='bg-[#f0f7f1] py-16'>
                <div className='m-auto max-w-screen-2xl justify-between px-6 md:px-14'>
                    <div className='flex flex-col justify-between gap-x-4'>
                        <div className='flex-1'>
                            <h1 className='font-[640] text-textPrimary  m-0 p-0 w-auto text-3xl md:text-5xl'>
                                Mortgage calculator
                            </h1>
                            <p className="font-normal  m-0 p-0 text-left text-base my-4 pb-4 text-textSecondary lg:max-w-3xl">
                                Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.

                            </p>
                            <div className='mb-4 flex w-full items-end gap-3'>
                                <div className='grow'>
                                    <div className='w-full max-w-[300px]'>
                                        <label className="leading-3 m-0 p-0 text-left text-textPrimary font-bold mb-3 block text-sm md:text-base" htmlFor="home-price">
                                            Home price
                                        </label>
                                        <Input label="" type="text" variant="bordered" classNames={{ inputWrapper: "border-[#a4a8a4] focus:border-red-300 border bg-white h-20", input: "text-textPrimary font-bold  text-3xl" }} value={stateObj.homePrice}
                                            startContent={
                                                <div className="pointer-events-none flex items-center">
                                                    <span className="text-textPrimary text-3xl font-bold">$</span>
                                                </div>
                                            }
                                            inputMode='numeric'
                                            pattern="[0-9]*"
                                            onInput={(e) => {
                                                e.target.value = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
                                            }}
                                            onValueChange={handleHomePriceChange}
                                        />

                                    </div>
                                </div>
                                <div className="grow">
                                    <div className="w-full max-w-[300px]">
                                        <p className=" m-0 p-0 text-left text-textPrimary font-bold mb-3 block text-sm md:text-base">
                                            Monthly payment
                                        </p>
                                        <p className=" m-0 p-0 text-left my-4 flex  items-baseline overflow-hidden text-2xl font-bold text-textPrimary md:my-0 lg:text-3xl" data-qa="monthly-payment">
                                            ${stateObj.monthlyPay || '0'}/mo
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <Link className="rounded-lg  text-base text-center font-bold select-none outline-none transition duration-300 ease-out focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-white bg-[#017848] hover:bg-primary focus:bg-primary focus:shadow-accentBorderPrimary active:bg-primary px-5 h-16 w-auto inline-flex items-center justify-center min-w-[220px]"
                                        href="#">
                                        Get pre-approved
                                    </Link>
                                </div>
                            </div>
                            <div className="relative mx-lg mt-8 mb-lg">
                                <Slider
                                    className="max-w-full "
                                    defaultValue={stateObj.homePrice}
                                    onChange={(val) => handleHomePriceChange(val)}
                                    label=""
                                    maxValue={300000}
                                    value={stateObj.homePrice}
                                    size='sm'
                                    minValue={50000}
                                    step={100}
                                />
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-6 mt-10">
                                <Input label="Zip code"
                                    inputMode='numeric'
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
                                    }}
                                    type="text" variant="bordered" classNames={{ inputWrapper: "border-[#a4a8a4] focus:border-red-300 border bg-white h-16" }} value={stateObj.zipCode} />
                                <Input label="Down payment" type="text" variant="bordered" classNames={{ inputWrapper: "border-[#a4a8a4] focus:border-red-300 border bg-white h-16" }} value={stateObj.downPayment}
                                    startContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="">$</span>
                                        </div>
                                    }
                                    inputMode='numeric'
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
                                    }}
                                    onValueChange={(val) => handleDownPaymentChange(val)}
                                />
                                <Input label="Down payment percentage" type="text" variant="bordered" classNames={{ inputWrapper: "border-[#a4a8a4] focus:border-red-300 border bg-white h-16" }} value={stateObj.dpPercent}
                                    endContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="">%</span>
                                        </div>
                                    }
                                    inputMode='numeric'
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
                                    }}
                                    onValueChange={(val) => handleDpPercentChange(val)}
                                />
                                <Input label="Intrest rate" type="text" variant="bordered" classNames={{ inputWrapper: "border-[#a4a8a4] focus:border-red-300 border bg-white h-16" }} value={stateObj.rate}
                                    endContent={
                                        <div className="pointer-events-none flex items-center">
                                            <span className="">%</span>
                                        </div>
                                    }
                                    inputMode='numeric'
                                    pattern="[0-9]*"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, ""); // Removes non-numeric characters
                                    }}
                                    onValueChange={(val) => handleRateChange(val)}
                                />
                                <Select
                                    classNames={{ trigger: "border-[#a4a8a4] focus:border-red-300 border bg-white h-16" }}
                                    label="Length of loan"

                                    selectedKeys={[stateObj.timeLabel]}
                                    variant="bordered"
                                    onChange={(e) => handleTimeChange(e.target.value, Number(e.target.value.split(" ")[0]))}

                                >
                                    {[{ key: 20, label: "20 years" }, { key: 30, label: "30 years" }, { key: 15, label: "15 years" }].map((animal) => (
                                        <SelectItem key={animal.label}>{animal.label}</SelectItem>
                                    ))}
                                </Select>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section className='bg-[#fffdfa] py-16'>
                <hr className="border-[#c7c9c5] pb-6 my-0 border-t-1"></hr>
                <div className='px-6 md:px-14'>


                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 tracking-normal w-auto text-xl md:text-2xl md:tracking-tight">
                        How to calculate monthly mortgage payments?

                    </h2>
                    <p className="font-normal leading-body my-5 p-0 text-left text-textPrimary text-base">
                        Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
                    <h3 className="font-bold text-textPrimary leading-heading my-5 p-0 tracking-normal w-auto text-lg md:text-xl">
                        Formula for calculating monthly mortgage payments</h3>
                    <p className="font-normal leading-body my-50 p-0 text-left text-textPrimary text-base">
                        The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
                    <div className='flex flex-col items-center'>
                        <div className='mt-3'>

                            <Image src={`/monthly-mortgage-payments-formula.jpg`} width={780} height={221} alt={'monthly-mortgage-payments-formula.jpg'} loading='lazy'></Image>

                        </div>
                        <div>
                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-3">Where:</p>
                            <ul className="ml-10 list-disc">
                                <li>
                                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm"><b>M</b> is monthly mortgage payments</p></li><li><p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm"><b>P</b> is the principal loan amount (the amount you borrow)</p></li>
                                <li><p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm"><b>r</b> is the monthly interest rate<br />(annual interest rate divided by 12 and expressed as a decimal)<br /><small>For example:<br />if the annual interest rate is <b>5%</b>,<br /> the monthly rate would be <b>0.05/12</b> = .00417, or <b>.417%</b></small>
                                </p></li>
                                <li><p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-sm"><b>n</b> is the total number of payments in months<br /><small>For example:<br />for a 30-year loan, n = 30×12 = <b>360</b> months
                                </small></p></li>
                            </ul>
                            <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base my-2">Here’s a simple example:</p>
                            <Image src={`/monthly-mortgage-payments-example.jpg`} width={780} height={221} alt={'monthly-mortgage-payments-example.jpg'} loading='lazy'></Image>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MortgageCalculator