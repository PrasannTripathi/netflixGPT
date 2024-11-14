import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-[15%] min-w-[15%]'>
      <img  src={IMG_CDN_URL + posterPath }/>
    </div>
  )
}

export default MovieCard