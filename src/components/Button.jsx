import React from 'react'

const Button = ({styles}) => (
  <button type='button' className={` text-primary bg-blue-gradient py-4 px-6 font-poppins font-medium text-[18px] rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
)

export default Button