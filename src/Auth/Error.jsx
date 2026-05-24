import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F2F4F7] flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
        {/* Error Badge / Visual */}
        <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className="text-7xl font-extrabold text-[#033133] tracking-tight mb-2">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          Oops! The page you are looking for doesn't exist or has been moved
          under ZapShift.
        </p>

        {/* Action Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-[#C2EA36] hover:bg-[#b3d92b] text-[#033133] font-bold text-sm py-3 px-6 rounded-xl transition-all duration-200 shadow-sm cursor-pointer"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
