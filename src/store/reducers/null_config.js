import { NullConfigSelectedProducts } from "./selectedProducts";
import { NullConfigProductCounts } from "./selectedProductsCount";
import { InitializeCard } from "./cards";

const ToCardSelectedProducts = () => (dispatch, state) => {
    dispatch(InitializeCard({ selectedProducts: state.counts }));
    dispatch(NullConfigSelectedProducts);
    dispatch(NullConfigProductCounts);
};
export default ToCardSelectedProducts;
