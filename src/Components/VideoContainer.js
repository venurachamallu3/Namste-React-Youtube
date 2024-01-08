import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API_URL } from '../Utilis/Config';
import { Link } from 'react-router-dom';

const VideoContainer = () => {


    const [Videos,setVideos]= useState([])

    useEffect(()=>{
        getVideos();
    },[])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    async function getVideos(){
        const data =  await fetch(YOUTUBE_API_URL)
        const json =  await data.json()
        setVideos(json.items)
    }  


  return (
    <div className="flex flex-wrap">

        {Videos?.map((vid)=>{

            return ( <Link key={vid.id}  to={"/watch?v="+vid?.id}> <VideoCard  {...vid}  /></Link> )
        })}
       
    </div>
  )
}

export default VideoContainer