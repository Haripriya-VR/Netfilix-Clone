import React,{useState, useEffect} from "react";
import {FaHeart , FaRegHeart, FaPlayCircle} from 'react-icons/fa'
import axios from "axios";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion,doc,updateDoc } from "firebase/firestore";


const Movie = ({item,onPlay }) => {
    const [like,setLike] =useState(false)
    const [saved,setSaved] = useState(false)

    const {user} = UserAuth()

    const movieID = doc(db,'users',`${user?.email}`)
    const saveShow = async ()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShows: arrayUnion({
            id:item.id,
            title:item.title,
            img:item.backdrop_path,
          }),
        })
      }else{
        alert('please login ')
      }
    }


    useEffect(() => {
      const updateFirestore = async () => {
          if (like && user?.email) { 
              await updateDoc(movieID, {
                  savedShows: arrayUnion({
                      id: item.id,
                      title: item.title,
                      img: item.backdrop_path,
                  }),
              }).catch(error => console.error('Error updating document:', error));
          }
      };
  
      updateFirestore();
  }, [like, user?.email, item, movieID]); 





  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white">
        <p className="white-space-normal text-xs font-bold flex justify-center items-center h-full text-center ">
          {item?.title}
        </p>
        <p onClick={ saveShow}>
          {like ? (
            <FaHeart className="absolute ml-4 top-4 text-gray-300 " />
          ) : (
            <FaRegHeart className="absolute ml-4  top-4 text-gray-300 " />
          )}
        </p>
       
      </div>
    </div>
  );
};

export default Movie;
