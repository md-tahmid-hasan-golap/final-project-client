import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Banner1 from "../../src/assets/banner/banner1.png";
import Banner2 from "../../src/assets/banner/banner2.png";
import Banner3 from "../../src/assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className="w-full my-7">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <img
            src={Banner1}
            alt="Banner 1"
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Banner2}
            alt="Banner 2"
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={Banner3}
            alt="Banner 3"
            className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
