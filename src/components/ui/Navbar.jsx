import React from 'react';

// Ortak navbar linkleri
const navLinks = [
  { id:0, href: "#", text: "Home" },
  { id:1, href: "#", text: "Shop" },
  { id:2, href: "#", text: "About" },
  { id:3, href: "#", text: "Blog" },
  { id:4, href: "#", text: "Contact" },
  { id:5, href: "#", text: "Pages" },
];

function Navbar() {
  return (
    <nav>
      {/* Mobil Navbar */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <a className="text-2xl" href="#">Bandage</a>
          <div className="flex items-center gap-5">
            <a href="#"><i className="fa-regular fa-user"></i></a>
            <a href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
            <a href="#"><i className="fa-solid fa-bars"></i></a>
          </div>
        </div>

        {/* Mobil Navigasyon Linkleri */}
        <div>
          <ul className="flex flex-col items-center text-gray">
            {navLinks.map((link) => (
              <li key={link.id} className="my-2">
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
            <li key={link.id}>
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
    </nav>
  );
}

export default Navbar;
