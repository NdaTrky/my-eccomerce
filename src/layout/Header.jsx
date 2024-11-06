import { Link } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

const navLinks = [
  { id: 0, to: "/", text: "Home" },
  { id: 1, to: "/shop", text: "Shop" },
  { id: 2, to: "/about", text: "About" },
  { id: 3, to: "/blog", text: "Blog" },
  { id: 4, to: "/contact", text: "Contact" },
];

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const groupedCategories = useMemo(() => {
    if (!categories) return null;
    return categories.reduce((acc, category) => {
      const gender = category.code.startsWith('k:') ? 'Kadın' : 'Erkek';
      if (!acc[gender]) acc[gender] = [];
      acc[gender].push(category);
      return acc;
    }, {});
  }, [categories]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleShopMouseEnter = () => {
    setIsShopMenuOpen(true);
  };

  const handleShopMouseLeave = () => {
    setIsShopMenuOpen(false);
  };

  return (
    <header className="font-bold pt-2">
      <div className="hidden md:flex justify-between items-center px-6">
        <Link className="text-2xl" to="/">Bandage</Link>
        <ul className="flex items-center gap-8 text-gray">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              {link.text === "Shop" ? (
                <div
                  className="relative"
                  onMouseEnter={handleShopMouseEnter}
                  onMouseLeave={handleShopMouseLeave}
                >
                  <Link to={link.to}>{link.text}</Link>
                  
                  {isShopMenuOpen && groupedCategories && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md mt-2 py-2 z-50">
                      {Object.entries(groupedCategories).map(([gender, categoryList]) => (
                        <div key={gender}>
                          <h3 className="px-4 py-2 font-semibold text-gray-800 capitalize">
                            {gender}
                          </h3>
                          {categoryList.map((category) => (
                            <Link
                              key={category.id}
                              to={`/shop/${gender.toLowerCase()}/${category.code.split(':')[1]}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsShopMenuOpen(false)}
                            >
                              {category.title}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={link.to}>{link.text}</Link>
              )}
            </li>
          ))}
        </ul>
        
        <div className="text-blue flex items-center gap-5">
          {user ? (
            <>
              <img src={user.gravatarURL} alt="Profil Resmi" className="w-8 h-8 rounded-full" />
              <span>{user.name}</span>
              <button onClick={handleLogout} className="text-sm text-red-500">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link> / <Link to="/signup">Register</Link>
            </>
          )}
          <Link to="#"><i className="fa-regular fa-user"></i></Link>
          <Link to="#"><i className="fa-solid fa-magnifying-glass"></i></Link>
          <Link to="#"><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;