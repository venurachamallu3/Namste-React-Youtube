import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL, YOUTUBE_RECOMENDED_VIDEO_LIST_API } from '../Utilis/Config'
import VideoCard from './VideoCard'
import { Link, useSearchParams } from 'react-router-dom'

const SuggestionVideos = () => {
    
    const [searchParams] = useSearchParams();
    const v=searchParams.get('v');
    console.log("VID "+v)

    const [relatedVideos,setrelatedVideos]= useState([])



    useEffect(()=>{
        getRelatedVideos(v)
    },[v])


    async function getRelatedVideos(){
        const data = await fetch(YOUTUBE_RECOMENDED_VIDEO_LIST_API+v)
        const json = await data.json();
        console.log(json.items)
        setrelatedVideos(json.items)
    }

  return (
    <div>SuggestionVideos

{relatedVideos?.map((vid)=>{

return ( <Link key={vid.id}  to={"/watch?v="+vid?.id}> <VideoCard  {...vid}  /></Link> )
})}
    </div>
  )
}

export default SuggestionVideos