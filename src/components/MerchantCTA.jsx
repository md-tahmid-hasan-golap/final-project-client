import React from "react";
import merchantIllustration from "../../src/assets/banner/location-merchant.png";

const MerchantCTA = () => {
  return (
    <div className="bg-[#033133] rounded-[32px] p-8 sm:p-12 lg:p-16 my-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 left-0 h-20 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 xl:col-span-8 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
            Merchant and Customer Satisfaction{" "}
            <br className="hidden sm:inline" />
            is Our First Priority
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8 max-w-2xl opacity-90">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. ZapShift courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <button className="bg-[#C2EA36] text-[#033133] hover:bg-[#b3d92b] font-bold text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300 shadow-sm">
              Become a Merchant
            </button>

            <button className="border-2 border-[#C2EA36]/40 text-[#C2EA36] hover:bg-[#C2EA36]/10 font-medium text-sm sm:text-base px-6 py-3 rounded-full transition-all duration-300">
              Earn with ZapShift Courier
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end w-full">
          <img
            src={merchantIllustration}
            alt="Merchant and Customer Satisfaction Illustration"
            className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MerchantCTA;
