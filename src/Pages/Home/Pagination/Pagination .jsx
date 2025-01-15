import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import { EffectCoverflow, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "./pagination.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ServiceData } from "../../../Data";
import Card from "../../../Components/Cards/Card";
import { Link } from "react-router-dom";

const Paginationn = () => {
  const Services = ServiceData.map((i) => {
    return (
      <SwiperSlide>
        <Link to="workers">
          <Card key={i.id} img={i.img} category={i.category} desc={i.desc} />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div>{Services}</div>
      </Swiper>
    </>
  );
};

export default Paginationn;
