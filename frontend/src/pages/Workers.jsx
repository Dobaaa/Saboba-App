import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Workers = () => {
  const { speciality } = useParams();
  const { workers } = useContext(AppContext);
  const [filterWorker, SetFilterWorker] = useState([]);
  const [showFilter, SetShowFilter] = useState(false);
  //navigate
  const navigate = useNavigate();

  //filter function
  const ApplyFilter = () => {
    if (speciality) {
      SetFilterWorker(
        workers.filter((worker) => worker.speciality === speciality)
      );
    } else {
      SetFilterWorker(workers);
    }
  };

  //update filter
  useEffect(() => {
    ApplyFilter();
  }, [workers, speciality]);

  return (
    <div>
      <p className="text-gray-600 ">Browse through the workers specialist.</p>
      <div className=" flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => {
            SetShowFilter((prev) => !prev);
          }}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white " : ""
          }`}
        >
          Filters
        </button>
        <div
          className={`speciality-button flex flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex " : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Painter"
                ? navigate("/workers")
                : navigate("/workers/Painter")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Painter" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Painter
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Plumber" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Plumber"
                ? navigate("/workers")
                : navigate("/workers/Plumber")
            }
          >
            Plumber
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Electrician" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Electrician"
                ? navigate("/workers")
                : navigate("/workers/Electrician")
            }
          >
            Electrician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Carpenter" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Carpenter"
                ? navigate("/workers")
                : navigate("/workers/Carpenter")
            }
          >
            Carpenter
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${
              speciality === "Air Technician" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "Air Technician"
                ? navigate("/workers")
                : navigate("/workers/Air Technician")
            }
          >
            Air Technician
          </p>
          <p
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer whitespace-nowrap ${
              speciality === "TV Technician" ? "bg-indigo-100 text-black" : ""
            }`}
            onClick={() =>
              speciality === "TV Technician"
                ? navigate("/workers")
                : navigate("/workers/TV Technician")
            }
          >
            TV Technician
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterWorker.map((item, index) => (
            <div
              onClick={() => navigate(`/appointments/${item._id}`)}
              key={index}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img src={item.image} alt="" className="bg-blue-50 h-[244px]" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <p
                    className={`w-2 h-2 ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    }  rounded-full`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workers;
