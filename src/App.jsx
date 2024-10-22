import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PagesContainer from "./container/PagesContainer";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { register } from "swiper/element/bundle";
import HomePages from "./pages/HomePages";
import ShopPages from "./pages/ShopPages";
import Slider from "./components/ui/Slider";
import Brand from "./components/ui/Brand";
import AboutPages from "./pages/AboutPages";
import ProductDetail from "./pages/ProductDetail";

//TODO : PagesContainer kullanımı olmamalı. 
function App() {
  register();
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ToastContainer />
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/shop" element={<ShopPages />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Brand/>
        <Footer />
      </div>
    </Router>
  );
}


export default App;