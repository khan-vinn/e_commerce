import { combineReducers, createStore } from "redux";
import ProductReducer from "./reducers/products";
import SelectedProductsReducer from "./reducers/selectedProducts";
import SelectedProductsCountReducer from "./reducers/selectedProductsCount";

const combinedReducer = combineReducers({
    products: ProductReducer,
    selectedProducts: SelectedProductsReducer,
    counts: SelectedProductsCountReducer,
});

const store = createStore(combinedReducer);

export default store;

window.store = store;
