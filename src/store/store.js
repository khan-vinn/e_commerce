import { combineReducers, createStore } from "redux";
import ProductReducer from "./reducers/products";
import CardReducer from "./reducers/cards";

const combinedReducer = combineReducers({
    products: ProductReducer,
    cards: CardReducer,
});

const store = createStore(combinedReducer);

export default store;

window.store = store;
