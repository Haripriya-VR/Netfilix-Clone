import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import {React,  useEffect, useState } from 'react';
import Movie from './Movie';

const Row = ({title,fetchURL,rowID,bgColor }) => {
    const [movies,setMovies]= useState([])
    const [like,setLike] =useState(false)

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        })
    },[fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
      };

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4' style={{backgroundColor:bgColor}}>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft
        onClick={slideLeft}
         className='bg-white left-0 rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} 
        />

        <div id={'slider' +rowID} className='w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide  relative'>
        {movies && movies.map((item, id) => (
                <Movie key={id} item ={item}/>
            ))}
        </div>
        <MdChevronRight 
          onClick={slideRight}
        className='bg-white right-0 rounded-full opacity-50 absolute hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
    </div>
    </>
  )
}

export default Row
