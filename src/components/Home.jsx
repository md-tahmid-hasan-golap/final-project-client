import Banner from "./Banner";
import BrandNew from "./BrandNew";
import HowitWorks from "./HowitWorks";
import MerchantCTA from "./MerchantCTA";
import OurServices from "./OurServices";
import ParcelTracking from "./ParcelTraking";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowitWorks></HowitWorks>
      <OurServices></OurServices>
      <BrandNew></BrandNew>
      <ParcelTracking></ParcelTracking>
      <MerchantCTA></MerchantCTA>
    </div>
  );
};

export default Home;
