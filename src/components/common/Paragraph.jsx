import React from 'react'

const Paragraph = ({ className, text }) => {
    return (
        <p className={`text-blue-900 text-sm sm:text-base md:text-xl leading-150 font-medium text-center mx-auto mt-2 sm:mt-3 md:mt-4 lg:mt-5 ${className}`}>{text}</p>
    )
}

export default Paragraph