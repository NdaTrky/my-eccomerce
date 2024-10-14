import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testComponent";
import PagesContainer from "./container/PagesContainer";
import Header from "./layout/Header";
import {register } from "swiper/element/bundle";

function App() {
  register();
  return (
    <div>
      <MyComponent />
      <ToastContainer />
      <Header />
      <PagesContainer>
        
      </PagesContainer>
    </div>
  );
}

export default App;
