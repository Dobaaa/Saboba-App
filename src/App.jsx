import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Register from "./Pages/Auth/Register/Register";
import Login from "./Pages/Auth/Login/Login";
import Workers from "./Pages/Workers/Workers";

function App() {
  return (
    <>
      <Routes>
        {/* public Routes*/}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workers" element={<Workers />} />
      </Routes>
    </>
  );
}

export default App;
