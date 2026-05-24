import { FiBox } from "react-icons/fi";
import { Link, NavLink, Outlet } from "react-router";

const DashboardLayouts = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-white border-b border-gray-100 px-4">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost text-[#033133]"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-5"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-2 font-extrabold text-lg text-[#033133] tracking-tight">
            ZapShift Dashboard
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4 sm:p-6 bg-[#F2F4F7] min-h-[calc(100vh-65px)]">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-white border-r border-gray-100 is-drawer-close:w-14 is-drawer-open:w-64 transition-all duration-200">
          {/* Sidebar content here */}
          <ul className="menu w-full grow gap-1.5 p-2">
            {/* List item - Homepage */}
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-[#F2F4F7] hover:text-[#033133] is-drawer-close:tooltip is-drawer-close:tooltip-right font-medium transition-all"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="size-5 shrink-0"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden text-sm">Homepage</span>
              </Link>
            </li>

            {/* List item - Send A Parcel (Updated with FiBox Icon) */}
            <li>
              <NavLink
                to="/dashboard/myparcel"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl is-drawer-close:tooltip is-drawer-close:tooltip-right font-medium transition-all ${
                    isActive
                      ? "bg-black text-[#C2EA36]"
                      : "text-gray-600 hover:bg-[#F2F4F7] hover:text-[#033133]"
                  }`
                }
                data-tip="Send A Parcel"
              >
                <FiBox size={20} className="shrink-0" />
                <span className="is-drawer-close:hidden text-sm">
                  Send A Parcel
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayouts;
