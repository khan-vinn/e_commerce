import { combineReducers, createStore, applyMiddleware } from "redux";
import CardReducer from "./reducers/cards";
import ProductReducer from "./reducers/products";
import SelectedProductsReducer from "./reducers/selectedProducts";
import SelectedProductsCountReducer from "./reducers/selectedProductsCount";
import thunkMiddleware from "redux-thunk";
import { AuthReducer } from "./reducers/auth";

const combinedReducer = combineReducers({
    products: ProductReducer,
    selectedProducts: SelectedProductsReducer,
    counts: SelectedProductsCountReducer,
    cards: CardReducer,
    auth: AuthReducer,
});

const store = createStore(combinedReducer, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
