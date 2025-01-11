import React from "react";
import Nav from "../../Components/Nav/Nav";
import LandImg from "../../Assets/worker.png";
import "./home.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Paginationn from "./pagination/pagination ";
import MobileImg from "../../Assets/mobile.png";
import Reviews from "./Reviews/Reviews";
import Products from "./Products/Products";
const Home = () => {
  // translate the content
  const { t, i18n } = useTranslation();

  return (
    <div className="sections-parent">
      {/*section one */}
      <div className="section-one">
        <Nav />
        <div className="Landing flex justify-center pt-6 ">
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

      <div className="section-two pt-12">
        <div className="container mt-5">
          <h2 className="text-center pt-5 pb-5 text-6xl">Our Services</h2>
          <Paginationn />
        </div>
      </div>
      {/*section three */}
      <div className="why-saboba flex  justify-center items-center ">
        <div className="container flex  items-center justify-center ">
          <div className="why-saboba-txt basis-1/2 text-">
            <div className="txt-parent w-2/3 ml-auto ">
              <h2 className="fw-bold text-2xl pb-5">
                Why Choose a Saboba App?
              </h2>
              <div className="why-txt-boxexs">
                <div className="why-txt-box flex items-center  gap-4 ">
                  <p>
                    This feature allows users to get an accurate estimate of the
                    cost of the requested service before placing an order. It
                    helps them make informed decisions based on prior knowledge
                    of costs and available budget. This facilitates better
                    financial planning and avoids unwanted surprises when
                    receiving the bill.
                  </p>
                  <i class="fa-solid fa-hand-holding-dollar"></i>
                </div>
                <div className="why-txt-box flex items-center  gap-4">
                  <p>
                    The app enables users to easily and quickly access handyman
                    services without the need to manually search for or contact
                    technicians. With this feature, users can place their
                    requests quickly and then wait for the technicians to arrive
                    directly at their location, saving them the time and effort
                    required to manually search and coordinate with handymen.
                  </p>
                  <i class="fa-solid fa-business-time"></i>
                </div>
                <div className="why-txt-box flex items-center gap-4">
                  <p>
                    The app ensures a seamless and user-friendly experience. The
                    user interface is designed to be simple and intuitive,
                    allowing users to submit requests and specify their
                    requirements effortlessly. Thanks to this feature, users can
                    quickly access all the available services and features
                    without any technical difficulties, making the handyman
                    request process comfortable and straightforward.
                  </p>
                  <i class="fa-solid fa-house-user"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="why-saboba-img basis-1/2 flex ">
            <img src={MobileImg} alt="" className="w-[500px]" />
          </div>
        </div>
      </div>
      {/*section four */}
      <div className="reviews">
        <div className="container">
          <h2 className="text-center pt-4 text-3xl">Reviews</h2>
          <Reviews />
        </div>
      </div>
      {/*section five */}
      <div className="products flex justify-center pt-5 pb-5">
        <div className="container flex justify-center">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Home;
