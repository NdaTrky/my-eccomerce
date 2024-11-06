import { Link } from 'react-router-dom';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Redux store'dan veri almak için useSelector ve useDispatch'i içe aktar
import { logoutUser } from '../actions/userActions'; // logoutUser  eylemini içe aktar

// Ortak navbar linkleri
const navLinks = [
  { id: 0, to: "/", text: "Home" },
  { id: 1, to: "/shop", text: "Shop" },
  { id: 2, to: "/about", text: "About" },
  { id: 3, to: "/blog", text: "Blog" },
  { id: 4, to: "/contact", text: "Contact" },
];

function Header() {
  const dispatch = useDispatch(); // Dispatch fonksiyonunu al
  const user = useSelector((state) => state.client.user); // Kullanıcı bilgilerini Redux store'dan al

  const handleLogout = () => {
    dispatch(logoutUser ()); // Kullanıcı çıkış işlemini gerçekleştir
  };

  return (
    <header className="font-bold pt-2">
      {/* Mobil Navbar */}
      <div className="md:hidden">
        <div className="flex justify-between items-center">
          <Link className="text-2xl" to="/">Bandage</Link>
          <div className="flex items-center gap-5">
            {user ? (
              // Kullanıcı giriş yapmışsa
              <div className="flex items-center gap-2">
                <img 
                  src={user.gravatarURL} 
                  alt="Profil" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">{user.name}</span>
                <button onClick={handleLogout} className="text-sm text-red-500">Logout</button> {/* Çıkış butonu */}
              </div>
            ) : (
              // Kullanıcı giriş yapmamışsa
              <>
                <Link to="/login">Login</Link> / <Link to="/signup">Register</Link>
              </>
            )}
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
          {user ? ( // Kullanıcı bilgileri varsa göster
            <>
              <img src={user.gravatarURL} alt="Profil Resmi" className="w-8 h-8 rounded-full" /> {/* Gravatar resmi */}
              <span>{user.name}</span> {/* Kullanıcı adı */}
              <button onClick={handleLogout} className="text-sm text-red-500">Logout</button> {/* Çıkış butonu */}
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> / <Link to="/signup">Register</Link>
            </>
          )}
          <Link to="#"><i className="fa-regular fa-user"></i></Link>
          <Link to="#"><i className="fa-solid fa-magn ifying-glass"></i></Link>
          <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;