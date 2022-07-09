import React from "react";

export const Create = () => {
  return (
    <>
    <section className="flex flex-col justify-center items-center text-5xl font-light mb-5 mt-[30px]">
      <p>Create an Event </p>
    </section>
    <form
      onSubmit={''}
      className="flex flex-col justify-center items-center mt-10"
    >
      <div className="mb-5 mt-2">
        <input
          type="text"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="name"
          name="name"
          value={''}
          placeholder="name"
          onChange={''}
        />
      </div>
      <div className="my-5">
        <input
          type="location"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="location"
          name="location"
          value={''}
          placeholder="location"
          onChange={''}
        />
      </div>
      <div className="my-5">
        <input
          type="url"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="url"
          name="url"
          value={''}
          placeholder="image url"
          onChange={''}
        />
      </div>
      <div className="my-5">
        <input
          type="website"
          className="w-full text-3xl	border-2 border-black px-[10vw] py-4 text-center 	border-solid"
          id="website"
          name="website"
          value={''}
          placeholder="website"
          onChange={''}
        />
      </div>
      <div className="my-5">
        <input
          type="date"
          className="w-full text-3xl	border-2 border-black px-[14vw] py-4 text-center 	border-solid"
          id="date"
          name="date"
          value={''}
          placeholder="date"
          onChange={''}
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
  )
}
