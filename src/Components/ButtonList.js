import React from 'react'
import ButtonComp from './ButtonComp'

const ButtonList = () => {

    const buttonlist=["All","Music","Gaming","Live","Indian Pop Music","Movies","Cricket","Cooking","Movies","Computer","Science"]
  return (
    <div>

            {buttonlist.map((but,index)=>{
                return (<ButtonComp  bname={but}/>)
            })}

    </div>
  )
}

export default ButtonList