import React, { useEffect, useState } from 'react'
import instance from './instance'
import './Row.css'
function Row({title,fetchUrl}) {
    const[movie,setMovie]=useState([])
    const base_url="https://image.tmdb.org/t/p/original/"
useEffect(()=>{
  async function fetchData(){
    const request=await instance.get(fetchUrl)
    setMovie(request.data.results)
  }
  fetchData()
},[])

console.log(movie)
  return (
    <div className='row'>
        <h1>{title}</h1>
    <div className='row_posters'>
      {movie.map((m)=>(
        
        <img src={`${base_url}${m.poster_path} `} className='row_image' alt={m.name} />
      ))}
    </div>
    </div>
    
  )
}

export default Row