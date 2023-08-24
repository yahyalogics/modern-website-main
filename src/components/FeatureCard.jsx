import React from 'react'
import styles from "./../styles"

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] feature-card`} >
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon"  className='w-[50%] h-[50%] object-contain' />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='text-white font-poppins font-semibold text-[18px] leading-[23.4px] mb-1'>
                {title}
            </h4>
            <p className='text-dimWhite font-poppins font-semibold text-[16px] leading-[24px]'>
                {content}
            </p>
        </div>
    </div>
)

export default FeatureCard