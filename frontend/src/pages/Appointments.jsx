import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedWorkers from "../components/RelatedWorkers";
import { toast } from "react-toastify";
import axios from "axios";

const Appointments = () => {
  const { workerId } = useParams();
  const { workers, currencySymbol, token, backendUrl, getWorkersData } =
    useContext(AppContext);
  const DaysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const navigate = useNavigate();
  const [workerInfo, SetWorkersInfo] = useState(null);
  const [WorkerSlots, SetWorkerSlot] = useState([]);
  const [SlotsIndex, SetSlotsIndex] = useState(0);
  const [slotTime, SetSlotsTime] = useState("");

  // get workers data
  const fetchWorkerInfo = async () => {
    const workerData = workers.find((w) => w._id === workerId);
    SetWorkersInfo(workerData);
  };

  //manage time function

  const GetAvailableSlots = async () => {
    SetWorkerSlot([]);
    //get current date
    let Today = new Date();
    for (let i = 0; i < 7; i++) {
      //getting date with index
      let cureentDate = new Date(Today);
      cureentDate.setDate(Today.getDate() + i);

      // setting and time of the date with index
      let EndTime = new Date();
      EndTime.setDate(Today.getDate() + i);
      EndTime.setHours(21, 0, 0, 0);

      //setting hours
      if (Today.getDate() === cureentDate.getDate()) {
        cureentDate.setHours(
          cureentDate.getHours() > 10 ? cureentDate.getHours() + 1 : 10
        );

        cureentDate.setMinutes(cureentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        cureentDate.setHours(10);
        cureentDate.setMinutes(0);
      }

      let timeslot = [];
      while (cureentDate < EndTime) {
        let FotmattedTime = cureentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        let day = cureentDate.getDate();
        let month = cureentDate.getMonth() + 1;
        let year = cureentDate.getFullYear();

        const slotDate = day + "_" + month + "_" + year;
        const slotTime = FotmattedTime;
        const isSlotAvailable =
          workerInfo.slots_booked[slotDate] &&
          workerInfo.slots_booked[slotDate].includes(slotTime)
            ? false
            : true;
        if (isSlotAvailable) {
          timeslot.push({
            datetime: new Date(cureentDate),
            time: FotmattedTime,
          });
        }
        //add sltot to array

        // increment current time by 30 minutes

        cureentDate.setMinutes(cureentDate.getMinutes() + 30);
      }
      SetWorkerSlot((prev) => [...prev, timeslot]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book appointment");
      return navigate("/login");
    }
    try {
      const date = WorkerSlots[SlotsIndex][0].datetime;
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      const slotDate = day + "_" + month + "_" + year;

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        { workerId, slotDate, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getWorkersData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  //update data
  useEffect(() => {
    fetchWorkerInfo();
  }, [workers, workerId]);

  useEffect(() => {
    GetAvailableSlots();
  }, [workerInfo]);

  useEffect(() => {
    console.log(WorkerSlots);
  }, [WorkerSlots]);

  return (
    workerInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* worker details */}
          <div>
            <img
              srcSet={workerInfo.image}
              alt=""
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>
          <div className=" flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* name and degree and experience */}

            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900 ">
              {workerInfo.name}
              <img src={assets.verified_icon} alt="" className="w-5" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {workerInfo.degree} - {workerInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {workerInfo.experience}
              </button>
            </div>

            {/* worker about  */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {workerInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee :{" "}
              <span className="text-gray-600 ">
                {workerInfo.fees} {currencySymbol}
              </span>
            </p>
          </div>
        </div>
        {/*----------- Booking Slots -----------*/}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full mt-4 overflow-x-scroll">
            {WorkerSlots.length &&
              WorkerSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => SetSlotsIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    SlotsIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && DaysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {WorkerSlots.length &&
              WorkerSlots[SlotsIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => SetSlotsTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button
            onClick={() => bookAppointment()}
            className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
          >
            Book an appointment
          </button>
        </div>

        {/* Related Workers  List*/}

        <RelatedWorkers
          workerId={workerId}
          speciality={workerInfo.speciality}
        />
      </div>
    )
  );
};

export default Appointments;
