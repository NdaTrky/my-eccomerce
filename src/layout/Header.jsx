import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function Header() {
  const navLinks = [
    { href: "#", text: "Home" },
    { href: "#", text: "Shop" },
    { href: "#", text: "About" },
    { href: "#", text: "Blog" },
    { href: "#", text: "Contact" },
    { href: "#", text: "Pages" },
  ];

  return (
    <header className='font-bold'>
      {/* Mobile Navbar */}
      <div className="md:hidden"> 
        {/* Logo ve İkonlar */}
        <div className="flex justify-between items-center">

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
          <ul className="flex flex-col items-center text-gray">
            {navLinks.map((link) => (
              <li key={link.text} className="my-2">
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Web Navbar */}
      <div className="hidden md:flex justify-between items-center px-6">
        <a className="text-2xl" href="#">Bandage</a>
        <ul className="flex items-center gap-8 text-gray">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a href={link.href} className="hover:text-blue-500">{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="text-blue flex items-center gap-5">
          <a className="font-bold" href="#">Login / Register <i className="fa-regular fa-user"></i></a>
          <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
          <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>

      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className='my-6'
     
    >
      <SwiperSlide className='full-screen h-screen'>
        <img className="w-[100%] h-[600px] object-cover"
        src="https://s3-alpha-sig.figma.com/img/58e7/8626/57520fbcc340e0540da6a9164dc64c56?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jy8EcDtIEaRzkM2gqSGNt28~scpH8gemlPc621HL~fUoJgXbi-uVid51XfEPfYnN-KtodSwk3e91-qJTpRmPc~1HQkWNiYWIbeaZznnDi3Mk4fVrPGG6RTCguaEyfJO4wFU4hCHElnd1hdmhnlWKoSVyUSHlslC81XZFs6Pq-1VFHdRgqHdTA3mrMK-d2WBRCvYVyPLK2zs4NEUBm-gNDtNHI4qqsBAeG0HPcIVv9PfpoXGQDFnlb8GWkOi53ORvhkb2Htsm~aQIbZ9188NtSELTpjlCLEqBoxbdBO18XnN8KsD8ztwZISBJyxDUsoS1qZLtSrTRy4bwObV9c5y9cA__" alt="" />
      </SwiperSlide>
      
      

    </Swiper>
    </header>
  );
};
    
export default Header;
