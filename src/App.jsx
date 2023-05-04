import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RecentPosts from "./components/RecentPosts/RecentPosts";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <RecentPosts />
      <Footer />
    </>
  );
};

export default App;
