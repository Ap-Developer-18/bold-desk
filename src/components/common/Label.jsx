import React from 'react'

const Label = ({ text, className }) => {
    return (
        <p className={`text-dark-orange font-semibold text-base leading-150 uppercase ${className}`}>{text}</p>
    )
}

export default Label