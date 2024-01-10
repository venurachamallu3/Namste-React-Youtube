import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../Utilis/Config'
import { Link, useSearchParams } from 'react-router-dom'

import { formatCompactNumber } from "../Utilis/formatCompactNumber"

const SuggestionVideos = ({props}) => {
  // console.log("Video ID is "+props?.id)
    
    const [searchParams] = useSearchParams();
    const v=searchParams.get('v');
    console.log("VID "+v)

    const [relatedVideos,setrelatedVideos]= useState([])

    // setrelatedVideos(relatedVideos.filter((v)=> v.id!== v ))


    useEffect(()=>{
      console.log("in use effect in suggestion video")
        getRelatedVideos()
        // console.log("related videos "+relatedVideos[0].id)
        // const removevideo = relatedVideos.filter((vid)=> vid?.id === videoId)
        // console.log("removed videos "+removevideo[0].id)
        // setrelatedVideos(removevideo)
        // console.log("setrelated viseos "+relatedVideos)
      // get all the videos using through the YouTube main api 
    },[])


    async function getRelatedVideos(){
        const data = await fetch(YOUTUBE_API_URL)
        const json = await data.json();
        setrelatedVideos(json.items)
    }

  return (

    <>
    <div >
      Suggestion Videos

{/* {relatedVideos?.map((vid)=>{
flex flex-wrap gap-2
return ( 
<div className="p-2 m-2 w-15">
<Link key={vid.id}  to={"/watch?v="+vid?.id}> <VideoCard  {...vid}  /></Link> </div>)
})} */}
    </div>



    {relatedVideos?.map((vid,i)=>{
      return (<div >
        
        <div className=" p-2 m-2 ">
          <Link to={"/watch?v="+vid?.id} >
      <div className="w-[550px] flex cursor-pointer">
         <img className="" src={vid?.snippet?.thumbnails?.medium?.url} alt="" />
        <div className=" items-start gap-2 p-2">
          
            <h2 className="p-2">{vid?.snippet?.title}</h2>
            <h3 className="text-gray-600 p-2">{vid?.snippet?.channelTitle}</h3>
            <li className='text-gray-500 text-[13px]'>{vid?.statistics?.viewCount ? formatCompactNumber(vid?.statistics?.viewCount) : 0} views  {(Math.abs(new Date(vid?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0)} days ago</li>
        </div>
        
      </div>
      </Link> 
    </div>
    </div>)
    })}

    </>
  )
}

export default SuggestionVideos
