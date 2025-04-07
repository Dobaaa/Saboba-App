import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [aToken, SetAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [workers, SetWorkers] = useState([]);
  const [appointments, SetAppointments] = useState([]);
  const [dashboard, SetDashboard] = useState(false);

  const BackEndUrl = import.meta.env.VITE_BACKEND_URL;
  const GetAllWorkers = async () => {
    try {
      const { data } = await axios.post(
        BackEndUrl + "/api/admin/all-workers",
        {},
        { headers: { aToken } }
      );
      if (data.success) {
        SetWorkers(data.workers);
        console.log(data.workers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const changeAvailability = async (workerId) => {
    try {
      const { data } = await axios.post(
        BackEndUrl + "/api/admin/change-availability",
        { workerId },
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message);
        GetAllWorkers();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getAllAppointments = async () => {
    try {
      const { data } = await axios.get(BackEndUrl + "/api/admin/appointments", {
        headers: { aToken },
      });
      if (data.success) {
        SetAppointments(data.appointements);
        console.log(data.appointements);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        BackEndUrl + "/api/admin/cancel-appointment",
        { appointmentId },
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        getAllAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const GetDashData = async () => {
    try {
      const { data } = await axios.get(BackEndUrl + "/api/admin/dashboard", {
        headers: { aToken },
      });
      if (data.success) {
        SetDashboard(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    aToken,
    SetAToken,
    BackEndUrl,
    workers,
    GetAllWorkers,
    changeAvailability,
    getAllAppointments,
    appointments,
    SetAppointments,
    cancelAppointment,
    GetDashData,
    dashboard,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
