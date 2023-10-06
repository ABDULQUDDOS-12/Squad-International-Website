import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Index.module.css'
import Slider from 'react-slick';
import image1 from '../../../images/background image.jpeg'
import image2 from '../../../images/backgroundimage2.jpeg'
const Index = () => {

    
const sliderSettings = {
    dots: true,
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
                        <h2>Making Organizations Come Alive, with live Enterprise</h2>
                        <button className={styles.button1}>Explore</button>
                    </div>
                </div>
                <div className={styles.slide}>
                    <img src={image2} alt="Slide 2" />
                    <div className={styles.slideText}>
                        <h2>EGG - is an Opportunity-Report 2022-23</h2>
                        <button className={styles.button2}>Read More</button>
                    </div>
                </div>
            </Slider>
        </div>
    </div>
)
}

export default Index