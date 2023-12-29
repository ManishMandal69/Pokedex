import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import Bookmark from './Bookmark';

export default function DetailsOfPokemon() {
    const pokeId = useParams().id
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    const [pokemonDetails ,setPokemonDetails ] = useState()
    const [bookmarkexist, setBookMarkExist] = useState()

    useEffect(()=>{
        setBookMarkExist(checkIfBookmarkExist())
    },[])
    
    const checkIfBookmarkExist = () =>{
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [] 
        return bookmarks.find((bookmark )=>
            bookmark.id == pokeId
    )
    }
        
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            // console.log(response)
          setPokemonDetails(response.data);
    
        })
        .catch((error) => {
            alert("service Error")
        })
      }, [baseURL]);

    

      const bURL = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`
    const [pokeDetails ,setPokeDetails ] = useState()
    useEffect(() => {
        axios.get(bURL).then((response) => {
            // console.log(response)
          setPokeDetails(response.data);
    
        })
        .catch((error) => {
            alert("service Error")
        })
      }, [bURL]);

      const handleBookmark = () =>{
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [] 

        if(!checkIfBookmarkExist()){
        bookmarks.push({name:pokemonDetails.name ,id : pokemonDetails.id , url: `https://pokeapi.co/api/v2/pokemon/${pokeId}`})
        setBookMarkExist(true)
        }else {
        bookmarks = bookmarks.filter((bookmark) => bookmark.id != pokeId);
        setBookMarkExist(false)
        }
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

      }
      
      
  return (
    
    <>
    {console.log(pokemonDetails)}
    <div className='container'>
        <div className="Heading ms-5 mt-5 mb-4 row">
            <div className='col-6 text-capitalize'>
            <h1>{pokemonDetails?.name}</h1>
            </div>
            <div className='col-6 d-flex justify-content-end mt-4' style={{cursor:"pointer"}} onClick={handleBookmark}>
                <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className={`bi bi-bookmarks ${bookmarkexist ? "text-danger" : ""}`} viewBox="0 0 16 16">
                <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
                <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
                </svg>
            </div>
        </div>
        <div>
            <div className=' row'>
            <div className='col-5 border rounded m-auto'>
                <img style={{width: "25rem"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`} alt=''/>
            </div>
            <div className='col-6'>
            <div className='row '>
                {
                    pokemonDetails?.types.map((type)=>
                    <div className='col-3 border rounded ms-2 bg-secondary text-white text-center'>
                        <h3>{type.type.name}</h3>
                    </div>
                    )
                }
                <div className='col-4 mt-2' style={{fontSize:"20px"}}>#{pokeId}</div>
            </div>
            <div className='row'>
                <div className='col-3 mt-3'>
                {
                    pokemonDetails?.stats.map((statname)=>
                    <p>{statname.stat.name} : </p>
                    )
                }
                </div>
                <div className='col-9 '>
                {
                    pokemonDetails?.stats.map((stat)=>
                <div className="progress mt-4" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                    {/* {console.log(stat.base_stat*100/pokemonDetails?.stats.reduce((total,stat)=>{return total+=stat.base_stat},0))} */}
                    <div class="progress-bar progress-bar-striped" style={{width: stat.base_stat*100/(pokemonDetails?.stats.reduce((total,stat)=>{return total+=stat.base_stat},0)) + "%"}}>{stat.base_stat}</div>
                    </div>
                    )
                }
                </div>
            </div>
            
            </div>
            </div>
            <div>
                <div className='ms-3'>
                    <div className='border bg-secondary text-white rounded mt-3 ms-4 mb-3 h4'>
                        Profile : 
                    </div>
                <div className='ms-4' >
                <div className='row'>
                <div className='col-2 border bg-secondary text-white rounded ms-2'>Height:{pokemonDetails?.height}</div>
                <div className='col-2 border bg-secondary text-white rounded ms-5'>Weight:{pokemonDetails?.weight}</div>
                <div className='col-2 border bg-secondary text-white rounded ms-5'>Colour:{pokeDetails?.color.name}</div>
                <div className='col-2 border bg-secondary text-white rounded ms-5'>Generation:{pokeDetails?.generation.name}</div>
                <div className='col-2 border bg-secondary text-white rounded ms-5'>Shape:{pokeDetails?.shape.name}</div>
                </div>
                <div className='row mt-4'>
                <div className='col-2 border bg-secondary text-white rounded ms-2'>Habitat:{pokeDetails?.habitat.name}</div>
                <div className='col-2 border bg-secondary text-white rounded ms-5'>Growth Rate:{pokeDetails?.growth_rate.name}</div>
                </div>
                </div>
                </div>
            </div>
            </div>
    </div>
    </>
  )
}
