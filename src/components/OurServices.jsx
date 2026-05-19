import serviceIcon from "../../src/assets/banner/service.png";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
      isActive: false,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
      isActive: true,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      isActive: false,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      isActive: false,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
      isActive: false,
    },
    {
      id: 6,
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      isActive: false,
    },
  ];

  return (
    <div className="bg-[#033133] py-16 px-4 sm:px-6 lg:px-8 rounded-[32px] my-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed opacity-90">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 ${
              service.isActive
                ? "bg-[#C2EA36] text-[#033133]"
                : "bg-white text-[#033133]"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-[#E5F2FF] flex items-center justify-center mb-6 overflow-hidden">
              <img
                src={serviceIcon}
                alt={service.title}
                className="w-10 h-10 object-contain mix-blend-multiply"
              />
            </div>

            <h3 className="text-lg sm:text-xl font-bold mb-3 tracking-tight leading-snug">
              {service.title}
            </h3>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                service.isActive ? "text-[#033133]/80" : "text-gray-600"
              }`}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
