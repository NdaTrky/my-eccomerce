import { Link } from 'react-router-dom';
import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser  } from '../actions/userActions';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  const groupedCategories = useMemo(() => {
    if (!categories || categories.length === 0) {
      return {};
    }
    
    return categories.reduce((acc, category) => {
      const genderName = category.gender === 'k' ? 'Kadın' : 'Erkek';
      
      if (!acc[genderName]) {
        acc[genderName] = [];
      }
      
      acc[genderName].push(category);
      
      return acc;
    }, {});
  }, [categories]);

  const handleLogout = () => {
    dispatch(logoutUser ());
  };

  return (
    <header className="font-bold pt-2 relative z-50">
      <div className="hidden md:flex justify-between items-center px-6 relative">
        <Link className="text-2xl" to="/">Bandage</Link>
        <ul className="flex items-center gap-8 text-gray">
          <li><Link to="/">Home</Link></li>
          <li className="relative group">
            <button
              onClick={() => setIsShopMenuOpen(!isShopMenuOpen)}
              className="flex items-center gap-1 py-2"
            >
              Shop
              <i className={`fas fa-chevron-${isShopMenuOpen ? 'up' : 'down'}`}></i>
            </button>
            
            {isShopMenuOpen && Object.keys(groupedCategories).length > 0 && (
              <div className="absolute top-full left-0 w-96 bg-white shadow-lg rounded-md mt-1 py-2 z-[1000]">
                {Object.entries(groupedCategories).map(([gender, genderCategories]) => (
                  <div key={gender} className="relative">
                    <div className="px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 cursor-pointer">
                      {gender}
                    </div>
                    <div className="pl-4 grid grid-cols-2 gap-2">
                      {genderCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/shop/${gender.toLowerCase()}/${cat.code.split(':')[1]}`}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsShopMenuOpen(false)}
                        >
                          <img 
                            src={cat.img}
                            alt={cat.title}
                            className="w-8 h-8 object-cover rounded"
                          />
                          <span>{cat.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
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