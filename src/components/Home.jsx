import Banner from "./Banner";
import BrandNew from "./BrandNew";
import CustomarReviews from "./CustomarReviews";
import HowitWorks from "./HowitWorks";
import MerchantCTA from "./MerchantCTA";
import OurServices from "./OurServices";
import ParcelTracking from "./ParcelTraking";

const reviesPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowitWorks></HowitWorks>
      <OurServices></OurServices>
      <BrandNew></BrandNew>
      <ParcelTracking></ParcelTracking>
      <MerchantCTA></MerchantCTA>
      <CustomarReviews reviews={reviesPromise}></CustomarReviews>
    </div>
  );
};

export default Home;
