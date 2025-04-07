import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { WorkerContext } from "../context/WorkerContext";
const Nav = () => {
  const { aToken, SetAToken } = useContext(AdminContext);
  const { dToken, SetDToken } = useContext(WorkerContext);
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
    aToken && SetAToken("");
    aToken && localStorage.removeItem("aToken");
    dToken && SetDToken("");
    dToken && localStorage.removeItem("dToken");
  };
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 shadow-[0px_8px_24px_rgba(149,157,165,0.2)] bg-white relative z-10">
      <div className="flex items-center gap-2 text-xs">
        <img
          className="w-8 sm:w-12 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Worker"}
        </p>
      </div>
      <button
        onClick={logOut}
        className="bg-[var(--main)] text-white text-sm px-10 py-2 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Nav;
