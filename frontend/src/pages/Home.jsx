import React from 'react'
import fashion from '../assets/fashion.svg';
import {Link} from 'react-router-dom'

export const Home = () => {
  return (
    <>
    <div className='flex flex-row font-light'>
        <div className='mt-[9rem] text-6xl leading-snug'><span className='text-pink font-bold'>Discovering</span> and <span className='text-pink font-bold'>Organizing</span> <br/> fashion shows made easy</div>
        <img src={fashion} alt="" className='w-[558px] my-20' />
    </div>
    <div className='flex items-center justify-center w-1/2'>
        <Link to="/events" className='mt-[-15rem] text-5xl	text-white bg-pink px-[40px] py-3 rounded-[39px] border-2	 border-pink hover:text-pink hover:bg-white '>Discover</Link>
    </div>
    </>
  )
}
