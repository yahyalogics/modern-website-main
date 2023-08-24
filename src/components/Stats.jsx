import React from 'react'
import styles from "./../styles"
import {stats} from "./../constants"

const Stats = () => (
  <section className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
    {
      stats && stats.map( (stat) => (
        <div key={stat.id} className='flex flex-1 justify-start items-center flex-row m-3'>
          <h4 className='text-white font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] '>{stat.value}</h4>
          <p className='text-gradient uppercase font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] ml-3'>{stat.title}</p>
        </div>
      ))
    }
  </section>
)

export default Stats