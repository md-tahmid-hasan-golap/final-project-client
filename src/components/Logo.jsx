import { Link } from "react-router";
import logo from "../../src/assets/banner/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="inline-flex items-center gap-2 select-none">
      {/* লোগো ইমেজ */}
      <img
        src={logo}
        alt="ZapShift Logo"
        className="h-8 w-auto object-contain"
      />

      <span className="font-sans font-extrabold text-xl text-[#2D2D2D] tracking-tight">
        Zap<span className="font-bold">Shift</span>
      </span>
    </Link>
  );
};

export default Logo;
