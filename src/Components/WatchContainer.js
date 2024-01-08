import React, { useDebugValue, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom'
import { closeMenuSlide } from '../Utilis/navSlice';
import SuggestionVideos from './SuggestionVideos';
import Livechat from './Livechat';

const WatchContainer = () => {

    const [searchParams] = useSearchParams();
    const videoId=searchParams.get('v');
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(closeMenuSlide())
    },[]);

    






  return (
    <div  className="p-2 m-2 flex">
          <div>
            <iframe width="850" height="380" src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            </div>          
          {/* <div className="p-2 m-2"><SuggestionVideos/></div> */}
          <Livechat/>
    
    </div>
  )
}

export default WatchContainer