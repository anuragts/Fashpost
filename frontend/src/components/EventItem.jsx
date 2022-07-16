import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteEvent } from "../features/events/eventSlice";
// import { Link } from "react-router-dom";
import location from "../assets/location.svg";
import moment from "moment";
import date from "../assets/date.svg";

export const EventItem = ({ event }) => {
  // const dispatch = useDispatch();
  // format date
  const day = moment(event.date).format("MMM Do YYYY");
  return (
    <>
      <div className="text-xl  border-b-0 border-pink border-2 w-[350px] h-[70vh] mx-2 my-5 text-center font-normal relative items-center">
        <img src={event.imageurl} alt="event" className="h-[50%] max-h-full" />

        <div className="my-6 text-3xl">{event.text}</div>

        <div className="flex flex-row justify-center my-2">
          {" "}
          <img src={location} alt="" className="mx-2 w-[19px]" />{" "}
          <div>{event.location}</div>{" "}
        </div>
        <div className="flex flex-row justify-center my-2">
          {" "}
          <img src={date} alt="" className="mx-2 w-[19px]"  /> <div>{day}</div>
        </div>
        <a
          href={event.website}
          className="absolute bottom-0 text-2xl font-bold text-white   bg-pink w-full  mb-0 left-0 py-3 border-pink border-2 hover:text-pink hover:bg-white"
        >
          Attend
        </a>

        {/* <button onClick={() => dispatch(deleteEvent(event._id))} className="close">
        X
      </button> */}
      </div>
    </>
  );
};
