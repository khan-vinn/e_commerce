import { ProductMapper } from "./productMapper";
import { useHistory } from "react-router-dom";

export default function SelectedProducts(props) {
    const { selectedProducts, products, ToCardSelectedProducts } = props;
    let history = useHistory();
    const btnSubmitAction = () => {
        ToCardSelectedProducts();
        history.push("/cards");
    };
    return (
        <div className="selected_product__style">
            {products.map((el) => (
                <ProductMapper key={el.id} {...el} {...selectedProducts} />
            ))}
            {selectedProducts.length > 0 && (
                <button
                    className="selected_pr_order__btn"
                    id="btn"
                    onClick={btnSubmitAction}
                >
                    Order
                </button>
            )}
            {selectedProducts.length === 0 && (
                <h3>Please choose products to continue shop</h3>
            )}
        </div>
    );
}
