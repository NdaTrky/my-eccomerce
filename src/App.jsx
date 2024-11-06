import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { register } from "swiper/element/bundle";
import HomePages from "./pages/HomePages";
import ShopPages from "./pages/ShopPages";
import Brand from "./components/ui/Brand";
import AboutPages from "./pages/AboutPages";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react"; // useState ekleyin
import { checkAndVerifyToken } from "./utils/auth";
import CategoryPage from "./pages/CategoryPage";
import { fetchCategories } from "./actions/productActions"; 

function App() {
  const dispatch = useDispatch();
  const fetchState = useSelector(state => state.product?.fetchState);
  const [isInitialized, setIsInitialized] = useState(false); // Yeni state

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await checkAndVerifyToken(dispatch);
        await dispatch(fetchCategories());
        console.log('Kategoriler yükleme başlatıldı');
      } catch (error) {
        console.error('Uygulama başlatma hatası:', error);
      } finally {
        setIsInitialized(true); // Başlatma işlemi tamamlandı
      }
    };

    initializeApp();
  }, [dispatch]);

  // Swiper kaydı
  register();
  
  // Başlatma işlemi tamamlanana kadar yükleniyor göster
  if (!isInitialized || fetchState === 'FETCHING') {
    return <div>Yükleniyor...</div>;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ToastContainer />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/shop" element={<ShopPages />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<TeamPage />} /> 
            <Route path="/about" element={<AboutPages/>} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/shop/:gender/:category" element={<CategoryPage />} />
          </Routes>
        </main>
        <Brand/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;