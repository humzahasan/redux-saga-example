import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import pokemonSaga from "./saga";
// console.log("store file")

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(pokemonSaga)

export default store;