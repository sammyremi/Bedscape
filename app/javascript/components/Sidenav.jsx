import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useGlobalContext } from "./Context";
import { toast } from "react-toastify";

const Sidenav = () => {
  const { current_user, setCurrent_user } = useState("oladyao");
  const { activeSideNav, setActiveSideNav } = useState("dashboard");

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-16 left-0 w-1/6 h-screen"
      >
        <div className="h-full xl:px-3 py-6 xl:pl-5 overflow-y-auto">
          <ul className="xl:space-y-12 lg:space-y-6 mt-16 lg:text-base font-medium xl:text-xl">
            <li>
              <Link
                to="/"
                className={`flex items-center p-2 lg:pl-4 text-sky-700 xl:rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "dashboard" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("dashboard");
                }}
              >
                <svg
                  className="w-7 h-7 text-sky-700 transition duration-75 group-hover:text-sky-700"
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M8 6.00067L21 6.00139M8 12.0007L21 12.0015M8 18.0007L21 18.0015M3.5 6H3.51M3.5 12H3.51M3.5 18H3.51M4 6C4 6.27614 3.77614 6.5 3.5 6.5C3.22386 6.5 3 6.27614 3 6C3 5.72386 3.22386 5.5 3.5 5.5C3.77614 5.5 4 5.72386 4 6ZM4 12C4 12.2761 3.77614 12.5 3.5 12.5C3.22386 12.5 3 12.2761 3 12C3 11.7239 3.22386 11.5 3.5 11.5C3.77614 11.5 4 11.7239 4 12ZM4 18C4 18.2761 3.77614 18.5 3.5 18.5C3.22386 18.5 3 18.2761 3 18C3 17.7239 3.22386 17.5 3.5 17.5C3.77614 17.5 4 17.7239 4 18Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/apartments"
                className={`flex items-center p-2 lg:pl-4 text-sky-700 xl:rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "apartments" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("apartments");
                }}
              >
                <svg
                  className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                  viewBox="0 0 6.3499998 6.3499998"
                  id="svg8"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:cc="http://creativecommons.org/ns#"
                  xmlns:dc="http://purl.org/dc/elements/1.1/"
                  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                  xmlns:svg="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <defs id="defs2" />

                    <path
                      d="M 1.2929685,3.701172 A 0.26460978,0.26460978 0 0 0 1.0585935,3.9687499 V 5.5566406 A 0.26460978,0.26460978 0 0 0 1.3222653,5.8203125 H 5.0273435 A 0.26460978,0.26460978 0 0 0 5.2910153,5.5566406 V 3.9687499 a 0.26464841,0.26464841 0 1 0 -0.5292968,0 V 5.2910157 H 1.5878903 V 3.9687499 A 0.26460978,0.26460978 0 0 0 1.2929685,3.701172 Z"
                      id="rect1759"
                    />

                    <path
                      d="m 3.1718746,0.52929686 a 0.26460978,0.26460978 0 0 0 -0.1835937,0.078125 L 0.60742157,2.9882812 a 0.26460978,0.26460978 0 1 0 0.37304687,0.373047 L 3.1757809,1.1679688 5.3691404,3.3613282 A 0.26460978,0.26460978 0 1 0 5.7441402,2.9882812 L 3.3613279,0.60742186 a 0.26460978,0.26460978 0 0 0 -0.1894533,-0.078125 z"
                      id="rect1761"
                    />
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Apartments
                </span>
              </Link>
            </li>
            <li>
              <div
                className={`flex items-center cursor-pointer p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "admin" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("admin");
                  if (
                    current_user?.admin === false ||
                    current_user?.admin === undefined
                  ) {
                    toast.error("Login as Admin");
                  } else {
                    window.location.href = "/admin";
                  }
                }}
              >
                <svg
                  fill="currentColor"
                  className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
              </div>
            </li>
            <li>
              <Link
                to={"/sign_out"}
                className={` ${
                  current_user?.admin === undefined ? "hidden" : ""
                } flex items-center p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "log" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("log");
                }}
              >
                <svg
                  fill="currentColor"
                  className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M228.576 26.213v207.32h54.848V26.214h-54.848zm-28.518 45.744C108.44 96.58 41 180.215 41 279.605c0 118.74 96.258 215 215 215 118.74 0 215-96.26 215-215 0-99.39-67.44-183.025-159.057-207.647v50.47c64.6 22.994 110.85 84.684 110.85 157.177 0 92.117-74.676 166.794-166.793 166.794-92.118 0-166.794-74.678-166.794-166.795 0-72.494 46.25-134.183 110.852-157.178v-50.47z"
                    />
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
            <li>
              <a
                href={"/users/sign_in"}
                className={` ${
                  current_user?.admin === undefined ? "" : "hidden"
                } flex items-center p-2 text-sky-700 rounded-lg hover:bg-sky-100 ${
                  activeSideNav === "log" ? "bg-sky-300" : ""
                }`}
                onClick={() => {
                  setActiveSideNav("log");
                }}
              >
                <svg
                  fill="currentColor"
                  className="flex-shrink-0 w-7 h-7 dark:text-sky-700 transition duration-75 dark:text-gray-400 group-hover:text-sky-700 dark:group-hover:text-white"
                  aria-hidden="true"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="currentColor"
                      d="M228.576 26.213v207.32h54.848V26.214h-54.848zm-28.518 45.744C108.44 96.58 41 180.215 41 279.605c0 118.74 96.258 215 215 215 118.74 0 215-96.26 215-215 0-99.39-67.44-183.025-159.057-207.647v50.47c64.6 22.994 110.85 84.684 110.85 157.177 0 92.117-74.676 166.794-166.793 166.794-92.118 0-166.794-74.678-166.794-166.795 0-72.494 46.25-134.183 110.852-157.178v-50.47z"
                    />
                  </g>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Login</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    // <div>
    //   <button
    //     data-drawer-target="default-sidebar"
    //     data-drawer-toggle="default-sidebar"
    //     aria-controls="default-sidebar"
    //     type="button"
    //     className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //   >
    //     <span className="sr-only">Open sidebar</span>
    //     <svg
    //       className="w-6 h-6"
    //       aria-hidden="true"
    //       fill="currentColor"
    //       viewBox="0 0 20 20"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         clipRule="evenodd"
    //         fillRule="evenodd"
    //         d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    //       ></path>
    //     </svg>
    //   </button>

    //   <aside
    //     id="default-sidebar"
    //     className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    //     aria-label="Sidebar"
    //   >
    //     <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
    //       <ul className="space-y-2 font-medium">
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <svg
    //               className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 22 21"
    //             >
    //               <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
    //               <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
    //             </svg>
    //             <span className="ml-3">Dashboard</span>
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    //           >
    //             <svg
    //               className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //               aria-hidden="true"
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="currentColor"
    //               viewBox="0 0 18 18"
    //             >
    //               <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
    //             </svg>
    //             <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </aside>
    // </div>
  );
};

export default Sidenav;
