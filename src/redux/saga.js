import {takeEvery,put} from 'redux-saga/effects'


function* getAllPokemonData() {
    // console.log("SAGA FILE!")
    let data = yield fetch("https://pokeapi.co/api/v2/pokemon");
    data = yield data.json()
    yield put({type:"SET_ALL_POKEMON",data})
}

function* getPokemonData(action) {
    // console.log("get pokemon data",action.data);
    let data = yield fetch(action.data.url);
    data = yield data.json();
    // console.log(data,"getPokemondataaaaa")
    yield put({type:"SET_POKEMON_DATA",data:{abilities:data.abilities,name:action.data.name}})
}

function* pokemonSaga() {
    yield takeEvery("GET_ALL_POKEMON",getAllPokemonData)
    yield takeEvery("GET_POKEMON_DATA",getPokemonData)
}


export default pokemonSaga;