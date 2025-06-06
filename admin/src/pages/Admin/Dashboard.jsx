import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { GetDashData, cancelAppointment, aToken, dashboard } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);
  useEffect(() => {
    if (aToken) {
      GetDashData();
    }
  }, [aToken]);
  return (
    dashboard && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.worker_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboard.workers}
              </p>
              <p className="text-gray-400">workers</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboard.appointements}
              </p>
              <p className="text-gray-400">Appointements</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all">
            <img className="w-14" src={assets.patients_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashboard.clients}
              </p>
              <p className="text-gray-400">Clients</p>
            </div>
          </div>
        </div>
        {/*latest appointments */}
        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t ">
            <img src={assets.list_icon} alt="" />
            <p className="font-semibold">Latest Bookings</p>
          </div>
          <div className="pt-4  ">
            {dashboard.latestAppointments.map((i, index) => (
              <div
                className="flex items-center px-6 py- gap-3 hover:bg-gray-100"
                key={index}
              >
                <img
                  className="w-10 rounded-full"
                  src={i.workerData.image}
                  alt=""
                />
                <div className="flex-1 text-sm">
                  <p className="text-gray-800 font-medium">
                    {i.workerData.name}
                  </p>
                  <p className="text-gray-600">{slotDateFormat(i.slotDate)}</p>
                </div>
                {i.cancelled ? (
                  <p className="text-red-400 text-xs font-medium">Cancelled</p>
                ) : (
                  <img
                    onClick={() => cancelAppointment(i._id)}
                    className="w-10 cursor-pointer"
                    src={assets.cancel_icon}
                    alt=""
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
