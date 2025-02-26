"use client"

import React, { useState } from 'react'

const BorderButton = ({ item, isBordered, onClick }) => {
    const [imageName, setImageName] = useState('Arian');
    const handleClick = (item) => {
        setImageName(item);
        onClick(item);
    }
    return (
        <button
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal 
                                    disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 border hover:shadow-secondary
                                     hover:border-secondary hover:shadow-[0_0_0_4px_inset] hover:text-primary h-12 px-6 py-3 w-auto
                                      ${isBordered ? 'shadow-secondary border-secondary shadow-[0_0_0_4px_inset] text-primary' : ''} `}
            onClick={() => handleClick(item)} >
            {item?.replace('_'," ")}
        </button>
    )
}

export default BorderButton