import { useState } from "react";

export default function Products(props) {
    const { products, selectedProducts, addToCard, removeFromCard } = props;

    const selectIdFun = (id) => {
        addToCard(id);
    };

    const disSelectIdFun = (id) => {
        removeFromCard(id);
    };

    return (
        <div className="product_list__style">
            {products.map((elem) => (
                <Product
                    key={elem.id}
                    selectedProducts={selectedProducts}
                    toDisSelect={disSelectIdFun}
                    toSelectClick={selectIdFun}
                    {...elem}
                />
            ))}
        </div>
    );
}

function Product(props) {
    const {
        amount,
        id,
        price,
        selectedProducts,
        title,
        toDisSelect,
        toSelectClick,
    } = props;
    const isIncludeInSelectedLists = () => selectedProducts.includes(id);

    const [disabled, setDisable] = useState(isIncludeInSelectedLists());

    const onNameSelected = () => {
        toSelectClick(id);
        amount > 0 && setDisable(true);
    };
    const onNameDesSelected = () => {
        toDisSelect(id);
        amount > 0 && setDisable(false);
    };

    return (
        <div className="product_item__style">
            <img />
            <div className="item_name__action">
                <h1>
                    {title} - {price}$
                </h1>
                {!disabled && (
                    <button id="select__btn" disabled={disabled} onClick={onNameSelected}>
                        Select
                    </button>
                )}
                {disabled && (
                    <button id="remove__btn" onClick={onNameDesSelected}>Remove</button>
                )}
            </div>
        </div>
    );
}
