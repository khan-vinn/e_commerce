import { connect } from "react-redux";
import AddProduct from "../productForm/addProduct";
import ProductsPage from "./products";
import SelectedProducts from "./selectedProducts";
import { Product } from "./productMapper";
import { addProduct } from "../../store/reducers/products";
import {
    addCountToCard,
    initializeProductCount,
} from "../../store/reducers/selectedProductsCount";
import {
    addToCard,
    removeFromCard,
} from "../../store/reducers/selectedProducts";

const mapStateToPros = (state) => ({
    products: state.products,
    selectedProducts: state.selectedProducts,
    productCount: state.counts,
});

const mapStateToProsToProductCounts = (state) => ({
    productCount: state.counts,
});

export const ConnectedSelectedProducts = connect(mapStateToPros)(
    SelectedProducts
);

export const ConnectedFromToAddNewProduct = connect(null, { addProduct })(
    AddProduct
);

export const ConnectedProductListToCount = connect(
    mapStateToProsToProductCounts,
    { addCountToCard, initializeProductCount }
)(Product);

export const ConnectedProducts = connect(mapStateToPros, {
    addToCard,
    removeFromCard,
})(ProductsPage);
