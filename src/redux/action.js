export const getAllPokemon = () => {
    // console.log("ACTION FILE");
    return {type:"GET_ALL_POKEMON"}
}

export const getPokemonData = (name,url) => {
    // console.log("second action called");
    return {type:"GET_POKEMON_DATA",data:{name,url}}
}