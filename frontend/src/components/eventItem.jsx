import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEvent } from '../features/event/eventSlice'

export const eventItem = ({event}) => {
  const dispatch = useDispatch()
    return (
    <>
        <div className="flex flex-col justify-center items-center text-5xl font-light mb-5 mt-[30px]">

            {/* image url */}
            <img src={event.imageurl} alt="event" className="w-full h-auto"/>


            <p>{event.name}</p>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <p>{event.website}</p>
            <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
        </div>
    </>
  )
}
