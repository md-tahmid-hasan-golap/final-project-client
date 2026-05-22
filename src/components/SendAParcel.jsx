import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Auth/AuthContext";
import { useLoaderData } from "react-router";

const SendAParcel = () => {
  const { user } = useContext(AuthContext);
  const serviceCenters = useLoaderData();
  const singelcenter = serviceCenters.map((c) => c.region);
  const rigions = [...new Set(singelcenter)];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelSendAParcel = (data) => {
    console.log(data);
  };

  return (
    <div className="my-7 px-4 max-w-5xl mx-auto">
      <div className="p-4 sm:p-6 md:p-8 bg-white shadow-sm rounded-2xl border border-gray-100">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#033133] tracking-tight text-center sm:text-left mb-4">
            Send A Parcel
          </h2>
          <p className="my-2 text-gray-500 text-xs sm:text-sm md:text-base font-medium text-center sm:text-left leading-relaxed">
            Enter your parcel details
          </p>
        </div>

        <div className="border-t border-gray-200 my-4"></div>

        <form onSubmit={handleSubmit(handelSendAParcel)} className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 my-4">
            <label className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-gray-700 cursor-pointer group">
              <input
                type="radio"
                {...register("parcelType")}
                value="Document"
                className="w-4 h-4 text-[#033133] border-gray-300 focus:ring-[#033133]/20 accent-[#033133] cursor-pointer"
                defaultChecked
              />
              <span className="group-hover:text-[#033133] transition-colors">
                Document
              </span>
            </label>

            <label className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-gray-700 cursor-pointer group">
              <input
                type="radio"
                {...register("parcelType")}
                value="Not-Document"
                className="w-4 h-4 text-[#033133] border-gray-300 focus:ring-[#033133]/20 accent-[#033133] cursor-pointer"
              />
              <span className="group-hover:text-[#033133] transition-colors">
                Not-Document
              </span>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <fieldset className="flex flex-col gap-1.5 w-full">
              <label className="text-xs sm:text-sm font-semibold text-gray-700">
                Parcel Name
              </label>
              <input
                type="text"
                {...register("parcelName", { required: true })}
                className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                  errors.parcelName
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-[#033133]/20"
                }`}
                placeholder="Parcel Name"
              />
              {errors.parcelName && (
                <p className="text-red-500 text-xs font-medium mt-0.5">
                  Parcel Name is required
                </p>
              )}
            </fieldset>

            <fieldset className="flex flex-col gap-1.5 w-full">
              <label className="text-xs sm:text-sm font-semibold text-gray-700">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                {...register("parcelWight", { required: true })}
                className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                  errors.parcelWight
                    ? "border-red-500 focus:border-red-500"
                    : "border-transparent focus:border-[#033133]/20"
                }`}
                placeholder="Parcel Weight (KG)"
              />
              {errors.parcelWight && (
                <p className="text-red-500 text-xs font-medium mt-0.5">
                  Parcel Weight is required
                </p>
              )}
            </fieldset>
          </div>

          {/* sender details */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#033133] mb-2 border-b pb-1">
                Sender Details
              </h3>
              {/* Sender Name */}
              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Sender Name
                </label>
                <input
                  type="text"
                  {...register("senderName", { required: true })}
                  defaultValue={user?.displayName}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.senderName
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Sender Name"
                />
                {errors.senderName && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Sender Name is required
                  </p>
                )}
              </fieldset>
              {/* Sender Email */}
              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Sender Email
                </label>
                <input
                  type="email"
                  {...register("senderEmail", { required: true })}
                  defaultValue={user?.email}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.senderEmail
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Sender Email Address"
                />
                {errors.senderEmail && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Sender Email is required
                  </p>
                )}
              </fieldset>

              {/* Sender District */}
              <fieldset className="fieldset ">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region"
                  className="select  w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {rigions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* Sender Phone */}
              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Sender Phone
                </label>
                <input
                  type="tel"
                  {...register("senderPhone", { required: true })}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.senderPhone
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Sender Phone Number"
                />
                {errors.senderPhone && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Sender Phone is required
                  </p>
                )}
              </fieldset>
              {/* Sender Address */}
              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Sender Address
                </label>
                <input
                  type="text"
                  {...register("senderAddress", { required: true })}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.senderAddress
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Sender Full Address"
                />
                {errors.senderAddress && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Sender Address is required
                  </p>
                )}
              </fieldset>
            </div>

            {/* Receiver Details */}

            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-[#033133] mb-2 border-b pb-1">
                Receiver Details
              </h3>
              {/* Receiver Name */}

              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Receiver Name
                </label>
                <input
                  type="text"
                  {...register("receiverName", { required: true })}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.receiverName
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Receiver Name"
                />
                {errors.receiverName && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Receiver Name is required
                  </p>
                )}
              </fieldset>
              {/* Receiver Email */}

              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Receiver Email
                </label>
                <input
                  type="email"
                  {...register("receiverEmail", { required: true })}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.receiverEmail
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Receiver Email Address"
                />
                {errors.receiverEmail && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Receiver Email is required
                  </p>
                )}
              </fieldset>
              {/* Receiver District */}

              <fieldset className="fieldset ">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  {...register("receverRegion")}
                  defaultValue="Pick a Region"
                  className="select  w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {rigions.map((r, index) => (
                    <option key={index} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Receiver Phone */}

              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Receiver Phone
                </label>
                <input
                  type="tel"
                  {...register("receiverPhone", { required: true })}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.receiverPhone
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Receiver Phone Number"
                />
                {errors.receiverPhone && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Receiver Phone is required
                  </p>
                )}
              </fieldset>

              {/* Receiver Address */}

              <fieldset className="flex flex-col gap-1.5 w-full">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Receiver Address
                </label>
                <input
                  type="text"
                  {...register("receiverAddress", { required: true })}
                  className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
                    errors.receiverAddress
                      ? "border-red-500 focus:border-red-500"
                      : "border-transparent focus:border-[#033133]/20"
                  }`}
                  placeholder="Receiver Full Address"
                />
                {errors.receiverAddress && (
                  <p className="text-red-500 text-xs font-medium mt-0.5">
                    Receiver Address is required
                  </p>
                )}
              </fieldset>
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#C2EA36] hover:bg-[#b3d92b] text-[#033133] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 mt-4 shadow-sm cursor-pointer"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendAParcel;
