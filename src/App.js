import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemon,getPokemonData } from './redux/action';
import { useEffect } from 'react';
function App() {
  const data = useSelector((state) => state.sampleReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("useEffect")
    dispatch(getAllPokemon())}  ,[dispatch]
    )
  
  // console.log(data,"IN APP.JS")

  return (
    <div className="App">
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:'24px'}} >
      {data?.map(item => (
        <div style={{border:'1px solid gray'}} key={item.name}>
        <h2>{item.name}</h2>
        {item.abilities ? item.abilities.map(ability => <span>{ability.ability.name},</span>)  : <p onClick={() => dispatch(getPokemonData(item.name,item.url))}>Show abilities</p>}
      </div>
      ))}
      </div>
      
    </div>
  );
}

export default App;