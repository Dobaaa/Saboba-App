import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopWorkers from "../components/TopWorkers";
import Banner from "../components/Banner";
import Chatbot from "../components/AiBot";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopWorkers />
      <Banner />
      <Chatbot />
    </div>
  );
};

export default Home;
