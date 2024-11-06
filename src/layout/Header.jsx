import { Link } from 'react-router-dom';
import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.client.user);
  const categories = useSelector((state) => state.product.categories);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  useEffect(() => {
    console.log("Categories in Header:", categories);
  }, [categories]);

  // Kategorileri cinsiyet bazında grupla
  const groupedCategories = useMemo(() => {
    if (!categories || categories.length === 0) {
      console.log("No categories available");
      return {};
    }
    
    return categories.reduce((acc, category) => {
      // Kategori kodunu parçala (örn: "k:tisort" -> { gender: "k", category: "tisort" })
      const [gender, categoryName] = category.code.split(':');
      
      // Cinsiyet kodunu tam isme çevir
      const genderName = gender === 'k' ? 'Kadın' : 'Erkek';
      
      // Eğer bu cinsiyet için array yoksa oluştur
      if (!acc[genderName]) {
        acc[genderName] = [];
      }
      
      // Kategoriyi ilgili cinsiyet array'ine ekle
      acc[genderName].push({
        ...category,
        categoryName: categoryName // URL için kullanılacak kategori adı
      });
      
      return acc;
    }, {});
  }, [categories]);

  useEffect(() => {
    console.log("Grouped Categories:", groupedCategories);
  }, [groupedCategories]);

  const handleLogout = () => {
    dispatch(logoutUser());
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
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md mt-1 py-2 z-[1000]">
                {Object.entries(groupedCategories).map(([gender, genderCategories]) => (
                  <div key={gender} className="relative">
                    <div className="px-4 py-2 font-semibold text-gray-800 hover:bg-gray-100 cursor-pointer">
                      {gender}
                    </div>
                    <div className="pl-4">
                      {genderCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/shop/${gender.toLowerCase()}/${cat.categoryName}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsShopMenuOpen(false)}
                        >
                          {cat.title}
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