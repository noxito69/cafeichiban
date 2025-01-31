
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import AboutUs from './pages/About.tsx';
import CoffeTypes from './pages/CoffeeTypes.tsx';

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/types" element={<CoffeTypes />} />
      
    </Routes>

  </BrowserRouter>

)
