import React from 'react'
import {features} from "./../constants"
import styles,  { layout } from "./../styles"
import Button from './Button'
import FeatureCard from './FeatureCard'

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle
        the money.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       We are Esteemed to Generate Revenue for our valuable clients , we make products that
       are competitive in market and have potential to make a revolutuion. We promise our full
       potential to our clients works.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {
        features && features.map( (feature,index) => (
          <FeatureCard key={feature.id}  {...feature} index={index} />
        ))
      }
    </div>



  </section>
)

export default Business