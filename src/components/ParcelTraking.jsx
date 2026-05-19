import trackingImg from "../../src/assets/banner/live-tracking.png";
import safeDeliveryImg from "../../src/assets/banner/safe-delivery.png";

const ParcelTracking = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      img: trackingImg,
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      img: safeDeliveryImg,
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      img: safeDeliveryImg,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col gap-6">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="bg-[#F7F8FA] rounded-[24px] p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 border border-gray-100/50"
        >
          <div className="w-full md:w-1/4 flex justify-center items-center max-w-[180px] md:max-w-none">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-auto object-contain max-h-[120px]"
            />
          </div>

          <div className="hidden md:block h-20 border-l-2 border-dotted border-gray-300"></div>

          <div className="w-full md:w-3/4 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#033133] mb-3 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-3xl">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParcelTracking;
