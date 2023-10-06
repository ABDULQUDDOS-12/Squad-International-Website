import React from 'react'
import styles from './Index.module.css'
import Navbar from './Navbar/Index'
import FirstSlider from './1stSlider/Index'
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <FirstSlider />
    </div>
  )
}
export default Index