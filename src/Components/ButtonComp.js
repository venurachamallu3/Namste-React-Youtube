import React from 'react'

const ButtonComp = (props) => {

  console.log("BUTTON COM CALLED.....")
  return (
    <>
         <button className="p-2 m-2 w-25 bg-gray-300 rounded-md">{props?.bname}</button>
    </>
  )
}

export default ButtonComp