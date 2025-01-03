import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";

function App() {
  return (
    <>
      <Routes>
        {/* public Routes*/}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
