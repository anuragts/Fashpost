import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {getEvents, reset} from '../features/events/eventSlice'
import {EventItem} from '../components/EventItem'
import {Link} from 'react-router-dom'


function Events()  {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state)=> state.auth)

// Show events from payload
  const {events, isLoading} = useSelector((state)=> state.events)  || {events: [], isLoading: true}
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
    dispatch(getEvents())
    return ()=>{
      dispatch(reset())
    }
  }
  ,[dispatch,navigate])
  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <section className="flex flex-col justify-center items-center text-5xl font-light mb-5 mt-[30px]">
        <p>Events</p>
      </section>
      <div className="flex flex-col justify-center items-center mt-10">
      {events.length > 0 ? (
    <div className='flex flex-row flex-wrap justify-between	'>
      {events.map((event) => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>
    ):( <> <h3 className='text-3xl font-light mt-[25vh]'>Currently no events available !!</h3>
    <Link to="/create" className=' mt-10 text-xl	text-white bg-pink px-[40px] py-3 rounded-[39px] border-2	 border-pink hover:text-pink hover:bg-white'>Create an event</Link> </>
    )}
      </div>
    </>
  )
}

export default Events


