import React from 'react'

const Heading = ({ text, className }) => {
    return (
        <h2 className={`text-3xl md:text-4xl lg:text-5xl leading-125 font-semibold text-dark-thick mt-1 md:mt-2 ${className}`}>{text}</h2>
    )
}

export default Heading