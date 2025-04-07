import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { AdminContext } from "./context/AdminContext";
import Nav from "./components/NavBar";
import SideBar from "./components/SideBar";
import Dashboard from "./pages/Admin/Dashboard";
import AllApointments from "./pages/Admin/AllApointments";
import AddWorker from "./pages/Admin/AddWorker";
import WorkersList from "./pages/Admin/WorkersList";
import { WorkerContext } from "./context/WorkerContext";
import WorkerDashboard from "./pages/Worker/workerDashboard";
import WorkerAppointments from "./pages/Worker/workerAppointments";
import WorkerProfile from "./pages/Worker/workerProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(WorkerContext);
  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Nav />
      <div className="flex items-start">
        <SideBar />
        <Routes>
          {/* Adimn Route*/}
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllApointments />} />
          <Route path="/add-worker" element={<AddWorker />} />
          <Route path="/worker-list" element={<WorkersList />} />
          {/* worker Route*/}
          <Route path="/worker-dashboard" element={<WorkerDashboard />} />
          <Route path="/worker-appointments" element={<WorkerAppointments />} />
          <Route path="/worker-profile" element={<WorkerProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
