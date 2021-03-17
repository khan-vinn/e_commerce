import { combineReducers, createStore } from "redux";
import ProductReducer from "./reducers/products";
import SelectedProductsReducer from "./reducers/selectedProducts";

const combinedReducer = combineReducers({
    products: ProductReducer,
    selectedProducts: SelectedProductsReducer,
});

const store = createStore(combinedReducer);

export default store;

window.store = store;
