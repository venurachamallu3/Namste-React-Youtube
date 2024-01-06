import React from 'react'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

 const showNav = useSelector(store=>store.nav.ismenushow)

if(!showNav) return null

  return (
    <div className="w-2/12">
       <ul className="p-4 ">
            <Link to={"/"}><li >Home</li></Link>
            <li>Subcription</li>
            <li>Shorts</li>
            <li>Comdey Scenes</li>
            <li>News</li>
        </ul>
        <hr></hr>
        <ul className="p-3 ">    
            <li className="font-bold py-1">Subcriptions</li>
            <li >Cricket</li>
            <li>Live</li>
            <li>Videos</li>
            <li>Treding</li>
            <li>Shopping</li>
            <li>Cooking</li>
            <li>Songs</li>
        </ul>
       


        
    </div>
  )
}

export default Sidebar