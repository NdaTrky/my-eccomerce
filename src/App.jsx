import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testComponent";
import PagesContainer from "./container/PagesContainer";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { register } from "swiper/element/bundle";
import HomePages from "./pages/HomePages";
import ShopPages from "./pages/ShopPages";
import Slider from "./components/ui/Slider";
import Brand from "./components/ui/Brand";

function App() {
  register();
  return (
    <Router>
      <div>
        <MyComponent />
        <ToastContainer />
        <Header />
        <PagesContainer>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/shop" element={<ShopPages />} />
          </Routes>
        </PagesContainer>
        <Brand/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;