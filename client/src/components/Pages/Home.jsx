import React from "react";
import Announcement from "../Layouts/Announcements";
import Categories from "../Layouts/Categories";
import Navbar from "../Layouts/Navbar";
import Slider from "../Layouts/Slider";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
