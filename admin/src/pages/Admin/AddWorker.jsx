import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddWorker = () => {
  const [workerImg, SetWorkerImg] = useState(false);
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [experience, SetExperience] = useState("");
  const [fees, SetFees] = useState("");
  const [about, SetAbout] = useState("");
  const [speciality, SetSpeciality] = useState("");
  const [degree, SetDegree] = useState("");
  const [address1, SetAddress1] = useState("");
  const [address2, SetAddress2] = useState("");

  const { BackEndUrl, aToken } = useContext(AdminContext);

  /* submit function  */
  const OnSubmitFun = async (e) => {
    e.preventDefault();
    try {
      if (!workerImg) {
        return toast.error("Image not Selected");
      }

      const formData = new FormData();
      formData.append("image", workerImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        BackEndUrl + "/api/admin/add-worker",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        SetWorkerImg(false);
        SetName("");
        SetEmail("");
        SetFees("");
        SetPassword("");
        SetSpeciality("");
        SetExperience("");
        SetAddress1("");
        SetAddress2("");
        SetAbout("");
        SetDegree("");
        SetAbout("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  return (
    <form onSubmit={OnSubmitFun} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Worker</p>
      <div className="bg-white px-8 py-8 shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)] rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        {/*start img upload */}
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="wok-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={
                workerImg ? URL.createObjectURL(workerImg) : assets.upload_area
              }
              alt=""
            />
          </label>
          <input
            onChange={(e) => {
              SetWorkerImg(e.target.files[0]);
            }}
            type="file"
            name=""
            id="wok-img"
            hidden
          />
          <p>
            Upload Worker <br /> picture
          </p>
        </div>
        {/*start form inputs  */}
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          {/*left side inputs */}
          <div className="w-full lg:flex-1 flex flex-col gap-4 ">
            <div className="flex flex-1 flex-col gap-1">
              <label className="block">Worker Name:</label>
              <input
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                value={name}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Name"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="block">Worker Email:</label>
              <input
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
                value={email}
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="block">Worker Password:</label>
              <input
                onChange={(e) => {
                  SetPassword(e.target.value);
                }}
                value={password}
                className="border rounded px-3 py-2"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="block">Experience:</label>
              <select
                onChange={(e) => {
                  SetExperience(e.target.value);
                }}
                value={experience}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="+10 Year">+10 Years</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="block">Fees:</label>
              <input
                onChange={(e) => {
                  SetFees(e.target.value);
                }}
                value={fees}
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>
          {/*right side inputs */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label className="block" htmlFor="">
                Speciality
              </label>
              <select
                onChange={(e) => {
                  SetSpeciality(e.target.value);
                }}
                value={speciality}
                className="border rounded px-3 py-2"
                name=""
                id=""
              >
                <option value="Painter">Painter</option>
                <option value="Plumber">Plumber</option>
                <option value="Electrician">Electrician</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Air Technician">Air Technician</option>
                <option value="TV Technician">TV Technician</option>
              </select>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="block">Education:</label>
              <input
                onChange={(e) => {
                  SetDegree(e.target.value);
                }}
                value={degree}
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Education"
                required
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label className="block" htmlFor="">
                Address
              </label>
              <input
                onChange={(e) => {
                  SetAddress1(e.target.value);
                }}
                value={address1}
                className="border rounded px-3 py-2"
                type="text"
                required
                placeholder="address 1"
              />
              <input
                onChange={(e) => {
                  SetAddress2(e.target.value);
                }}
                value={address2}
                className="border rounded px-3 py-2 mt-2"
                type="text"
                required
                placeholder="address 2"
              />
            </div>
          </div>
        </div>
        {/*start abot text */}
        <div>
          <label className="block mt-4 mb-2">About Worker:</label>
          <textarea
            onChange={(e) => {
              SetAbout(e.target.value);
            }}
            value={about}
            className="w-full px-4 pt-2 border rounded "
            placeholder="write about worker"
            rows={5}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[var(--main)] px-10 py-3 mt-4 text-white rounded-full"
        >
          Add Worker
        </button>
      </div>
    </form>
  );
};

export default AddWorker;
