import { connect } from "react-redux";
import ProductsPage from "./products";
import SelectedProducts from "./selectedProducts";
import { addToCard,removeFromCard } from "../../store/reducers/selectedProducts";

const mapStateToPropsToProducts = (state) => ({ products: state.products });
const mapStateToProsToSelectedProducts = (state) => ({
    products: state.products,
    selectedProducts: state.selectedProducts,
});

export const ConnectedSelectedProducts = connect(
    mapStateToProsToSelectedProducts
)(SelectedProducts);
export const ConnectedProducts = connect(mapStateToPropsToProducts, {
    addToCard,removeFromCard
})(ProductsPage);
