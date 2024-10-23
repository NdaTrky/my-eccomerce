import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from '../ui/Button';

const sliderTitle = {
  title: ["GROCERIES DELIVERY"],
  text: "We know how large objects will act, but things on a small scale just do not act that way",
  sliderOne: "/s-s1.png",
  sliderTwo: "/s-s2.png",
};

function Slider() {
  return (
    <div className='font-bold'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        className='mt-5'
      >
        <SwiperSlide>
          <div>
            <img className="slider-img" src={sliderTitle.sliderOne} alt="sliderOne" />
            <div className='slider-content'>
              <h1 className='slider-title'>{sliderTitle.title}</h1>
              <p>{sliderTitle.text}</p>
              <Button size="default" variant="secondary">Start Now</Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img className="slider-img" src={sliderTitle.sliderTwo} alt="sliderTwo" />
            <div className='slider-content'>
              <h1 className="slider-title">{sliderTitle.title}</h1>
              <p>{sliderTitle.text}</p>
              <Button size="default" variant="secondary">Start Now</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
