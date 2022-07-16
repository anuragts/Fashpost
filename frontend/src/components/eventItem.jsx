import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../features/events/eventSlice'

export const EventItem = ({event}) => {
  const dispatch = useDispatch()
    return (
    <>
        <div className="flex flex-col  text-5xl font-light mb-5 mt-[30px]">

            <img src={event.imageurl} alt="event" className="w-1/2"/>


            <p>{event.text}</p>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <p>{event.website}</p>
            {/* <button onClick={() => dispatch(deleteEvent(event._id))} className="close">
        X
      </button> */}
        </div>
    </>
  )
}
