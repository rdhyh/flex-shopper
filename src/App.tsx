// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Route and Routes
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Categories from "./components/Categories"; // Import the Categories component
import Footer from "./components/Footer";
import Products from "./components/Products";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/categories" element={<Categories />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
