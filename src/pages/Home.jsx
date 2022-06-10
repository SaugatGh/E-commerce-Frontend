import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="container">
      <Announcement />
      <Navbar />
      <Slider />

      <Categories />
      <div style={{ textAlign: "center" }}>
        <h2> TRENDING OFFERS</h2>
      </div>

      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
