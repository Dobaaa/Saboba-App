import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";

const Workers = () => {
  const { speciality } = useParams();
  const { workers } = useContext(AppContext);
  const [filterWorker, SetFilterWorker] = useState([]);
  const [showFilter, SetShowFilter] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Original speciality values
  const specialityTypes = {
    painter: "Painter",
    plumber: "Plumber",
    electrician: "Electrician",
    carpenter: "Carpenter",
    airTechnician: "Air Technician",
    tvTechnician: "TV Technician",
  };

  //filter function
  const ApplyFilter = () => {
    if (speciality) {
      SetFilterWorker(
        workers.filter(
          (worker) => worker.speciality === specialityTypes[speciality]
        )
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
    <div className="px-5 sm:px-10 py-10">
      <h1 className="text-2xl font-medium">{t("workers.title")}</h1>
      <p className="text-gray-600">{t("workers.title")}</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          onClick={() => {
            SetShowFilter((prev) => !prev);
          }}
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white " : ""
          }`}
        >
          {t("workers.filters")}
        </button>
        <div
          className={`speciality-button flex flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex " : "hidden sm:flex"
          }`}
        >
          {Object.entries(specialityTypes).map(([key, value]) => (
            <p
              key={key}
              onClick={() =>
                speciality === key
                  ? navigate("/workers")
                  : navigate(`/workers/${key}`)
              }
              className={`w-[94vw] whitespace-nowrap  sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
                speciality === key ? "bg-indigo-100 text-black" : ""
              }`}
            >
              {t(`workers.types.${key}`)}
            </p>
          ))}
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
                  <p>
                    {item.available
                      ? t("workers.status.available")
                      : t("workers.status.notAvailable")}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">
                  {t(
                    `workers.types.${Object.keys(specialityTypes).find(
                      (key) => specialityTypes[key] === item.speciality
                    )}`
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workers;
