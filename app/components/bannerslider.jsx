"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './bannerslider.module.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const BannerSlider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className={styles.bannerSlider}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src="/banner/banner1.png" alt="Banner 1" className={styles.bannerImage} />
        </div>
        <div className={styles.slide}>a
          <img src="/banner/banner2.jpg" alt="Banner 2" className={styles.bannerImage} />
        </div>
        <div className={styles.slide}>
          <img src="/banner/banner3.jpg" alt="Banner 3" className={styles.bannerImage} />
        </div>
      </Slider>
    </div>
  );
}

export default BannerSlider;