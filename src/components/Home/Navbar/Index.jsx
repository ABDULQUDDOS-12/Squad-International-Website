import React from 'react'
import styles from './Index.module.css'
import logo from '../../../images/Logo.png'
const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="" className={styles.logImage} />
      </div>
      <div className={styles.navItems}>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  )
}

export default Index