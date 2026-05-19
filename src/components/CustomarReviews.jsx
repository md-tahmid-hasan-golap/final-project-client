import customar from "../../src/assets/banner/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { use } from "react";

const CustomarReviews = ({ reviews }) => {
  const reviewData = use(reviews);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10">
        <img
          src={customar}
          alt="Customer Review"
          className="mx-auto mb-4 object-contain max-w-full h-auto max-h-[100px]"
        />

        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2D2D2D] mb-4 tracking-tight">
            What our customers are sayings
          </h2>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>

      <Swiper
        loop={reviewData.length > 1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper pb-12"
      >
        {reviewData.map((singleReview) => (
          <SwiperSlide key={singleReview._id || singleReview.user_email}>
            <ReviewCard reviewData={singleReview} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomarReviews;
