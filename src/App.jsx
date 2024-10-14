import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./testComponent";
import PagesContainer from "./container/PagesContainer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <MyComponent />
      <ToastContainer />
      <PagesContainer>
        <Header />
      </PagesContainer>
    </div>
  );
}

export default App;
