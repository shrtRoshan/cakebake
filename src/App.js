import React from 'react';
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./Pages/ProductsPage";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';

function App() {
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration: 800,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar />
        <Hero />
        <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
            </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
