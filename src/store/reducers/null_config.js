import { NullConfigSelectedProducts } from "./selectedProducts";
import { NullConfigProductCounts } from "./selectedProductsCount";
import { InitializeCard } from "./cards";

const ToCardSelectedProducts = () => (dispatch, getState) => {
    dispatch(InitializeCard(getState().counts));
    dispatch(NullConfigSelectedProducts());
    dispatch(NullConfigProductCounts());
};
export default ToCardSelectedProducts;
