import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "EGP";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [workers, SetWorkers] = useState([]);
  const [token, SetToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, SetUserData] = useState(false);
  const getWorkersData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/worker/list");
      if (data.success) {
        SetWorkers(data.workers);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });
      if (data.success) {
        SetUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const value = {
    workers,
    currencySymbol,
    token,
    SetToken,
    backendUrl,
    userData,
    SetUserData,
    loadUserProfileData,
    getWorkersData,
  };

  useEffect(() => {
    getWorkersData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      SetUserData(false);
    }
  }, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
