import React from 'react'

import searchicon from '../assests/search-icon.png'

const SearchResultContainer = ({suggestionList}) => {
    console.log("SEARCH RESULT CONT"+suggestionList)

  return (
    <div className="  absolute bg-white shadow-xl w-[480px] rounded-lg top-14 mt-1.5 ml-1 ">
        <div className=" rounded-lg hover:bg-gray-200">
            
        <ul className='py-3'>          
            {suggestionList?.map((sugg)=>{
                return (
                    <li key={sugg}  className='my-1 hover:bg-gray-100 cursor-pointer'>
                              <img  className='mr-5 h-8 w-15 ml-3 inline-block' alt='search-icon' src={searchicon} />
                              <span>{sugg}</span>
                    </li>
                    // <img className="mr-5 h-10 ml-3 inline-block" src={searchicon}></img>
                    // <span className="py-2">{sugg}</span></ul>
                )
            })}

        
            
            </ul>
        </div>
    </div>
  )
}

export default SearchResultContainer