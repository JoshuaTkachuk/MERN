import React, {useState, useEffect} from 'react';
import axios from 'axios';
const Pokemon = (props) =>{
    const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1126')
            .then(response=>{setPokemon(response.data.results)})
    }, []);
    console.log(pokemon)
    return(<div>
        {
            pokemon.map((pokemon,index)=>{
                return(<div key={index}>{pokemon.name}</div>);
            })
        }
    </div>
    );
}
export default Pokemon;