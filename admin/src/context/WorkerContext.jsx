import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const WorkerContext = createContext();

const WorkerContextProvider = (props) => {
  const BackEndUrl = import.meta.env.VITE_BACKEND_URL;
  const [dToken, SetDToken] = useState(
    localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
  );
  const [appointments, SetAppointments] = useState([]);
  const [dashData, SetDashData] = useState(false);
  const [profileData, SetProfileData] = useState(false);

  const GetAppointments = async () => {
    try {
      const { data } = await axios.get(
        BackEndUrl + "/api/worker/appointments",
        {
          headers: { dToken },
        }
      );
      if (data.success) {
        SetAppointments(data.appointments);
        console.log(data.appointments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const CompleteAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        BackEndUrl + "/api/worker/complete-appointment",
        { appointmentId },
        { headers: { dToken } }
      );
      if (data.success) {
        toast.success(data.message);
        GetAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const CancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        BackEndUrl + "/api/worker/cancel-appointment",
        { appointmentId },
        { headers: { dToken } }
      );
      if (data.success) {
        toast.success(data.message);
        GetAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const GetDashData = async () => {
    try {
      const { data } = await axios.get(BackEndUrl + "/api/worker/dashboard", {
        headers: { dToken },
      });

      if (data.success) {
        SetDashData(data.dashData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const GetProfiledata = async () => {
    try {
      const { data } = await axios.get(BackEndUrl + "/api/worker/profile", {
        headers: { dToken },
      });
      if (data.success) {
        SetProfileData(data.profileData);
        console.log(data.profileData);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const value = {
    dToken,
    SetDToken,
    BackEndUrl,
    GetAppointments,
    appointments,
    SetAppointments,
    CompleteAppointment,
    CancelAppointment,
    GetDashData,
    SetDashData,
    dashData,
    GetProfiledata,
    profileData,
    SetProfileData,
  };
  return (
    <WorkerContext.Provider value={value}>
      {props.children}
    </WorkerContext.Provider>
  );
};

export default WorkerContextProvider;
