import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Card({pokemonDetails}) {
    const pokemonId = pokemonDetails.url.split("/")[6]
    // console.log(pokemonDetails)
    const imageURl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    
  return (
    <div>
        
        <div class="card" style={{width: "18rem" , margin:"auto"}}>
            <Link to={`/pokemon/${pokemonId}`}>
                <img src={imageURl} class="card-img-top" alt="..."/>
            </Link>
        <div class="card-body">
            <h5 class="card-title text-center text-capitalize">{pokemonDetails.name}</h5>
        </div>
        </div>
    </div>
  )
}
