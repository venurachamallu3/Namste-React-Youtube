import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()

  return (
    <>
    <h1>OOPS!!!</h1>
    <h2>Some thing went wrong....</h2>
<h1>{err.status +":"+err.statusText}</h1></>
    
  )
}

export default Error