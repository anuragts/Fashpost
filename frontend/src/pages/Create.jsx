import React from "react";
import { useState } from "react";
import {useDispatch } from "react-redux";
import { createEvent } from "../features/event/eventSlice";



export const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    url:"",
    website:"",
    date:"",
  });
  const {  name, location, url, website, date  } = formData;


  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))};

const dispatch = useDispatch();

  const onSubmit= (e) =>{
    e.preventDefault()

    dispatch(createEvent({name, location, url, website, date}))
    setFormData('')

  }


  return (
    <>
    <section className="flex flex-col justify-center items-center text-5xl font-light mb-5 mt-[30px]">
      <p>Create an Event </p>
    </section>
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center mt-10"
    >
      <div className="mb-5 mt-2">
        <input
          type="text"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="name"
          name="name"
          value={name}
          placeholder="name"
          onChange={onChange}
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
          onChange={onChange}
        />
      </div>
      <div className="my-5">
        <input
          type="url"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="url"
          name="url"
          value={url}
          placeholder="image url"
          onChange={onChange}
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
          onChange={onChange}
        />
      </div>
      {/* <div className="my-5">
        <input
          type="date"
          className="w-full text-3xl	border-2 border-black px-[14vw] py-4 text-center 	border-solid"
          id="date"
          name="date"
          value={date}
          placeholder="date"
          onChange={onChange}
        />
      </div> */}
      <div className="my-5">
        <button type="submit" className="bg-pink text-white text-3xl px-20 py-5 rounded-full font-semibold">
          {" "}
          Post{" "}
        </button>
      </div>
    </form>
  </>
  )}
