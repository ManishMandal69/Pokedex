import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function Bookmark() {
  const [bookmarks, setBookmarks] = useState([])
  useEffect(()=>{
    let bookmarking = JSON.parse(localStorage.getItem("bookmarks")) || [] 
    setBookmarks(bookmarking)
    
  })
  return (
    <>
    <div className='row'>
    {
            bookmarks?.map((pokemonDetails,index) => {
                return (
                  <div className='col-3 mt-3'>
                <Card key={index}  pokemonDetails={pokemonDetails}/>
                </div>
                )
            })
        }
    </div>
    </>
  )
}
