import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

export default function Home() {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const [pokemon ,setPokemon ] = useState([])
  const baseURL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

      const handleInfiniteScroll = () =>{
        // console.log("scrollheight" + document.documentElement.scrollHeight)
        //     console.log("innerHeight" + window.innerHeight)
        //     console.log("scrollTop" + document.documentElement.scrollTop)
        try{
            if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            
              setOffset(prev => prev + limit)
              
            }
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data.results)
          setPokemon((prev)=>[...prev,...response.data.results]);
        })
        .catch((error) => {
            alert("service Error")
        })
      }, [offset,limit]);
    useEffect(()=>{
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => {
          window.removeEventListener("scroll", handleInfiniteScroll)
        }
    },[])


  return (
    <div className='container'>
        <div className='row'>
          
          
        {
            pokemon?.map((pokemonDetails,index) => {
                return (
                  <div className='col-3 mt-3'>
                    <Card key={index}  pokemonDetails={pokemonDetails}/>
                </div>
                )
            })
        }
        </div>
    </div>
  )
}
