import bookingCar from "../../src/assets/banner/bookingIcon.png";

const HowitWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Place Order",
      desc: "Easily book your delivery through our platform with just a few clicks from anywhere.",
    },
    {
      id: 2,
      title: "Fast Pickup",
      desc: "Our dedicated rider picks up your package right from your doorstep without any delay.",
    },
    {
      id: 3,
      title: "Safe Sorting",
      desc: "Your packages are carefully sorted and handled in our secure local delivery hubs.",
    },
    {
      id: 4,
      title: "On-Time Delivery",
      desc: "From personal packages to business shipments — we deliver safely on time, every time.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-extrabold  text-[#2D2D2D] mb-12 tracking-tight">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-[#F3FCE2] rounded-full mb-5">
              <img
                src={bookingCar}
                alt={step.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {step.title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowitWorks;
