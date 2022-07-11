import React from 'react'
import { useEffect } from 'react';
// import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import Spinner from '../components/Spinner'
import {getAllEvents,reset} from '../features/event/eventSlice'
import {EventItem} from '../components/EventItem'


export const Events = () => {

  // const navigate = useNavigate()
  const dispatch = useDispatch()

  const {events,isLoading ,isError,message} = useSelector((state) => state.event)

  useEffect(() => {
    if(isError){
      console.log(message);
    }

    dispatch(getAllEvents())

    return () => {
      dispatch(reset())
    }
  },[isError,message,dispatch])

  if (isLoading) {
    return <Spinner />
  }
  
  return (
    <> 
    <div> Events </div>

    <section>
    {events.length>0?(
      <div>
        {events.map((event )=> (
          <EventItem key={event._id} event={event}/>
       ) )}
      </div>
  ):( <h3>Currenty there is no events.</h3> )}
    </section>

    </>
  )
}
