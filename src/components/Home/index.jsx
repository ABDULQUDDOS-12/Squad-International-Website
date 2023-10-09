import React from 'react'
import styles from './Index.module.css'
import Navbar from './Navbar/Index'
import FirstSlider from './1stSlider/Index'
import SecondSlider from './2ndSlider/Index'
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <FirstSlider />
      <SecondSlider/>
    </div>
  )
}
export default Index