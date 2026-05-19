const ReviewCard = ({ reviewData }) => {
  const {
    userName,
    user_photoURL,
    review: userReview,
    designation,
  } = reviewData;

  return (
    <div className="bg-[#F7F8FA] rounded-[24px] p-6 sm:p-8 border border-gray-100 max-w-xl mx-auto flex flex-col justify-between min-h-[250px] shadow-sm select-none">
      <div>
        <div className="text-[#C2EA36] text-5xl font-serif leading-none h-6 mb-2">
          “
        </div>

        <p className="text-[#2D2D2D]/80 text-sm sm:text-base leading-relaxed font-normal">
          {userReview ||
            "Great service! Delivered my parcels right on time without any hassle."}
        </p>
      </div>

      <div className="w-full border-t-2 border-dotted border-gray-200 my-5"></div>

      <div className="flex items-center gap-4">
        {user_photoURL ? (
          <img
            src={user_photoURL}
            alt={userName}
            className="w-12 h-12 rounded-full object-cover bg-[#033133]"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#033133] flex items-center justify-center text-white font-bold">
            {userName?.charAt(0) || "U"}
          </div>
        )}

        <div>
          <h4 className="text-base sm:text-lg font-bold text-[#033133] leading-tight">
            {userName || "Anonymous User"}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm">
            {designation || "Satisfied Customer"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
