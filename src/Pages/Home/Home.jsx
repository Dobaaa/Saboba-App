import React from "react";
import Nav from "../../Components/Nav/Nav";
import LandImg from "../../Assets/worker.png";
import "./home.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Paginationn from "./pagination/pagination ";

const Home = () => {
  // translate the content
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="section-one">
        <Nav />
        <div className="Landing flex justify-center ">
          <div className="container  pt-5 pb-5">
            <div className="row flex flex-col md:flex-row justify-center items-center ">
              <div className="basis-1/2 flex flex-col  items-center text-center">
                <div className="land-txt">
                  <div className="gradient-h4">
                    <h4>{t("welcome")}</h4>
                  </div>
                  <h1>Have you ever tried fix your House by Click</h1>
                </div>
                <div className="land-icon">
                  <div className="icons-row flex gap-4">
                    <div className="icon-one">
                      <i class="fa-solid fa-house"></i> 2 Months Trip to Swiss
                    </div>
                    <div className="icon-two">
                      <i class="fa-solid fa-screwdriver-wrench"></i> 2 Months
                      Trip to Swiss
                    </div>
                  </div>
                  <div className="icons-row flex gap-4">
                    <div className="icon-one">
                      <i class="fa-solid fa-location-dot"></i> 2 Months Trip to
                      Swiss
                    </div>
                    <div className="icon-two">
                      <i class="fa-solid fa-tablet-screen-button"></i> 2 Months
                      Trip to Swiss
                    </div>
                  </div>
                </div>
                <div className="land-btns flex gap-10 pt-3 mt-4 mb-4 md:mb-0 items-center">
                  <Link className="p-2 md:p-5  bg-[var(--seconed-color)] rounded-3xl ">
                    JOIN Saboba!
                  </Link>
                  <Link className="text-[var(--seconed-color)] font-bold">
                    see All Workers
                  </Link>
                </div>
              </div>
              <div className="basis-1/2">
                <img src={LandImg} alt="" className="Land-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*section two */}

      <div className="section-two">
        <div className="container">
          <h2>Our Services</h2>
          <Paginationn />
        </div>
      </div>
    </div>
  );
};

export default Home;
