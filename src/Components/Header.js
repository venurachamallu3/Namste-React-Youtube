import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toogleMenuSlide } from '../Utilis/navSlice'
import { Link } from 'react-router-dom'
import  youtubeIcon from '../assests/youtube logo.png'
import  menu from '../assests/menu .png'
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../Utilis/Config'
import { cacheSuggestions } from '../Utilis/SearchSlice'
import SearchResultContainer from './SearchResultContainer'

const Header = () => {


    const [SearchQuery,setSearchQuery]= useState([])
    const [suggestions,setSuggestions] = useState([])

    const searchcache = useSelector(store=>store.search)
    const dispatch = useDispatch()
    const [showSearchResult, setshowSearchResult]= useState("false")
    

    const handleToogle = ()=>{
        console.log("handel toggle called....")
        dispatch(toogleMenuSlide())

    }


    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(searchcache[SearchQuery]){
                setSuggestions(searchcache[SearchQuery])
            }else{
                getSuggestions();
            }
            return () => {
                clearInterval(timer)
            }

        },1000)

    },[SearchQuery])

    const getSuggestions = async ()=>{
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+SearchQuery)
        const json = await data.json();
        setSuggestions(json[1])

        dispatch(cacheSuggestions({[SearchQuery]:json[1]}))

    }


  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
        <div className="flex col-span-3">
            <img  className="h-19 p-2 cursor-pointer"  onClick={()=>handleToogle()}  alt="menu" src={menu}></img>
            <a  href="/"><img  className="h-20 w-15" alt ="LOGO" src={youtubeIcon}/>
       </a>
             {/* <Link to={"/"}>
             <img className="w-40 p-2" alt="youtube-logo" src={youtubeIcon}/>
             </Link> */}
            </div>
        <div className="col-span-10 flex">
            <input value={SearchQuery}  className="rounded-l-full w-[480px] bg-gray-100 border-2 p-2 text-left"  
            onChange={(e)=>setSearchQuery(e.target.value)}   
            onFocus={()=>setshowSearchResult(true)} onBlur={()=>setshowSearchResult(false)}
            type="text"></input>
            <button className="py-1 px-3 border-2 border-gray-300  text-white rounded-r-full bg-gray-300">Search</button>
            {showSearchResult && ( suggestions?.length>0 ?  <SearchResultContainer suggestionList={suggestions}/> : null)}
        </div>
        <div >
            <img className="w-8" alt="Account-logo" src="data:image/png;base64,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"></img>
        </div>
    </div>
  )
}

export default Header