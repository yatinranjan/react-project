import React, { useEffect, useState } from 'react'
import "../index.css"
const Pokemon = () => {

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async() => {
        
        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log(data);
            const detailedPokemonData = data.results.map( async (curPokemon) => {
                // console.log(curPokemon.url);
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                // console.log(data)
                return data
            });
            // console.log(detailedPokemonData)
            const detailedResponses = await Promise.all(detailedPokemonData);
            console.log(detailedResponses)
        } catch (error){
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPokemon();
    },[]);
    return (
        <div>
            Hello Pokemon
        </div>
    )
}

export default Pokemon
