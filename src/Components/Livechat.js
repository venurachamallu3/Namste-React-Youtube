import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addmessage } from '../Utilis/LivechatSlice';
import { generateRandomMessage, generateRandomName } from '../Utilis/helper';
import ChatMessage from './ChatMessage';

const Livechat = () => {


    const [liveMessage, setLiveMessage] = useState("")
  const chatMessages = useSelector(store => store.Livechat.message)

  const dispatch = useDispatch()
  useEffect(() => {
    const chatInterval = setInterval(() => {
      // API Polling
      dispatch(addmessage({ username: generateRandomName(), message: generateRandomMessage(18) + " 🚀" }))
    }, 1500)

    return () => clearInterval(chatInterval)
  }, [])

  return (
    <div className="p-2 h-full flex flex-col gap-3 justify-between m-3 w-[400px]">
      <span className="h-[380px] flex flex-col flex-col-reverse  overflow-y-scroll">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </span>

      <form className="my-1 flex gap-1 items-center" onSubmit={e => e.preventDefault()}>
        <input type="text" value={liveMessage} onChange={e => setLiveMessage(e.target.value)} className="border border-gray-400 p-2 rounded-md" placeholder="chat live ..." />
        <button
          onClick={() => {
            dispatch(addmessage({ username: "USER", message: liveMessage }))
            setLiveMessage("")
          }}
          className="p-2 bg-red-400 text-white rounded-md hover:bg-red-500"
        >
          Send
        </button>
      </form>
    </div>
  )


//     const [liveMessage,setLiveMessage]= useState("");
//     const chatMessages = useSelector(store=>store.Livechat.message)

//     const dispatch = useDispatch();

//     useEffect(()=>{
//         const chatInterval = setInterval(()=>{
//                 dispatch(addmessage({username:generateRandomName(), message:generateRandomMessage(18) + "🚀"}))
//         },5000)

//         return ()=>clearInterval(chatInterval);
//     },[])


//   return (
//     <div className="p-2 h-full flex flex-col gap-3 justify-between ">

//         <span className="h-[380px] flex flex-col flex-col-reverse  overflow-y-scroll">
//         {chatMessages.map((msg, index) => (
//           <ChatMessage key={index} username={msg.name} message={msg.message} />
//         ))}
//       </span>

//       <form className="my-1 flex gap-1 items-center" onSubmit={e => e.preventDefault()}>
//         <input type="text" value={liveMessage} onChange={e => setLiveMessage(e.target.value)} className="border border-gray-400 p-2 rounded-md" placeholder="chat live ..." />
//         <button
//           onClick={() => {
//             dispatch(addmessage({ username: "USER", message: liveMessage }))
//             setLiveMessage("")
//           }}
//           className="p-2 bg-red-400 text-white rounded-md hover:bg-red-500"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   )
}

export default Livechat;