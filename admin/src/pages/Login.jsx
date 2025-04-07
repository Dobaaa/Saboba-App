import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { WorkerContext } from "../context/WorkerContext";
const Login = () => {
  const [state, SetState] = useState("Admin");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const { SetAToken, BackEndUrl } = useContext(AdminContext);
  const { SetDToken } = useContext(WorkerContext);

  // submit
  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(BackEndUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          SetAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(BackEndUrl + "/api/worker/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("dToken", data.token);
          SetDToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {}
  };
  return (
    <form onSubmit={SubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl text-[#5e5e5e] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-[var(--main)]">{state}</span> Login
        </p>
        <div className="w-full">
          <label className=" block" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
            id="email"
            onChange={(e) => SetEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block">
            Password
          </label>
          <input
            type="password"
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
            id="password"
            onChange={(e) => SetPassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="bg-[var(--main)] text-white w-full py-2 rounded-md text-base">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Worker Login?
            <span
              className="text-[var(--main)] underline cursor-pointer"
              onClick={() => {
                SetState("Worker");
              }}
            >
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?
            <span
              className="text-[var(--main)] underline cursor-pointer"
              onClick={() => {
                SetState("Admin");
              }}
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
