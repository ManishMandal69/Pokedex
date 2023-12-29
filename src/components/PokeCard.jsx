import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function PokeCard({pokemon,setTogglePopup}) {
    
   
    
        return (
            <div >
                <div className="bg-light border rounded" style={{height:"450px",width: "600px" , position: "absolute", zIndex: "999",left: "30%"}}>
                <span aria-hidden="true" className='d-flex justify-content-end' style={{fontSize : "30px", cursor:"pointer"}}  onClick={()=>setTogglePopup(false)}>&times;</span>
                <div class="card m-auto mt-5" style={{width: "18rem" }}>
                    <Link to={`/pokemon/${pokemon.id}`} onClick={()=>setTogglePopup(false)}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} class="card-img-top" alt="..."/>
                    </Link>
                <div class="card-body">
                    <h5 class="card-title">{pokemon.name}</h5>

                </div>
                </div>
                
                </div>
            </div>
            
        )
    

    

}
