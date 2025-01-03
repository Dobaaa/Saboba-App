import React, { useState } from "react";
import Logo from "../../Assets/logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (language) => {
    // هنا تضع الكود الذي يغير اللغة (مثال: i18n.changeLanguage(language))
    setDropdownOpen(false); // إغلاق القائمة بعد اختيار اللغة
  };

  return (
    <div className="flex justify-between pe-5 ps-5 pt-3 items-center">
      {/* القائمة اليسرى */}
      <div className="flex items-center">
        <button className="md:hidden p-2 text-xl relative" onClick={toggleMenu}>
          {/* أيقونة التوجل */}
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul
          className={`${
            isMenuOpen
              ? "block w-[90%] absolute top-14 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 rounded"
              : "hidden"
          } md:flex gap-3 md:bg-transparent p-3 md:p-0`}
        >
          <li>Join the team</li>
          <li>Contact us</li>

          {/* القائمة للغة في الشاشات الصغيرة */}
          <div
            className={`${
              isMenuOpen ? "block w-[90%]" : "hidden"
            } md:hidden gap-3 md:bg-transparent p-3 md:p-0`}
          >
            <li onClick={() => changeLanguage("en")} className="cursor-pointer">
              English
            </li>
            <li onClick={() => changeLanguage("es")} className="cursor-pointer">
              Spanish
            </li>
            <li onClick={() => changeLanguage("fr")} className="cursor-pointer">
              French
            </li>
          </div>
        </ul>
      </div>

      {/* اللوغو */}
      <div className="logo">
        <img src={Logo} alt="Logo" className="w-[50px]" />
      </div>

      {/* القائمة اليمنى */}
      <ul className="hidden md:flex gap-3">
        <li>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full  "
            >
              English
              <svg
                className={`w-5 h-5 ml-2 transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 origin-top-right bg-white border border-gray-300 rounded-md shadow-lg w-48">
                <ul className="py-1">
                  <li
                    onClick={() => changeLanguage("en")}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    Arabic
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Nav;
