import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testComponent";
import PagesContainer from "./container/PagesContainer";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";
import {register } from "swiper/element/bundle";
import HomePages from "./pages/HomePages";


function App() {
  register();
  return (
    <div>
      <MyComponent />
      <ToastContainer />
      <Header />
      <PagesContainer>
      <PageContent/>
      <HomePages/>
      </PagesContainer>
      <Footer/>
      
    </div>
  );
}

export default App;
