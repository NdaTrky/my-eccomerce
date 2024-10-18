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
  sliderOne: "https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jy8EcDtIEaRzkM2gqSGNt28~scpH8gemlPc621HL~fUoJgXbi-uVid51XfEPfYnN-KtodSwk3e91-qJTpRmPc~1HQkWNiYWIbeaZznnDi3Mk4fVrPGG6RTCguaEyfJO4wFU4hCHElnd1hdmhnlWKoSVyUSHlslC81XZFs6Pq-1VFHdRgqHdTA3mrMK-d2WBRCvYVyPLK2zs4NEUBm-gNDtNHI4qqsBAeG0HPcIVv9PfpoXGQDFnlb8GWkOi53ORvhkb2Htsm~aQIbZ9188NtSELTpjlCLEqBoxbdBO18XnN8KsD8ztwZISBJyxDUsoS1qZLtSrTRy4bwObV9c5y9cA__",
  sliderTwo: "https://melmagazine.com/wp-content/uploads/2020/09/travis_scott_mcdonalds_Cactus_Jack.jpg",
};

function Slider() {
  return (
    <nav className='font-bold'>
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
    </nav>
  );
}

export default Slider;
