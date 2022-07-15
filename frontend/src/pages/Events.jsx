import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {getAllEvents,reset} from '../features/event/eventSlice'
import {EventItem} from '../components/EventItem'


function Events()  {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.auth)


  // Get events state from events slice
  const {events, isLoading, isError , message} = useSelector((state) => state.events ) || {events: [], isLoading: false, isError: false, message: ''}


  
  useEffect (() =>{
    if(isError){
      console.log(message);
    }
    if (!user){
      navigate('/login')
    }
    dispatch(getAllEvents())

    return () =>{

      dispatch(reset())

    }

  },[user, navigate, isError, message, dispatch])
  // If events are loading, show the spinner
  if (isLoading) {
    return <Spinner />
  }

  // If there are no events, show a message

  // If there are events, show them
  return (
    <>
    <section className='content'>
    {events.length > 0 ? (
      <div className='events'>
        {events.map((event) => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>
    ):( <h3>You have not set any events</h3> )}
  </section></>
  )
}

export default Events


