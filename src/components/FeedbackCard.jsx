import React from 'react'
import { quotes  } from './../assets'

const FeedbackCard = ({ content, name, title, img}) => (
  <div className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
    <img src={quotes} alt="double quote" className='w-[42.6px] h-[27.6px] object-contain' />
    <p className='text-white font-poppins font-normal text-[18px] leading-[32px] my-10'>
      {content}
    </p>
    <div className='flex flex-row '>
      <img src={img} alt={name} className="w-[48px] rounded-full"  />
      <div className='flex flex-col ml-4'>
        <h4 className='text-white font-poppins font-semibold text-[20px] leading-[32px]'>{name}</h4>
        <p className='text-dimWhite font-poppins font-normal text-[16px] leading-[24px]'>{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCard