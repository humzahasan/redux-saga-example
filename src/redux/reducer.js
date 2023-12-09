const sampleReducer = (pokemonData = [],action) => {
    switch(action.type) {
        case "SET_ALL_POKEMON":
            // console.log("REDUCER FILE")
            return action.data.results
        case "SET_POKEMON_DATA":
            // console.log("reducer SET_POKEMON_DATA",action)
            // console.log(pokemonData)
            return pokemonData.map(item => {
                if(item.name === action.data.name) {
                    return {...item,abilities:action.data.abilities}
                } else return item;
            })
        default:
            return pokemonData
    }
}

export default sampleReducer;