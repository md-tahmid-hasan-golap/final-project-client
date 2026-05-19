import Logo from "../components/Logo";
import { Outlet } from "react-router";
import authImg from "../../src/assets/banner/authImage.png";

const AuthLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto">
        <Logo />
      </div>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">
        <div className="w-full lg:col-span-6 flex justify-center items-center order-2 lg:order-1">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>

        <div className="w-full lg:col-span-6 flex justify-center items-center order-1 lg:order-2">
          <img
            src={authImg}
            alt="Authentication Illustration"
            className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
