import React from 'react'
import styles from './styles'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonial, Client, CTA, Footer } from './components'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
   
    {/* Navbar Section */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* Hero Section */}
    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>


    {/* Home Page Section */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing /> 
        <CardDeal /> 
        <Testimonial /> 
        <Client /> 
        <CTA /> 
        <Footer />
      </div>
    </div>
  </div>
)

export default App