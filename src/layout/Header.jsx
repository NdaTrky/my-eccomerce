import { Link } from 'react-router-dom';
import React from 'react';

// Ortak navbar linkleri
const navLinks = [
  { id: 0, to: "/", text: "Home" },
  { id: 1, to: "/shop", text: "Shop" }, // "/ShopPages" yerine "/shop" kullanın
  { id: 2, to: "/about", text: "About" },
  { id: 3, to: "/blog", text: "Blog" },
  { id: 4, to: "/contact", text: "Contact" },
  { id: 5, to: "/pages", text: "Pages" },
];

function Header() {
  return (
    <header>
      {/* Mobil Navbar */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <Link className="text-2xl" to="/">Bandage</Link>
          <div className="flex items-center gap-5">
            <Link to="#"><i className="fa-regular fa-user"></i></Link>
            <Link to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
            <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
            <Link to="#"><i className="fa-solid fa-bars"></i></Link>
          </div>
        </div>

        {/* Mobil Navigasyon Linkleri */}
        <div>
          <ul className="flex flex-col items-center text-gray">
            {navLinks.map((link) => (
              <li key={link.id} className="my-2">
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Web Navbar */}
      <div className="hidden md:flex justify-between items-center px-6">
        <Link className="text-2xl" to="/">Bandage</Link>
        <ul className="flex items-center gap-8 text-gray">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <div className="text-blue flex items-center gap-5">
          <Link to="#">Login / Register <i className="fa-regular fa-user"></i></Link>
          <Link to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
          <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;