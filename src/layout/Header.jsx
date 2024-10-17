import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from '../components/ui/Button';



const navLinks = [
  { id:0, href: "#", text: "Home" },
  { id:1, href: "#", text: "Shop" },
  { id:2, href: "#", text: "About" },
  { id:3, href: "#", text: "Blog" },
  { id:4, href: "#", text: "Contact" },
  { id:5, href: "#", text: "Pages" },
];
 

const sliderTitle = {
  title: ["GROCERIES DELIVERY"],
  text: "We know how large objects will act, but things on a small scale just do not act that way",
  sliderOne: "https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jy8EcDtIEaRzkM2gqSGNt28~scpH8gemlPc621HL~fUoJgXbi-uVid51XfEPfYnN-KtodSwk3e91-qJTpRmPc~1HQkWNiYWIbeaZznnDi3Mk4fVrPGG6RTCguaEyfJO4wFU4hCHElnd1hdmhnlWKoSVyUSHlslC81XZFs6Pq-1VFHdRgqHdTA3mrMK-d2WBRCvYVyPLK2zs4NEUBm-gNDtNHI4qqsBAeG0HPcIVv9PfpoXGQDFnlb8GWkOi53ORvhkb2Htsm~aQIbZ9188NtSELTpjlCLEqBoxbdBO18XnN8KsD8ztwZISBJyxDUsoS1qZLtSrTRy4bwObV9c5y9cA__",
  sliderTwo: "https://melmagazine.com/wp-content/uploads/2020/09/travis_scott_mcdonalds_Cactus_Jack.jpg",
}

function Header() {
  return (
    <header className='font-bold'>

      <div className="md:hidden"> {/* Bu kısım orta/üst boyutlarda gizlenir. Yani, mobil uyumluluk için kullanılır. */}
         <div className="flex justify-between items-center"> {/* Mobil başlıkta logo ve ikonları düzenlemek için Flexbox kullandım. */}
          <a className="text-2xl" href="#">Bandage</a>
          
          <div className="flex items-center gap-5">
            <a href="#"><i className="fa-regular fa-user"></i></a>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            <a href="#"><i className="fa-solid fa-bars"></i></a>
          </div>
        </div>

        {/* Navigasyon Linkleri (Dikey Liste) */}
        <div>
          <ul className="flex flex-col items-center text-gray"> {/* Mobil görünümde navbarların dikey olarak hizalanmasını sağlar.*/}
            {navLinks.map((link) => (
              <li key={link.id} className="my-2">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Web Navbar */}
      <div className="hidden md:flex justify-between items-center px-6"> {/*Bu kısım orta ve üst boyutlarda görünür olacak web navigasyon barını içerir. */}

        <a className="text-2xl" href="#">Bandage</a>

        <ul className="flex items-center gap-8 text-gray"> {/* Navigasyon bağlantılarını yatay olarak düzenler. */}
          {navLinks.map((link) => (
            <li key={link.text}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="text-blue flex items-center gap-5">
          <a href="#">Login / Register <i className="fa-regular fa-user"></i></a>
          <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000 }}
      className='my-5'
     
    >
      <SwiperSlide>
      <div>
        <img className="slider-img"
        src={sliderTitle.sliderOne} 
        alt="sliderOne" />
        <div className='slider-content'>
        <h1 className='slider-title'>{sliderTitle.title}</h1>
        <p>{sliderTitle.text}</p>
        <Button size="default" variant="secondary">Start Now</Button>
        </div>
        </div>

      </SwiperSlide>
      
      <SwiperSlide>
        <div>
        <img className="slider-img"
        src={sliderTitle.sliderTwo}
        alt="sliderTwo" />
        <div className='slider-content'>
        <h1 className="slider-title">{sliderTitle.title}</h1>
        <p>{sliderTitle.text}</p>
        <Button size="default" variant="secondary">Start Now</Button>
        </div>
        </div>
        </SwiperSlide>

    </Swiper>
    </header>
  );
};
    
export default Header;
