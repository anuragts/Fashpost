import React from "react";
import { useState } from "react";
import {useDispatch , useSelector} from "react-redux";
import { createEvent } from "../features/events/eventSlice";
import {toast} from 'react-toastify';
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom';



export const Create = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state)=> state.auth)
  const dispatch = useDispatch();
  const [text, setText] = useState("")
  const [location,setLocation] = useState("")
  const [imageurl,setUrl] = useState("")
  const [website,setWebsite] = useState("")
  const [date,setDate] = useState("")
  
  const {isSuccess,message} = useSelector((state)=> state.events)

  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
    if(isSuccess && message ) {                        
    toast.success(message) 
  }    }, [isSuccess,message])



  const onSubmit= (e) =>{
    e.preventDefault()

    dispatch(createEvent({text, location, imageurl, website , date}))
    setText('')
    setLocation('')
    setUrl('')
    setWebsite('')
    setDate('')     
  }
  
  return (
    <>
    <section className="flex flex-col justify-center items-center text-5xl font-light mb-5 mt-[30px]">
      <p>Create an Event </p>
    </section>
    <form
      autocomplete="off"
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center mt-10">
      <div className="mb-5 mt-2">
        <input
          type="text"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="name"
          name="name"
          value={text}
          placeholder="name"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="my-5">
        <input
          type="location"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="location"
          name="location"
          value={location}
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="my-5">
        <input
          type="imageurl"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="imageurl"
          name="imageurl"
          value={imageurl}
          placeholder="image url"
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div className="my-5">
        <input
          type="website"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="website"
          name="website"
          value={website}
          placeholder="website"
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="my-5">
        <input
          type="date"
          className="w-full text-3xl	border-2 border-black px-[14vw] py-4 text-center 	border-solid"
          id="date"
          name="date"
          value={date}
          placeholder="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="my-5">
        <button type="submit" className="bg-pink text-white text-3xl px-20 py-5 rounded-full font-semibold">
          {" "}
          Post{" "}
        </button>
      </div>
    </form>
  </>
  )}
