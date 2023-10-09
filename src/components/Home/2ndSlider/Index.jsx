import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Index.module.css'
import Slider from 'react-slick';
import image1 from '../../../images/backgroundimage4.jpeg'
import image2 from '../../../images/backgroundimage5.jpeg'
import image3 from '../../../images/backgroundimage6.jpeg'
const Index = () => {
    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    };
    return (
        <div className={styles.mainContainer}>
            <div className={styles.backgroundSlider}>
                <Slider {...sliderSettings}>
                    <div className={styles.slide} >
                        <img src={image1} alt="Slide 1" />
                        <div className={styles.slideText}>
                            <h2>Energize The Core</h2>
                            <p>Digital Framework to deliver design-led experiences for customer delight</p>
                            <button className={styles.button1}>Explore</button>
                            <h2>Case Studies</h2>
                            <p>A top US streamlined its buisness processes through automation</p>
                            <p>Data Analytics helped an american telecom giant rein in spend leakages in sourcing and procurement</p>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img src={image2} alt="Slide 2" />
                        <div className={styles.slideText}>
                            <h2>Agile Digital at Scale</h2>
                            <p>Leveraging new technologies to enhance buisness performance</p>
                            <button className={styles.button2}>Read More</button>
                            <h2>Case Studies</h2>
                            <p>The critical role of digital transformation in HRO function</p>
                            <br />
                            <p>A pharma giant implemented AI to redefine tail spend to reach higher levels in procurement</p>
                        </div>
                    </div>
                    <div className={styles.slide}>
                        <img src={image3} alt="Slide 2" />
                        <div className={styles.slideText}>
                            <h2>Always On learning</h2>
                            <p>Beskilling workforce by leveraging digital platforms</p>
                            <button className={styles.button2}>Read More</button>
                            <h2>Case Studies</h2>
                            <p>Managing social media listening for a US-based customer electronics giant</p>
                            <p>Seamless workplace experience is key to happy employees</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Index