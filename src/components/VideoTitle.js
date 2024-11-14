import React from 'react'

const VideoTitle = ({title, overView}) => {
  return (
    <div className=' pt-36  flex flex-col gap-5 absolute z-40 text-white  font-bold'>
     <h1 className=' font-bold text-3xl px-[10%]  '>{title}</h1>
     <p className='w-2/4 text-xl px-[10%]'>{overView}</p>
     <div className=' flex gap-8 px-[10%]'>
          <button className='bg-blue-600 p-2 rounded-lg w-[130px] text-white text-2xl font-bold '>▶️Play</button>
          <button className='bg-gray-400 p-2 rounded-lg w-[130px] text-2xl'>More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle