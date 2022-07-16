import React from "react";
// import { useDispatch } from "react-redux";
// import { deleteEvent } from "../features/events/eventSlice";
// import { Link } from "react-router-dom";
import location from "../assets/location.svg";

export const EventItem = ({ event }) => {
  // const dispatch = useDispatch();
  return (
    <>
      <div className="text-xl  border-pink border-2 w-[350px] h-[70vh] mx-2 my-5 text-center font-normal relative items-center">
       <img src={event.imageurl} alt="event" className="h-[50%] max-h-full" />

        <div className="my-6 text-3xl">{event.text}</div>

        <div className="flex flex-row justify-center">
          {" "}
          <img src={location} alt="" className="mx-2 w-[19px]" />{" "}
          <div>{event.location}</div>{" "}
        </div>
        <div>{event.date}</div>
        <a
          href={event.website}
          className="absolute bottom-0 text-2xl font-bold text-white bg-pink w-full	left-0 py-3"
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
