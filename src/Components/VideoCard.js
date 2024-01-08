import React from "react"
import { formatCompactNumber } from "../Utilis/formatCompactNumber"

const VideoCard = (props) => {

 
//   const { id, snippet, statistics } = {props}
//   const { title, channelTitle, thumbnails, publishedAt } = {snippet}
//   const { viewCount } = {statistics}

//   console.log("video card "+props?.snippet.title)
//   const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR3hMw_3daUL3Uhr5Y3uJh_kMaYzyqQhhPA&usqp=CAU"
  // console.log(snippet)
  return (






    // <iframe width="300" height="115" src="https://www.youtube.com/embed/eBTBG4nda2A?si=BtJs7-yFBwC_le8B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    <div className="p-1 m-1 "> 
      <div className="w-72 flex flex-wrap gap-2">
        <img className="" src={props?.snippet?.thumbnails?.medium?.url} alt="" />
        <div className="flex items-start gap-2">
          {/* <img className="w-10" src={avatar} alt="" /> */}
          <div className="">
            <h2 className="">{props?.snippet?.title}</h2>
            <h3 className="text-gray-600">{props?.snippet?.channelTitle}</h3>
            {/* <span className="flex gap-2 text-gray-600">
              <p>{props?.statistics?.viewCount} views</p>
              <p> {props?.snippet?.publishedAt} ago</p>
            </span> */}
            <li className='text-gray-500 text-[13px]'>{props?.statistics?.viewCount ? formatCompactNumber(props?.statistics?.viewCount) : 0} views  {(Math.abs(new Date(props?.snippet?.publishedAt) - new Date()) / (60 * 60 * 24 * 1000)).toFixed(0)} days ago</li>
     
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard










