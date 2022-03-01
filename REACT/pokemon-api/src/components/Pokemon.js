import React, {useState, useEffect} from 'react';

const Pokemon = (props) =>{
    const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=1126')
            .then(response=> response.json())
            .then(response => setPokemon(response.results))
    }, []);
    console.log(pokemon);
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