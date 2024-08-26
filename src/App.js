import { useEffect, useState } from "react";
import './App.css'
import HomePage from "./pages/HomePage";
import HeaderComponent from "./components/HeaderComponent";


function App() {

  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <HeaderComponent />
      <HomePage />
      {showButton && <button
        className="btnToTop"
        onClick={scrollToTop}
      ><i className="fa-solid fa-angle-up"></i></button>}
    </div>
  );
}

export default App;
