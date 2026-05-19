import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import brand1 from "../../src/assets/brands/amazon.png";
import brand2 from "../../src/assets/brands/amazon_vector.png";
import brand3 from "../../src/assets/brands/casio.png";
import brand4 from "../../src/assets/brands/moonstar.png";
import brand5 from "../../src/assets/brands/randstad.png";
import brand6 from "../../src/assets/brands/star.png";
import brand7 from "../../src/assets/brands/start_people.png";

import { Autoplay, Pagination } from "swiper/modules";

const BrandNew = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2D2D2D] mb-10">
        We've helped thousands of sales teams
      </h2>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper pb-12"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="max-h-full max-w-[80%] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandNew;
