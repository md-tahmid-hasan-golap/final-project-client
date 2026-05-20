import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthContext";
import axios from "axios";

const Register = () => {
  const { signUpUser, signInWithGoogle, updateProfileUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegister = (data) => {
    console.log(data);
    const photo = data.photo[0];
    // console.log("This is my Photo", photo);
    signUpUser(data.email, data.password)
      .then((result) => {
        console.log(result);

        const formData = new FormData();
        formData.append("image", photo);
        const imageURL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_kye}`;
        axios.post(imageURL, formData).then((res) => {
          console.log("your photo upload", res.data.data.url);
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateProfileUser(userProfile)
            .then(() => {
              console.log("Your Profile is Done");
            })
            .catch((error) => {
              console.log(error);
            });
        });

        Swal.fire({
          title: "Registration Success!",
          text: "Your account has been created successfully.",
          icon: "success",
          confirmButtonColor: "#033133",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Registration Failed",
          text: error.message || "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonColor: "#033133",
        });
      });
  };

  const handelSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);

        Swal.fire({
          title: "Success!",
          text: "Successfully signed in with Google.",
          icon: "success",
          confirmButtonColor: "#033133",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          title: "Sign In Failed",
          text: error.message || "Something went wrong with Google Sign-In.",
          icon: "error",
          confirmButtonColor: "#033133",
        });
      });
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6 sm:p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="text-center sm:text-left mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#033133] mb-1.5 tracking-tight">
          Create an Account
        </h2>
        <p className="text-gray-400 text-xs sm:text-sm">
          Register with ZapShift
        </p>
      </div>

      <form onSubmit={handleSubmit(handelRegister)} className="space-y-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
              errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-transparent focus:border-[#033133]/20"
            }`}
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs font-medium mt-0.5">
              Name is required
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-semibold text-gray-700">
            Photo
          </label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className={`w-full bg-[#F2F4F7] file-input text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
              errors.photo
                ? "border-red-500 focus:border-red-500"
                : "border-transparent focus:border-[#033133]/20"
            }`}
            placeholder="Photo"
          />
          {errors.photo && (
            <p className="text-red-500 text-xs font-medium mt-0.5">
              Photo is required
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-transparent focus:border-[#033133]/20"
            }`}
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs font-medium mt-0.5">
              Email is required
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs sm:text-sm font-semibold text-gray-700">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className={`w-full bg-[#F2F4F7] text-gray-800 px-4 py-2.5 rounded-xl text-sm outline-none border transition-all ${
              errors.password
                ? "border-red-500 focus:border-red-500"
                : "border-transparent focus:border-[#033133]/20"
            }`}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-xs font-medium mt-0.5">
              Password is required
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-xs font-medium mt-0.5">
              Password must be at least 6 characters
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#C2EA36] hover:bg-[#b3d92b] text-[#033133] font-bold text-sm py-3 rounded-xl transition-all duration-200 mt-2 shadow-sm cursor-pointer"
        >
          Register
        </button>
      </form>

      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-200"></div>
        <span className="px-3 text-xs text-gray-400 font-medium">OR</span>
        <div className="flex-1 border-t border-gray-200"></div>
      </div>

      <button
        onClick={handelSignInWithGoogle}
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm py-3 px-4 rounded-xl border border-gray-200 transition-all duration-200 shadow-sm cursor-pointer"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#EA4335"
            d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.33 0 3.357 2.72 1.5 6.662l3.766 3.103Z"
          />
          <path
            fill="#4285F4"
            d="M23.49 12.275c0-.825-.075-1.62-.215-2.385H12v4.51h6.46c-.28 1.48-1.11 2.73-2.36 3.57v2.96h3.81c2.23-2.05 3.51-5.07 3.51-8.655Z"
          />
          <path
            fill="#FBBC05"
            d="M5.266 14.235 1.5 17.338a11.963 11.963 0 0 0 10.5 6.662c3.047 0 5.891-1.002 8.04-2.743l-3.81-2.96c-1.095.733-2.495 1.183-4.23 1.183-3.41 0-6.295-2.302-7.324-5.41a.03.03 0 0 0-.41 0Z"
          />
          <path
            fill="#34A853"
            d="M1.5 17.338a11.935 11.935 0 0 1 0-10.676l3.766 3.103a7.042 7.042 0 0 0 0 4.47l-3.766 3.103Z"
          />
        </svg>
        <span>Sign in with Google</span>
      </button>

      <div className="text-center mt-5">
        <p className="text-xs sm:text-sm text-gray-500">
          AlReady have an account?{" "}
          <Link
            to="/signin"
            className="text-[#033133] font-bold hover:underline transition-all"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
