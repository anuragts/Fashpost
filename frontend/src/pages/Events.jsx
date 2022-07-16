import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {getEvents, reset} from '../features/events/eventSlice'
import {EventItem} from '../components/EventItem'
// import {Create} from './Create'


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
    ):( <h3>You have not set any events</h3> )}
      </div>
    </>
  )
}

  
//   const {events, isLoading, isError , message} = useSelector((state) => state.events )  || {events: [], isLoading: false, isError: false, message: ''}


  
//   useEffect (() =>{
//     if(isError){
//       console.log(message);
//     }
//     if (!user){
//       navigate('/login')
//     }
//     dispatch(getEvents())

//     return () =>{

//       dispatch(reset())

//     }

//   },[user, navigate, isError, message, dispatch])

//   // If events are loading, show the spinner

//   if (isLoading) {
//     return <Spinner />
//   }

//   return (
//     <>
//     <section className='content'>
//     {events.length > 0 ? (
//       <div className='events'>
//         {events.map((event) => (
//           <EventItem key={event._id} event={event} />
//         ))}
//       </div>
//     ):( <h3>You have not set any events</h3> )}
//   </section></>
//   )
// }

export default Events


