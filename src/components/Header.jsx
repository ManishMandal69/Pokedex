import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import PokeCard from './PokeCard'

export default function Header() {
  

  const [poke, setPoke] = useState("")
 const [pokemon, setPokemon] = useState()
 const [togglepopup, setTogglePopup] = useState(false)
  

 const handleSearch = () => {
   if(poke){
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${poke}`
    axios.get(baseURL).then((response) => {
    // console.log(response)
    setPokemon(response.data);
      setTogglePopup(true)
    })
    .catch((error) => {
        alert("service Error")
    })
    }else{
      alert("type a name to search")
    }
 };
  
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
          
        <div className="container">
            <div>
              <Link to={"/"} style={{"textDecoration": "none",color:"black",fontSize:"25px"}}>Pokedex</Link>
            </div>
            <form className="d-flex ms-6" role="search">
            <input className="form-control me-2 " value={poke} onChange={(e) =>setPoke(e.target.value)} style={{width:"700px"}} type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="button"  data-toggle="modal" data-target="#exampleModal" onClick={handleSearch}>Search</button>
           
            </form>
            <Link to={"/bookmark"} style={{"textDecoration": "none", color:"black",fontSize:"20px"}} >
            Bookmark
            </Link>
            {console.log(pokemon)}
        </div>
        
        </nav>
        {pokemon && togglepopup && <PokeCard setTogglePopup={setTogglePopup} pokemon={pokemon}/> }
    </div>
  )
}
