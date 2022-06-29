import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Error404 from './pages/Error404';
import Header from './layout/Header'
import Footer from './layout/Footer'
import './styles/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/a-propos" element={<About />}/>
          <Route path="/location/:id" element={<Housing />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
