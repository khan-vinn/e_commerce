import { ProductMapper } from "./productMapper";

export default function SelectedProducts({ selectedProducts, products }) {
    return (
        <div className="selected_product__style">
            {products.map((el) => (
                <ProductMapper key={el.id} {...el} {...selectedProducts} />
            ))}
            {selectedProducts.length > 0 && (
                <button
                    className="selected_pr_order__btn"
                    id="btn"
                    onClick={() =>
                        alert(
                            "Should be null in selected and count reducer store/ push to '/cards' and show how cost all shopping"
                        )
                    }
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
